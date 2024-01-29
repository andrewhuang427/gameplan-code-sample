import Stripe from "stripe";
import {
  RemovePaymentMethodArgs,
  GetPaymentIntentsArgs,
} from "../args/PaymentResolverArgs";
import { Context } from "../context";
import { TournamentRegistration } from "../database-types/TournamentRegistration";

export class PaymentsService {
  async createSetupIntent(context: Context): Promise<Stripe.SetupIntent> {
    const {
      userId,
      services: { stripeService },
    } = context;

    const stripeCustomerId = await stripeService.createOrGetStripeCustomerId(
      context,
      userId
    );
    return await stripeService.createSetupIntent(stripeCustomerId);
  }

  async getPaymentMethods(context: Context): Promise<Stripe.PaymentMethod[]> {
    const {
      services: { stripeService, userService },
    } = context;

    const user = await userService.validateUserAsStripeCustomer(context);
    return await stripeService.getPaymentMethods(user.stripeCustomerId);
  }

  async removePaymentMethod(
    context: Context,
    args: RemovePaymentMethodArgs
  ): Promise<Stripe.PaymentMethod | null> {
    const {
      services: { stripeService, userService },
    } = context;

    const user = await userService.validateUserAsStripeCustomer(context);
    const paymentMethods = await stripeService.getPaymentMethods(
      user.stripeCustomerId
    );
    const paymentMethod = paymentMethods.find(
      (credential) => credential.id === args.paymentMethodId
    );
    if (paymentMethod == null) {
      return null;
    }

    return await stripeService.removePaymentMethod(args.paymentMethodId);
  }

  async getPaymentIntents(
    context: Context,
    args: GetPaymentIntentsArgs
  ): Promise<
    {
      paymentIntent: Stripe.PaymentIntent;
      registration: TournamentRegistration;
    }[]
  > {
    const {
      services: { stripeService, tournamentRegistrationService },
    } = context;

    const registrations = await tournamentRegistrationService.getRegistrations(
      context,
      {
        teamId: args.teamId,
      }
    );

    const paymentIntents = await Promise.all(
      registrations.map(async (registration) => {
        return {
          paymentIntent: await stripeService.getPaymentIntent(
            registration.stripePaymentIntentId
          ),
          registration,
        };
      })
    );

    return paymentIntents;
  }
}
