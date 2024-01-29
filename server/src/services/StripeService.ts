import Stripe from "stripe";
import { Context } from "../context";

const STRIPE_SECRET_KEY = String(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(STRIPE_SECRET_KEY);

export class StripeService {
  async createOrGetStripeCustomerId(
    context: Context,
    userId: number
  ): Promise<string> {
    const {
      dataStores: { userStore },
      services: { userService },
    } = context;

    const user = await userService.validateUser(context);
    if (user.stripeCustomerId != null) {
      return user.stripeCustomerId;
    }

    const newCustomer = await stripe.customers.create({ email: user.email });
    await userStore.update(context, {
      id: userId,
      stripeCustomerId: newCustomer.id,
    });

    return newCustomer.id;
  }

  async createSetupIntent(customerId: string): Promise<Stripe.SetupIntent> {
    return await stripe.setupIntents.create({
      automatic_payment_methods: {
        enabled: true,
      },
      customer: customerId,
    });
  }

  // ********************** Payment Methods **********************

  async getPaymentMethods(customerId: string): Promise<Stripe.PaymentMethod[]> {
    const response = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
    return response.data;
  }

  async removePaymentMethod(
    paymentMethodId: string
  ): Promise<Stripe.PaymentMethod> {
    return await stripe.paymentMethods.detach(paymentMethodId);
  }

  // ********************** Connected Account **********************

  async createConnectedAccount(): Promise<Stripe.Account> {
    return await stripe.accounts.create({
      type: "express",
      country: "US",
      capabilities: {
        card_payments: {
          requested: true,
        },
        transfers: {
          requested: true,
        },
      },
    });
  }

  async getConnectedAccount(
    connectedAccountId: string
  ): Promise<Stripe.Account> {
    return await stripe.accounts.retrieve(connectedAccountId);
  }

  async getConnectedAccountLink(
    connectedAccountId: string
  ): Promise<Stripe.AccountLink> {
    return await stripe.accountLinks.create({
      account: connectedAccountId,
      refresh_url: String(process.env.STRIPE_ACCOUNT_LINK_REFRESH_URL),
      return_url: String(process.env.STRIPE_ACCOUNT_LINK_RETURN_URL),
      type: "account_onboarding",
    });
  }

  // ********************** Payment Intent **********************

  async createPaymentIntent({
    amount,
    stripeCustomerId,
    connectedAccountId,
  }: {
    amount: number;
    stripeCustomerId: string;
    connectedAccountId: string;
  }) {
    const applicationFee = amount * Number(process.env.STRIPE_APPLICATION_FEE);

    return await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      customer: stripeCustomerId,
      automatic_payment_methods: {
        enabled: true,
      },
      application_fee_amount: Math.round(applicationFee),
      transfer_data: {
        destination: connectedAccountId,
      },
    });
  }

  async getPaymentIntent(
    paymentIntentId: string
  ): Promise<Stripe.PaymentIntent> {
    return await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ["payment_method", "latest_charge"],
    });
  }

  async getPaymentIntents(
    stripeCustomerId: string
  ): Promise<Stripe.PaymentIntent[]> {
    const response = await stripe.paymentIntents.list({
      customer: stripeCustomerId,
      expand: ["data.payment_method", "data.latest_charge"],
    });
    return response.data;
  }
}
