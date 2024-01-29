import { useCreateTournamentContext } from "./CreateTournamentContext";
import {
  CreateTournamentFormType,
  createTournamentFormConfig,
} from "./CreateTournamentFormConfig";
import {
  VerticalStepper,
  VerticalStepperOption,
} from "../../../shared/VerticalStepper";

export const CreateTournamentFormStepper = () => {
  const {
    tournamentDetailsForm,
    tournamentGeneralInformationForm,
    tournamentCostForm,
    formStep,
    setFormStep,
  } = useCreateTournamentContext();

  const getIsFormValid = (formType: CreateTournamentFormType) => {
    switch (formType) {
      case "General Information":
        return tournamentGeneralInformationForm.isValid();
      case "Details":
        return tournamentDetailsForm.isValid();
      case "Cost":
        return tournamentCostForm.isValid();
      case "Review":
        return true;
      default:
        return true;
    }
  };

  return (
    <VerticalStepper
      options={createTournamentFormConfig.map(
        (option, index): VerticalStepperOption => {
          const isFormValid = getIsFormValid(option.type);
          return {
            onClick: () => {
              setFormStep(index);
            },
            isChecked: index <= formStep && isFormValid,
            isDisabled: formStep < index,
            description: option.description,
            label: option.label,
          };
        }
      )}
    />
  );
};
