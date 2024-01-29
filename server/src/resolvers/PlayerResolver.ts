import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { GraphQLPlayer } from "../graphql-types/GraphQLPlayer";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { Context } from "../context";
import { CreatePlayerArgs } from "../args/PlayerResolverArgs";

@Resolver()
export class PlayerResolver {
  @Mutation(() => GraphQLPlayer, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createPlayer(
    @Ctx() context: Context,
    @Arg("args") args: CreatePlayerArgs
  ) {
    return await context.services.playerService.createPlayer(context, args);
  }
}
