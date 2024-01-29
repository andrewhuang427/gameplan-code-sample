"use client";

import { Dispatch, SetStateAction, useState } from "react";

export const useMultiStepForm = (): {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
  handleAdvanceToNextFormStep: () => void;
  handleReturnToPreviousFormStep: () => void;
} => {
  const [formStep, setFormStep] = useState<number>(0);

  const handleAdvanceToNextFormStep = () => {
    setFormStep((prevFormStep) => prevFormStep + 1);
  };

  const handleReturnToPreviousFormStep = () => {
    setFormStep((prevFormStep) => prevFormStep - 1);
  };

  return {
    formStep,
    setFormStep,
    handleAdvanceToNextFormStep,
    handleReturnToPreviousFormStep,
  };
};
