import { useCreateTournamentContext } from "../CreateTournamentContext";
import { NumberInput } from "@mantine/core";
import { FormWrapper } from "../../../../shared/FormWrapper";

export const CreateTournamentCostForm = () => {
  const { handleAdvanceToNextFormStep, tournamentCostForm } =
    useCreateTournamentContext();

  return (
    <FormWrapper
      onSubmit={handleAdvanceToNextFormStep}
      title="Tournament Cost"
      cta="Continue"
      isDisabled={!tournamentCostForm.isValid()}
    >
      <NumberInput
        prefix="$"
        label="Tournament Cost"
        description="Total tournament cost, excluding taxes and fees."
        min={0}
        clampBehavior="strict"
        {...tournamentCostForm.getInputProps("cost")}
      />
    </FormWrapper>
  );
};
