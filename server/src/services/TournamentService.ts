import {
  CreateTournamentArgs,
  GetOrganizationTournamentsArgs,
  GetTournamentArgs,
  UpdateTournamentArgs,
} from "../args/TournamentResolverArgs";
import { Context } from "../context";
import { Tournament } from "../database-types/Tournament";

export class TournamentService {
  async createTournament(
    context: Context,
    args: CreateTournamentArgs
  ): Promise<Tournament[]> {
    const {
      dataStores: { tournamentStore },
    } = context;

    return await Promise.all(
      args.ageGroups.map(async (ageGroup) => {
        return await tournamentStore.create(context, {
          id: -1, // not being used
          tournamentName: args.tournamentName,
          tournamentAddress: args.tournamentAddress,
          cost: args.cost,
          sport: args.sport,
          ageGroup,
          teamMaximum: args.teamMaximum,
          gameMinimum: args.gameMinimum,
          startDate: args.startDate,
          endDate: args.endDate,
          organizationId: args.organizationId,
        });
      })
    );
  }

  async updateTournament(
    context: Context,
    args: UpdateTournamentArgs
  ): Promise<Tournament | null> {
    await this.validateTournament(context, args.id);
    return await context.dataStores.tournamentStore.update(context, {
      ...args,
      organizationId: -1, // not being used
    });
  }

  async getTournament(
    context: Context,
    args: GetTournamentArgs
  ): Promise<Tournament | null> {
    return await context.dataStores.tournamentStore.read(context, args.id);
  }

  async getOrganizationTournaments(
    context: Context,
    args: GetOrganizationTournamentsArgs
  ): Promise<Tournament[]> {
    return await context.dataStores.tournamentStore.getByOrganizationId(
      context,
      args.organizationId
    );
  }

  /**
   * Function returns a list of tournaments, where the tournament's
   * respective organization has finished the Stripe connected account
   * onboarding flow
   *
   * @param context
   * @returns list of tournaments
   */
  async getTournaments(context: Context): Promise<Tournament[]> {
    const allTournaments = await context.dataStores.tournamentStore.getMany(
      context,
      { includeOrganization: true }
    );

    return allTournaments.filter(
      (t) => t.organization.isStripeConnectedAccountOnboardingComplete === true
    );
  }

  async validateTournament(
    context: Context,
    tournamentId: number
  ): Promise<Tournament> {
    let tournament = await context.dataStores.tournamentStore.read(
      context,
      tournamentId
    );
    if (tournament == null) {
      throw new Error("Tournament not found.");
    }
    return tournament;
  }
}
