import { NumberInput } from "@mantine/core";
import * as _ from "lodash";
import { FormWrapper } from "../../../../shared/FormWrapper";
import { SportSelector } from "../../../../shared/SportSelector";
import { useCreateCampContext } from "../CreateCampContext";

export const CreateCampDetailsForm = () => {
  const { campDetailsForm, handleAdvanceToNextFormStep } =
    useCreateCampContext();

  return (
    <FormWrapper
      title="Camp Details"
      onSubmit={handleAdvanceToNextFormStep}
      isDisabled={!campDetailsForm.isValid()}
      cta="Continue"
    >
      <SportSelector
        label="Sport"
        {...campDetailsForm.getInputProps("sport")}
      />
      <NumberInput
        description="Enter eligible age group for the camp."
        label="Age group"
        suffix="U"
        min={0}
        clampBehavior="strict"
        {...campDetailsForm.getInputProps("ageGroup")}
      />
      <NumberInput
        description="Maximum number of registrants."
        label="Player Maximum"
        min={0}
        clampBehavior="strict"
        {...campDetailsForm.getInputProps("playerMaximum")}
      />
    </FormWrapper>
  );
};
