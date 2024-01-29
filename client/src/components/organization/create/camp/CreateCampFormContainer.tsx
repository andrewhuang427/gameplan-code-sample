"use client";

import CreateFormLayout from "../shared/CreateFormLayout";
import { createCampFormConfig } from "./CreateCampConfig";
import { useCreateCampContext } from "./CreateCampContext";
import { CreateCampFormStepper } from "./CreateCampFormSteppers";

export default function CreateTournamentFormContainer() {
  const { formStep } = useCreateCampContext();

  return (
    <CreateFormLayout
      stepperComponent={<CreateCampFormStepper />}
      formComponent={createCampFormConfig[formStep].component}
    />
  );
}
