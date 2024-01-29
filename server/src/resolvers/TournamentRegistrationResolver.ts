import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { Context } from "../context";
import {
  CreateRegistrationArgs,
  GetRegistrationsArgs,
  GetTournamentRegistrationsArgs,
  SetupRegistrationArgs,
} from "../args/RegistrationResolverArgs";
import { GraphQLRegistrationPaymentSetup } from "../graphql-types/GraphQLRegistrationPaymentsSetup";
import { GraphQLTournamentRegistration } from "../graphql-types/GraphQLTournamentRegistration";
import { GraphQLError } from "graphql";

@Resolver()
export class TournamentRegistrationResolver {
  @Mutation(() => GraphQLTournamentRegistration, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createRegistration(
    @Ctx() context: Context,
    @Arg("args") args: CreateRegistrationArgs
  ): Promise<GraphQLTournamentRegistration> {
    return await context.services.tournamentRegistrationService.createRegistration(
      context,
      args
    );
  }

  @Mutation(() => GraphQLRegistrationPaymentSetup, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async setupRegistration(
    @Ctx() context: Context,
    @Arg("args") args: SetupRegistrationArgs
  ): Promise<GraphQLRegistrationPaymentSetup> {
    const setupResponse =
      await context.services.tournamentRegistrationService.setupRegistration(
        context,
        args
      );

    const { setupIntent, paymentIntent } = setupResponse;
    if (
      setupIntent.client_secret == null ||
      paymentIntent.client_secret == null
    ) {
      throw new GraphQLError("Error creating Stripe setup or payment intent.");
    }

    return {
      setupIntent: {
        id: setupIntent.id,
        clientSecret: setupIntent.client_secret,
      },
      paymentIntent: {
        id: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
      },
    };
  }

  @Query(() => [GraphQLTournamentRegistration], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getRegistrations(
    @Ctx() context: Context,
    @Arg("args") args: GetRegistrationsArgs
  ): Promise<GraphQLTournamentRegistration[]> {
    return await context.services.tournamentRegistrationService.getRegistrations(
      context,
      args
    );
  }

  @Query(() => [GraphQLTournamentRegistration], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getTournamentRegistrations(
    @Ctx() context: Context,
    @Arg("args") args: GetTournamentRegistrationsArgs
  ): Promise<GraphQLTournamentRegistration[]> {
    return await context.services.tournamentRegistrationService.getTournamentRegistrations(
      context,
      args
    );
  }
}
