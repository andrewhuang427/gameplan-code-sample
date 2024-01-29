import { useEffect, useRef, useState } from "react";
import {
  PaymentIntentFragment,
  SetupIntentFragment,
  useSetupRegistrationMutation,
} from "../__generated__/graphql";

export const useSetupRegistration = (tournamentId: number) => {
  const [setupIntent, setSetupIntent] = useState<SetupIntentFragment | null>(
    null
  );
  const [paymentIntent, setPaymentIntent] =
    useState<PaymentIntentFragment | null>(null);

  const [setup, { loading }] = useSetupRegistrationMutation();
  const isPaymentSetupInit = useRef(false);

  useEffect(() => {
    const handleSetupPayment = async () => {
      if (isPaymentSetupInit.current === false && !loading) {
        isPaymentSetupInit.current = true;
        const response = await setup({
          variables: {
            args: { tournamentId },
          },
        });
        const setupResponse = response.data?.setupRegistration;
        if (setupResponse != null) {
          setSetupIntent(setupResponse.setupIntent);
          setPaymentIntent(setupResponse.paymentIntent);
        }
      }
    };
    handleSetupPayment();
  }, [isPaymentSetupInit, loading]);

  return {
    setupIntent,
    paymentIntent,
    loading: loading || isPaymentSetupInit.current === true,
  };
};
