"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ReactNode } from "react";

const publishableKey =
  "pk_test_51OCXGYAVzeBDbCUYGuCPqDU21jOp9lW1UjdfkVyEAGi9Y50GDcTSHLrOOX8wq1NtipEybcxIK4ftr7UkEems6A6D004W3qk8mh";
const stripe = loadStripe(publishableKey);

type Props = {
  clientSecret: string;
  children: ReactNode;
};

export const PaymentStripeElementsProvider = ({
  clientSecret,
  children,
}: Props) => {
  return (
    <Elements
      stripe={stripe}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
          variables: {
            colorBackground: "#ffffff",
            colorText: "#30313d",
            colorDanger: "#fa5252",
            borderRadius: "4px",
          },
          rules: {
            ".Input": {
              borderColor: "#ced4da",
              boxShadow: "none",
              fontSize: "0.875rem",
            },
            ".Input:focus": {
              borderColor: "#3337d5",
              boxShadow: "none",
            },
            ".Input--invalid": {
              boxShadow: "none",
            },
            ".Label": {
              fontWeight: "500",
              fontSize: "0.875rem",
            },
            ".Error": {
              boxShadow: "none",
              fontSize: "0.750rem",
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  );
};
