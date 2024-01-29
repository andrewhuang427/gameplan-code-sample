import { Stack, TextInput, Button } from "@mantine/core";
import { StateSelector } from "../../shared/StateSelector";
import { SportSelector } from "../../shared/SportSelector";
import { TeamGeneralInformationFormType } from "@/hooks/useCreateTeamGeneralInformationForm";

type Props = {
  formDetails: TeamGeneralInformationFormType;
  onContinueClick?: () => void;
};

export const CreateTeamGeneralInformationForm = ({
  formDetails,
  onContinueClick,
}: Props) => {
  return (
    <Stack>
      <TextInput
        label="Team Name"
        placeholder="Giants"
        {...formDetails.getInputProps("teamName")}
      />
      <SportSelector
        label="Sport"
        placeholder="Baseball, Basketball, Soccer"
        {...formDetails.getInputProps("sport")}
      />
      <TextInput
        label="Team City"
        placeholder="San Francisco"
        {...formDetails.getInputProps("teamCity")}
      />
      <StateSelector
        placeholder="California"
        label="Team State"
        {...formDetails.getInputProps("teamState")}
      />
      {onContinueClick != null && (
        <Button onClick={onContinueClick}>Continue</Button>
      )}
    </Stack>
  );
};
