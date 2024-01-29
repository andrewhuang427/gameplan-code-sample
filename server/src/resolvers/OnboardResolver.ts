import { isAuthenticated } from "../middleware/IsAuthenticated";
import { Context } from "../context";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { CreateTeamArgs } from "../args/TeamResolverArgs";
import { CreateOrganizationArgs } from "../args/OrganizationResolverArgs";
import { GraphQLTeam } from "../graphql-types/GraphQLTeam";
import { GraphQLOrganization } from "../graphql-types/GraphQLOrganization";
import { GraphQLPlayer } from "../graphql-types/GraphQLPlayer";
import { CreatePlayerArgs } from "../args/PlayerResolverArgs";

@Resolver()
export class OnboardResolver {
  @Mutation(() => GraphQLTeam, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async onboardTeam(
    @Ctx() context: Context,
    @Arg("args") args: CreateTeamArgs
  ): Promise<GraphQLTeam> {
    return await context.services.onboardService.onboardTeam(context, args);
  }

  @Mutation(() => GraphQLOrganization, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async onboardOrganization(
    @Ctx() context: Context,
    @Arg("args") args: CreateOrganizationArgs
  ): Promise<GraphQLOrganization> {
    return await context.services.onboardService.onboardOrganization(
      context,
      args
    );
  }

  @Mutation(() => GraphQLPlayer, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async onboardPlayer(
    @Ctx() context: Context,
    @Arg("args") args: CreatePlayerArgs
  ): Promise<GraphQLPlayer> {
    return await context.services.onboardService.onboardPlayer(context, args);
  }
}
