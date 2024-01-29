import { Context } from "../context";
import { TournamentRegistration } from "../database-types/TournamentRegistration";
import {
  CreateRegistrationArgs,
  GetRegistrationsArgs,
  GetTournamentRegistrationsArgs,
  SetupRegistrationArgs,
} from "../args/RegistrationResolverArgs";
import Stripe from "stripe";
import { Tournament } from "../database-types/Tournament";

export class TournamentRegistrationService {
  async createRegistration(
    context: Context,
    args: CreateRegistrationArgs
  ): Promise<TournamentRegistration> {
    const {
      dataStores: { tournamentRegistrationStore },
    } = context;

    const tournamentId = args.tournamentId;
    await this.getIsTournamentEligibleForRegistration(context, tournamentId);

    return await tournamentRegistrationStore.create(context, {
      ...args,
      stripePaymentIntentId: args.paymentIntentId,
    });
  }

  async setupRegistration(
    context: Context,
    { tournamentId }: SetupRegistrationArgs
  ): Promise<{
    setupIntent: Stripe.SetupIntent;
    paymentIntent: Stripe.PaymentIntent;
  }> {
    const {
      userId,
      services: {
        stripeService,
        tournamentRegistrationService,
        organizationService,
      },
    } = context;

    const tournament =
      await tournamentRegistrationService.getIsTournamentEligibleForRegistration(
        context,
        tournamentId
      );

    const organization = await organizationService.validateOrganization(
      context,
      tournament.organizationId,
      { includeConnectedAccount: true }
    );
    if (organization.stripeConnectedAccountId == null) {
      throw new Error("Invalid organization.");
    }

    const stripeCustomerId = await stripeService.createOrGetStripeCustomerId(
      context,
      userId
    );

    const [setupIntent, paymentIntent] = await Promise.all([
      await stripeService.createSetupIntent(stripeCustomerId),
      await stripeService.createPaymentIntent({
        amount: tournament.cost * 100,
        stripeCustomerId,
        connectedAccountId: organization.stripeConnectedAccountId,
      }),
    ]);

    return { setupIntent, paymentIntent };
  }

  async getRegistrations(
    context: Context,
    args: GetRegistrationsArgs
  ): Promise<TournamentRegistration[]> {
    return await context.dataStores.tournamentRegistrationStore.getRegistrationsByTeamId(
      context,
      args,
      {
        includeTeam: false,
        includeTournament: true,
      }
    );
  }

  async getTournamentRegistrations(
    context: Context,
    args: GetTournamentRegistrationsArgs
  ): Promise<TournamentRegistration[]> {
    return await context.dataStores.tournamentRegistrationStore.getRegistrationsByTournamentId(
      context,
      args,
      { includeTeam: true, includeTournament: false }
    );
  }

  /**
   * Function validates that a tournament is eligible for registration:
   * (1) tournament exists
   * (2) tournament has not reached its team maximum
   *
   * @param context
   * @param tournamentId
   * @returns an object containing the tournament if the tournament is
   * eligible for registration
   */
  private async getIsTournamentEligibleForRegistration(
    context: Context,
    tournamentId: number
  ): Promise<Tournament> {
    const {
      dataStores: { tournamentStore, tournamentRegistrationStore },
    } = context;

    // todo: refactor into tournament service
    const tournament = await tournamentStore.read(context, tournamentId);
    if (tournament == null) {
      throw new Error("Tournament not found.");
    }

    const registrationCount =
      await tournamentRegistrationStore.getRegistrationCountByTournamentId(
        context,
        {
          tournamentId: tournamentId,
        }
      );
    if (registrationCount === tournament.teamMaximum) {
      throw new Error("Tournament has reached the team maximum.");
    }

    return tournament;
  }
}
