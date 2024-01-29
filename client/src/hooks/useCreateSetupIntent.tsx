"use client";

import { useState, useRef, useEffect } from "react";
import { useCreateSetupIntentMutation } from "../__generated__/graphql";

export const useCreateSetupIntent = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  const [setupPayment, { loading }] = useCreateSetupIntentMutation();
  const isSetupPaymentInitiated = useRef(false);

  const fetchSetupIntentAndSetClientSecret = async () => {
    const response = await setupPayment();
    setClientSecret(response.data?.createSetupIntent?.clientSecret ?? "");
  };

  const resetSetupIntent = () => {
    fetchSetupIntentAndSetClientSecret();
  };

  useEffect(() => {
    if (isSetupPaymentInitiated.current === false && !loading) {
      isSetupPaymentInitiated.current = true;
      fetchSetupIntentAndSetClientSecret();
    }
  }, [isSetupPaymentInitiated.current, loading]);

  return {
    loading: loading || isSetupPaymentInitiated.current === false,
    clientSecret,
    resetSetupIntent,
  };
};
