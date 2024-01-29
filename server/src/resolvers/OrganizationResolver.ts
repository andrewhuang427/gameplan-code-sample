import { Context } from "../context";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import {
  GetConnectedAccountArgs,
  OnboardOrganizationToStripeArgs,
} from "../args/OrganizationResolverArgs";
import { GraphQLOrganization } from "../graphql-types/GraphQLOrganization";
import { GraphQLConnectedAccount } from "../graphql-types/stripe/GraphQLConnectedAccount";
import { GraphQLOnboardOrganizationToStripeResponse } from "../graphql-types/GraphQLOnboardOrganizationToStripeResponse";

@Resolver()
export class OrganizationResolver {
  @Query(() => GraphQLOrganization, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getOrganization(
    @Ctx() context: Context
  ): Promise<GraphQLOrganization | null> {
    return await context.services.organizationService.getOrganization(context);
  }

  @Query(() => GraphQLConnectedAccount, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async getConnectedAccount(
    @Ctx() context: Context,
    @Arg("args") args: GetConnectedAccountArgs
  ): Promise<GraphQLConnectedAccount | null> {
    const connectedAccount =
      await context.services.organizationService.getConnectedAccount(
        context,
        args
      );
    if (connectedAccount == null) {
      return null;
    }
    return {
      id: connectedAccount.id,
      isEnabled:
        connectedAccount.payouts_enabled && connectedAccount.charges_enabled,
    };
  }

  @Mutation(() => GraphQLOnboardOrganizationToStripeResponse, {
    nullable: true,
  })
  @UseMiddleware(isAuthenticated)
  async onboardOrganizationToStripe(
    @Ctx() context: Context,
    @Arg("args") args: OnboardOrganizationToStripeArgs
  ): Promise<GraphQLOnboardOrganizationToStripeResponse> {
    const connectedAccountLink =
      await context.services.organizationService.onboardOrganizationToStripe(
        context,
        args
      );
    return {
      url: connectedAccountLink.url,
    };
  }
}
