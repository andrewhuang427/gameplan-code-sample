import { TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { AddressAutocomplete } from "../../../../shared/AddressAutocomplete";
import { useCreateTournamentContext } from "../CreateTournamentContext";
import { FormWrapper } from "../../../../shared/FormWrapper";

export const CreateTournamentGeneralInformationForm = () => {
  const { tournamentGeneralInformationForm, handleAdvanceToNextFormStep } =
    useCreateTournamentContext();

  return (
    <FormWrapper
      title="General Tournament Information"
      onSubmit={handleAdvanceToNextFormStep}
      cta="Continue"
      isDisabled={!tournamentGeneralInformationForm.isValid()}
    >
      <TextInput
        label="Tournament Name"
        description="Tournament will be displayed to users with the following name."
        {...tournamentGeneralInformationForm.getInputProps("tournamentName")}
      />
      <AddressAutocomplete
        label="Tournament Address"
        error={
          tournamentGeneralInformationForm.getInputProps("tournamentAddress")
            .error
        }
        defaultValue={tournamentGeneralInformationForm.values.tournamentAddress}
        onChange={
          tournamentGeneralInformationForm.getInputProps("tournamentAddress")
            .onChange
        }
      />
      <DatePickerInput
        minDate={new Date()}
        type="range"
        label="Tournament Dates"
        description="Pick start and end dates of the tournament."
        placeholder="Start Date - End Date"
        {...tournamentGeneralInformationForm.getInputProps("tournamentDates")}
      />
    </FormWrapper>
  );
};
