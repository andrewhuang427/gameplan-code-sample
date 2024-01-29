import { MultiSelect, NumberInput } from "@mantine/core";
import { useCreateTournamentContext } from "../CreateTournamentContext";
import * as _ from "lodash";
import { FormWrapper } from "../../../../shared/FormWrapper";
import { SportSelector } from "../../../../shared/SportSelector";

const DEFAULT_AGE_RANGES: string[] = [..._.range(6, 19)].map((n) =>
  n.toString()
);

export const CreateTournamentDetailsForm = () => {
  const { tournamentDetailsForm, handleAdvanceToNextFormStep } =
    useCreateTournamentContext();

  return (
    <FormWrapper
      title="Tournament Details"
      onSubmit={handleAdvanceToNextFormStep}
      isDisabled={!tournamentDetailsForm.isValid()}
      cta="Continue"
    >
      <SportSelector
        label="Sport"
        {...tournamentDetailsForm.getInputProps("sport")}
      />
      <MultiSelect
        type="number"
        label="Age group(s)"
        description="Select all age groups which the tournament will host."
        data={DEFAULT_AGE_RANGES}
        {...tournamentDetailsForm.getInputProps("ageGroups")}
        hidePickedOptions
      />
      <NumberInput
        description="Maximum number of teams."
        label="Team Maximum"
        min={0}
        clampBehavior="strict"
        {...tournamentDetailsForm.getInputProps("teamMaximum")}
      />
      <NumberInput
        description="Minimum number of games guaranteed for teams."
        label="Game Minimum"
        min={0}
        clampBehavior="strict"
        {...tournamentDetailsForm.getInputProps("gameMinimum")}
      />
    </FormWrapper>
  );
};
