import { Stack, Text } from "@mantine/core";
import { FormWrapper } from "../../shared/FormWrapper";
import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import ConfirmationScreenWrapper from "../../organization/create/shared/ConfirmationScreenWrapper";
import ConfirmationScreenRowItem from "../../shared/ConfirmationScreenRowItem";
import PaymentMethodDisplay from "../../shared/PaymentMethodDisplay";
import Divider from "../../shared/Divider";
import { useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

export const RegisterTournamentConfirmationScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const stripe = useStripe();

  const {
    handleCreateRegistration,
    selectedPaymentMethod,
    isRegistrationInProgress,
    tournament,
    paymentIntent,
  } = useRegisterTournamentContext();

  const handleSubmitPayment = async () => {
    if (
      stripe == null ||
      paymentIntent == null ||
      selectedPaymentMethod == null
    ) {
      return;
    }
    setIsLoading(true);
    const { error, paymentIntent: responsePaymentIntent } =
      await stripe.confirmPayment({
        clientSecret: paymentIntent.clientSecret,
        confirmParams: {
          payment_method: selectedPaymentMethod.id,
          return_url: "http://localhost:3000/team",
        },
        redirect: "if_required",
      });

    if (error != null) {
      setIsLoading(false);
      return;
    }
    if (responsePaymentIntent == null) {
      setIsLoading(false);
      return;
    }
    if (responsePaymentIntent.status === "succeeded") {
      setIsLoading(false);
      await handleCreateRegistration();
    }
  };

  return (
    <FormWrapper
      isLoading={isLoading || isRegistrationInProgress}
      cta="Submit"
      onSubmit={handleSubmitPayment}
      title="Review Registration"
    >
      <ConfirmationScreenWrapper>
        <Stack p={20}>
          <Text fw={500}>General Tournament Information</Text>
          <ConfirmationScreenRowItem
            label="Tournament Name"
            value={tournament.tournamentName}
          />
          <ConfirmationScreenRowItem
            label="Tournament Address"
            value={tournament.tournamentAddress}
          />
        </Stack>
        <Divider />
        <Stack p={20}>
          <Text fw={500}>Payment Information</Text>
          <ConfirmationScreenRowItem
            label="Total Cost"
            value={tournament.cost}
          />
          <ConfirmationScreenRowItem
            label="Payment Method"
            value={
              selectedPaymentMethod != null ? (
                <PaymentMethodDisplay paymentMethod={selectedPaymentMethod} />
              ) : null
            }
          />
        </Stack>
      </ConfirmationScreenWrapper>
    </FormWrapper>
  );
};
