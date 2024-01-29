"use client";

import { CreateTournamentFormStepper } from "./CreateTournamentFormStepper";
import { useCreateTournamentContext } from "./CreateTournamentContext";
import { createTournamentFormConfig } from "./CreateTournamentFormConfig";
import CreateFormLayout from "../shared/CreateFormLayout";

export const CreateTournamentFormContainer = () => {
  const { formStep } = useCreateTournamentContext();

  return (
    <CreateFormLayout
      stepperComponent={<CreateTournamentFormStepper />}
      formComponent={createTournamentFormConfig[formStep].component}
    />
  );
};
