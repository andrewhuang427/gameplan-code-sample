import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { GraphQLCamp } from "../graphql-types/GraphQLCamp";
import { Context } from "../context";
import {
  CreateCampArgs,
  GetCampArgs,
  GetOrganizationCampsArgs,
  UpdateCampArgs,
} from "../args/CampResolverArgs";

@Resolver()
export class CampResolver {
  @Mutation(() => GraphQLCamp, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createCamp(
    @Ctx() context: Context,
    @Arg("args") args: CreateCampArgs
  ): Promise<GraphQLCamp | null> {
    return await context.services.campService.createCamp(context, args);
  }

  @Mutation(() => GraphQLCamp, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async updateCamp(
    @Ctx() context: Context,
    @Arg("args") args: UpdateCampArgs
  ): Promise<GraphQLCamp | null> {
    return await context.services.campService.updateCamp(context, args);
  }

  @Query(() => GraphQLCamp, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getCamp(
    @Ctx() context: Context,
    @Arg("args") args: GetCampArgs
  ): Promise<GraphQLCamp | null> {
    return await context.services.campService.getCamp(context, args.id);
  }

  @Query(() => [GraphQLCamp])
  @UseMiddleware(isAuthenticated)
  async getOrganizationCamps(
    @Ctx() context: Context,
    @Arg("args") args: GetOrganizationCampsArgs
  ): Promise<GraphQLCamp[]> {
    return await context.services.campService.getOrganizationCamps(
      context,
      args.organizationId
    );
  }

  @Query(() => [GraphQLCamp])
  async getCamps(@Ctx() context: Context): Promise<GraphQLCamp[]> {
    return await context.services.campService.getCamps(context);
  }
}
