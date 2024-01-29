import { NumberInput } from "@mantine/core";
import { FormWrapper } from "../../../../shared/FormWrapper";
import { useCreateCampContext } from "../CreateCampContext";

export const CreateCampCostForm = () => {
  const { handleAdvanceToNextFormStep, campCostForm } = useCreateCampContext();

  return (
    <FormWrapper
      onSubmit={handleAdvanceToNextFormStep}
      title="Camp Cost"
      cta="Continue"
      isDisabled={!campCostForm.isValid()}
    >
      <NumberInput
        prefix="$"
        label="Camp Cost"
        description="Total camp cost, excluding taxes and fees."
        min={0}
        clampBehavior="strict"
        {...campCostForm.getInputProps("cost")}
      />
    </FormWrapper>
  );
};
