"use client";

import { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

type Props = {
  paymentIntentClientSecret: string;
};

const PaymentStatus = ({ paymentIntentClientSecret }: Props) => {
  const stripe = useStripe();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    stripe
      .retrievePaymentIntent(paymentIntentClientSecret)
      .then(({ paymentIntent }) => {
        if (paymentIntent == null) {
          return;
        }
        // Inspect the SetupIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Success! Your payment method has been saved.");
            break;

          case "processing":
            setMessage(
              "Processing payment details. We'll update you when processing is complete."
            );
            break;

          case "requires_payment_method":
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage(
              "Failed to process payment details. Please try another payment method."
            );
            break;
        }
      });
  }, [stripe, paymentIntentClientSecret]);

  return message;
};

export default PaymentStatus;
