"use client";

import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import { registerTournamentFormConfig } from "./RegisterTournamentFormConfig";
import { RegisterTournamentFormStepper } from "./RegisterTournamentFormStepper";

export const RegisterTournamentFormContainer = () => {
  const { formStep } = useRegisterTournamentContext();

  return (
    <div className="grow grid grid-cols-3">
      <div
        className="flex justify-end col-span-1 border-r border-neutral-200"
        style={{ borderRightStyle: "solid" }}
      >
        <RegisterTournamentFormStepper />
      </div>
      <div className="col-span-2 p-14">
        <div className="max-w-2xl">
          {registerTournamentFormConfig[formStep].component}
        </div>
      </div>
    </div>
  );
};
