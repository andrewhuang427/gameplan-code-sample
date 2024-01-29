import Stripe from "stripe";
import { GraphQLPaymentMethod } from "../graphql-types/stripe/GraphQLPaymentMethod";
import { GraphQLCharge } from "../graphql-types/stripe/GraphQLCharge";
import { GraphQLDetailedPaymentIntent } from "../graphql-types/stripe/GraphQLDetailedPaymentIntent";

export const convertStripePaymentMethodToGraphQLPaymentMethod = (
  paymentMethod: Stripe.PaymentMethod
): GraphQLPaymentMethod | null => {
  const card = paymentMethod.card;
  if (card != null) {
    return {
      id: paymentMethod.id,
      card: {
        brand: card.brand,
        country: card.country,
        expiryMonth: card.exp_month,
        expiryYear: card.exp_year,
        funding: card.funding,
        lastFour: card.last4,
      },
    };
  }

  return null;
};

export const convertStripeChargeToGraphQLCharge = (
  charge: Stripe.Charge
): GraphQLCharge | null => {
  return {
    id: charge.id,
    amount: charge.amount,
    applicationFeeAmount: charge.application_fee_amount,
    receiptUrl: charge.receipt_url,
    created: charge.created,
  };
};

export const convertStripePaymentIntentToGraphQLDetailedPaymentIntent = (
  paymentIntent: Stripe.PaymentIntent,
  eventName: string
): GraphQLDetailedPaymentIntent => {
  let paymentMethodObject: GraphQLPaymentMethod | null = null;
  const paymentMethod = paymentIntent.payment_method;

  if (paymentMethod != null && typeof paymentMethod !== "string") {
    paymentMethodObject =
      convertStripePaymentMethodToGraphQLPaymentMethod(paymentMethod);
  }

  let chargeObject: GraphQLCharge | null = null;
  const charge = paymentIntent.latest_charge;
  if (charge != null && typeof charge !== "string") {
    chargeObject = convertStripeChargeToGraphQLCharge(charge);
  }

  return {
    eventName,
    paymentIntentId: paymentIntent.id,
    paymentMethod: paymentMethodObject,
    charge: chargeObject,
  };
};
