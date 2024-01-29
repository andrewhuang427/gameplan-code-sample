import { isAuthenticated } from "../middleware/IsAuthenticated";
import { CreateTeamArgs, GetTeamsArgs } from "../args/TeamResolverArgs";
import { Context } from "../context";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { GraphQLTeam } from "../graphql-types/GraphQLTeam";

@Resolver()
export class TeamResolver {
  @Mutation(() => GraphQLTeam, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createTeam(
    @Ctx() context: Context,
    @Arg("args") args: CreateTeamArgs
  ): Promise<GraphQLTeam> {
    return await context.services.teamService.createTeam(context, args);
  }

  @Query(() => [GraphQLTeam])
  @UseMiddleware(isAuthenticated)
  async getTeams(
    @Ctx() context: Context,
    @Arg("args") args: GetTeamsArgs
  ): Promise<GraphQLTeam[]> {
    return await context.services.teamService.getTeams(context, args);
  }
}
