import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Context } from "../context";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import {
  convertStripePaymentIntentToGraphQLDetailedPaymentIntent,
  convertStripePaymentMethodToGraphQLPaymentMethod,
} from "../utils/PaymentMethodAdapter";
import {
  GetPaymentIntentsArgs,
  RemovePaymentMethodArgs,
} from "../args/PaymentResolverArgs";
import { GraphQLSetupIntent } from "../graphql-types/stripe/GraphQLSetupIntent";
import { GraphQLPaymentMethod } from "../graphql-types/stripe/GraphQLPaymentMethod";
import { GraphQLDetailedPaymentIntent } from "../graphql-types/stripe/GraphQLDetailedPaymentIntent";

@Resolver()
export class PaymentsResolver {
  @Mutation(() => GraphQLSetupIntent, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async createSetupIntent(
    @Ctx() context: Context
  ): Promise<GraphQLSetupIntent | null> {
    const setUpIntent = await context.services.paymentService.createSetupIntent(
      context
    );
    if (setUpIntent.client_secret == null) {
      return null;
    }
    return { id: setUpIntent.id, clientSecret: setUpIntent.client_secret };
  }

  @Query(() => [GraphQLPaymentMethod])
  @UseMiddleware(isAuthenticated)
  async getPaymentMethods(
    @Ctx() context: Context
  ): Promise<GraphQLPaymentMethod[]> {
    const paymentMethods =
      await context.services.paymentService.getPaymentMethods(context);
    const graphQLPaymentMethods = paymentMethods.map((p) =>
      convertStripePaymentMethodToGraphQLPaymentMethod(p)
    );
    return graphQLPaymentMethods.filter((p): p is GraphQLPaymentMethod => !!p);
  }

  @Mutation(() => GraphQLPaymentMethod, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async removePaymentMethod(
    @Ctx() context: Context,
    @Arg("args") args: RemovePaymentMethodArgs
  ): Promise<GraphQLPaymentMethod | null> {
    const removeResponse =
      await context.services.paymentService.removePaymentMethod(context, args);
    if (removeResponse == null) {
      return null;
    }
    return convertStripePaymentMethodToGraphQLPaymentMethod(removeResponse);
  }

  @Query(() => [GraphQLDetailedPaymentIntent])
  @UseMiddleware(isAuthenticated)
  async getPaymentIntents(
    @Ctx() context: Context,
    @Arg("args") args: GetPaymentIntentsArgs
  ): Promise<GraphQLDetailedPaymentIntent[]> {
    const intents = await context.services.paymentService.getPaymentIntents(
      context,
      args
    );
    return intents.map(({ registration, paymentIntent }) => {
      return convertStripePaymentIntentToGraphQLDetailedPaymentIntent(
        paymentIntent,
        registration.tournament?.tournamentName ?? ""
      );
    });
  }
}
