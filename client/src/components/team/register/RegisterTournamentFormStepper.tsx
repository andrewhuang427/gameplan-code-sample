import { VerticalStepper } from "../../shared/VerticalStepper";
import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import { registerTournamentFormConfig } from "./RegisterTournamentFormConfig";

export const RegisterTournamentFormStepper = () => {
  const { formStep, setFormStep } = useRegisterTournamentContext();

  return (
    <div className="px-5 py-14">
      <VerticalStepper
        options={registerTournamentFormConfig.map((option, index) => {
          const isFormValid = true;
          return {
            onClick: () => {
              setFormStep(index);
            },
            isChecked: index <= formStep && isFormValid,
            isDisabled: formStep < index,
            label: option.label,
            description: option.description,
          };
        })}
      />
    </div>
  );
};
