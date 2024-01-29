import { TextInput } from "@mantine/core";
import { AddressAutocomplete } from "../../../../shared/AddressAutocomplete";
import { FormWrapper } from "../../../../shared/FormWrapper";
import { useCreateCampContext } from "../CreateCampContext";
import { DatePickerInput } from "@mantine/dates";
import RecurrenceFormSection from "../../../../shared/RecurrenceFormSection";

export const CreateCampGeneralInformationForm = () => {
  const {
    campGeneralInformationForm,
    recurrencePattern,
    recurrenceDetail,
    handleAdvanceToNextFormStep,
    setRecurrenceDetail,
    setRecurrencePattern,
  } = useCreateCampContext();

  return (
    <FormWrapper
      title="General Camp Information"
      onSubmit={handleAdvanceToNextFormStep}
      cta="Continue"
      isDisabled={!campGeneralInformationForm.isValid()}
    >
      <TextInput
        label="Camp Name"
        description="Camp will be displayed to users with the following name."
        {...campGeneralInformationForm.getInputProps("campName")}
      />
      <AddressAutocomplete
        label="Camp Address"
        error={campGeneralInformationForm.getInputProps("campAddress").error}
        defaultValue={campGeneralInformationForm.values.campAddress}
        onChange={
          campGeneralInformationForm.getInputProps("campAddress").onChange
        }
      />
      <DatePickerInput
        minDate={new Date()}
        type="range"
        label="Camp Dates"
        description="Pick start and end dates of the camp."
        placeholder="Start Date - End Date"
        {...campGeneralInformationForm.getInputProps("campDates")}
      />
      {campGeneralInformationForm.values.campDates[0] != null &&
        campGeneralInformationForm.values.campDates[1] != null && (
          <RecurrenceFormSection
            startDate={campGeneralInformationForm.values.campDates[0]}
            endDate={campGeneralInformationForm.values.campDates[1]}
            recurrenceDetail={recurrenceDetail}
            recurrencePattern={recurrencePattern}
            setRecurrenceDetail={setRecurrenceDetail}
            setRecurrencePattern={setRecurrencePattern}
          />
        )}
    </FormWrapper>
  );
};
