"use client";

import { Button, Stack } from "@mantine/core";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const CARD_ELEMENT_OPTIONS: StripePaymentElementOptions = {
  layout: {
    type: "tabs",
    defaultCollapsed: false,
  },
};

type Props = {
  onPaymentMethodSuccess: () => void;
};

export function PaymentAddPaymentMethodForm({ onPaymentMethodSuccess }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return null;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setIsLoading(false);
    } else {
      onPaymentMethodSuccess();
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <PaymentElement id="payment-element" options={CARD_ELEMENT_OPTIONS} />
      <Button
        variant="light"
        leftSection={<IconPlus />}
        loading={isLoading}
        onClick={handleSubmit}
      >
        Add Payment Method
      </Button>
    </Stack>
  );
}
