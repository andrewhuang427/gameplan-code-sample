import {
  VerticalStepper,
  VerticalStepperOption,
} from "../../../shared/VerticalStepper";
import { createCampFormConfig } from "./CreateCampConfig";
import { useCreateCampContext } from "./CreateCampContext";

export const CreateCampFormStepper = () => {
  const { formStep, setFormStep } = useCreateCampContext();

  return (
    <VerticalStepper
      options={createCampFormConfig.map(
        (option, index): VerticalStepperOption => {
          const isFormValid = true;
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
