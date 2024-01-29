"use client";

import TeamPaymentsSectionWrapper from "./TeamPaymentsSectionWrapper";
import { useCreateSetupIntent } from "../../../hooks/useCreateSetupIntent";
import { PaymentStripeElementsProvider } from "../../shared/PaymentStripeElementsProvider";
import TeamPaymentsPaymentMethodList from "./TeamPaymentsPaymentMethodList";
import { IconShieldLock } from "@tabler/icons-react";

function TeamPaymentsPaymentMethodsSection() {
  const { clientSecret, loading, resetSetupIntent } = useCreateSetupIntent();
  return (
    <TeamPaymentsSectionWrapper
      icon={<IconShieldLock />}
      title="Payment Methods"
      description="Saving payment methods allows you easily register for tournaments in the future, allowing you to pay without having to re-enter payment details."
      isLoading={loading}
    >
      {clientSecret !== "" && (
        <PaymentStripeElementsProvider clientSecret={clientSecret}>
          <TeamPaymentsPaymentMethodList resetSetupIntent={resetSetupIntent} />
        </PaymentStripeElementsProvider>
      )}
    </TeamPaymentsSectionWrapper>
  );
}

export default TeamPaymentsPaymentMethodsSection;
