import { LoginArgs, SignupArgs } from "../args/UserResolverArgs";
import { Context } from "../context";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { GraphQLAuthResponse } from "../graphql-types/GraphQLAuthResponse";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { GraphQLUser } from "../graphql-types/GraphQLUser";

@Resolver()
export class UserResolver {
  @Mutation(() => GraphQLAuthResponse, { nullable: true })
  async signup(
    @Ctx() context: Context,
    @Arg("args") args: SignupArgs
  ): Promise<GraphQLAuthResponse | null> {
    return await context.services.userService.signup(context, args);
  }

  @Mutation(() => GraphQLAuthResponse, { nullable: true })
  async login(
    @Ctx() context: Context,
    @Arg("args") args: LoginArgs
  ): Promise<GraphQLAuthResponse | null> {
    return await context.services.userService.login(context, args);
  }

  @Query(() => GraphQLUser, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async me(@Ctx() context: Context): Promise<GraphQLUser | null> {
    return await context.services.userService.me(context);
  }
}
