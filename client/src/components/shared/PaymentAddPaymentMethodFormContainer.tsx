"use client";

import { FormWrapper } from "./FormWrapper";
import { PaymentAddPaymentMethodForm } from "./PaymentAddPaymentMethodForm";

type Props = {
  onComplete: () => void;
  shouldHideTitle?: boolean;
};
export const PaymentAddPaymentMethodFormContainer = ({
  onComplete,
  shouldHideTitle = false,
}: Props) => {
  return (
    <FormWrapper title={shouldHideTitle ? undefined : "Add Payment Method"}>
      <PaymentAddPaymentMethodForm
        onPaymentMethodSuccess={() => {
          onComplete();
        }}
      />
    </FormWrapper>
  );
};
