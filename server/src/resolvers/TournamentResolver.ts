import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import {
  CreateTournamentArgs,
  GetOrganizationTournamentsArgs,
  GetTournamentArgs,
  UpdateTournamentArgs,
} from "../args/TournamentResolverArgs";
import { Context } from "../context";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { GraphQLTournament } from "../graphql-types/GraphQLTournament";

@Resolver()
export class TournamentResolver {
  @Mutation(() => [GraphQLTournament], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createTournament(
    @Ctx() context: Context,
    @Arg("args") args: CreateTournamentArgs
  ): Promise<GraphQLTournament[]> {
    const tournaments =
      await context.services.tournamentService.createTournament(context, args);

    return await context.converters.tournamentConverter.convertMultipleToGraphQL(
      context,
      tournaments
    );
  }

  @Mutation(() => GraphQLTournament, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async updateTournament(
    @Ctx() context: Context,
    @Arg("args") args: UpdateTournamentArgs
  ): Promise<GraphQLTournament | null> {
    const updatedTournament =
      await context.services.tournamentService.updateTournament(context, args);
    if (updatedTournament == null) {
      return null;
    }
    return await context.converters.tournamentConverter.convertToGraphQL(
      context,
      updatedTournament
    );
  }

  @Query(() => GraphQLTournament, { nullable: true })
  async getTournament(
    @Ctx() context: Context,
    @Arg("args") args: GetTournamentArgs
  ): Promise<GraphQLTournament | null> {
    const tournament = await context.services.tournamentService.getTournament(
      context,
      args
    );
    if (tournament == null) {
      return null;
    }
    return await context.converters.tournamentConverter.convertToGraphQL(
      context,
      tournament
    );
  }

  @Query(() => [GraphQLTournament], { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getOrganizationTournaments(
    @Ctx() context: Context,
    @Arg("args") args: GetOrganizationTournamentsArgs
  ): Promise<GraphQLTournament[]> {
    const tournaments =
      await context.services.tournamentService.getOrganizationTournaments(
        context,
        args
      );
    return await context.converters.tournamentConverter.convertMultipleToGraphQL(
      context,
      tournaments
    );
  }

  @Query(() => [GraphQLTournament], { nullable: true })
  async getTournaments(@Ctx() context: Context): Promise<GraphQLTournament[]> {
    const tournaments = await context.services.tournamentService.getTournaments(
      context
    );
    return await context.converters.tournamentConverter.convertMultipleToGraphQL(
      context,
      tournaments
    );
  }
}
