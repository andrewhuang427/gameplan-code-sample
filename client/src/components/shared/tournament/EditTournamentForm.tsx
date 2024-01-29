import { Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { TournamentFragment } from "../../../__generated__/graphql";
import { SportSelector } from "../SportSelector";
import { AddressAutocomplete } from "../AddressAutocomplete";
import { useEditTournament } from "../../../hooks/useEditTournament";
import { DatePickerInput } from "@mantine/dates";

type Props = {
  tournament: TournamentFragment;
  onComplete: () => void;
};

function EditTournamentForm({ tournament, onComplete }: Props) {
  const { form, handleUpdate, loading } = useEditTournament(tournament);

  const onSaveClick = async () => {
    const response = await handleUpdate();
    if (response != null) {
      onComplete();
    }
  };

  return (
    <Stack>
      <TextInput
        label="Tournament Name"
        {...form.getInputProps("tournamentName")}
      />
      <AddressAutocomplete
        label="Tournament Address"
        error={form.getInputProps("tournamentAddress").error}
        defaultValue={form.values.tournamentAddress}
        onChange={form.getInputProps("tournamentAddress").onChange}
      />
      <NumberInput
        prefix="$"
        label="Tournament Cost"
        description="Total tournament cost, excluding taxes and fees."
        min={0}
        clampBehavior="strict"
        allowNegative={false}
        {...form.getInputProps("tournamentCost")}
      />
      <DatePickerInput
        type="range"
        label="Tournament Dates"
        placeholder="Start Date - End Date"
        {...form.getInputProps("tournamentDates")}
      />
      <SportSelector label="Sport" {...form.getInputProps("sport")} />
      <NumberInput
        label="Age Group"
        suffix="U"
        {...form.getInputProps("ageGroup")}
        allowNegative={false}
      />
      <NumberInput
        label="Team Maximum"
        {...form.getInputProps("teamMaximum")}
        allowNegative={false}
      />
      <NumberInput
        label="Game Minimum"
        {...form.getInputProps("gameMinimum")}
        allowNegative={false}
      />

      <Button variant="light" onClick={onSaveClick} loading={loading}>
        Save Changes
      </Button>
    </Stack>
  );
}

export default EditTournamentForm;
