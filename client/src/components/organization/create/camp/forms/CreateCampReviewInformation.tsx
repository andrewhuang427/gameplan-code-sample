import ConfirmationScreenWrapper from "../../shared/ConfirmationScreenWrapper";
import { FormWrapper } from "../../../../shared/FormWrapper";
import ConfirmationScreenSectionWrapper from "../../shared/ConfirmationScreenSectionWrapper";
import ConfirmationScreenRowItem from "../../../../shared/ConfirmationScreenRowItem";
import { useCreateCampContext } from "../CreateCampContext";
import Divider from "../../../../shared/Divider";

function CreateCampReviewInformation() {
  const {
    campGeneralInformationForm,
    campDetailsForm,
    campCostForm,
    handleCreateCamp,
    isCampCreationInProgress,
  } = useCreateCampContext();

  const {
    values: { campAddress, campName, campDates },
  } = campGeneralInformationForm;
  const {
    values: { ageGroup, playerMaximum, sport },
  } = campDetailsForm;
  const {
    values: { cost },
  } = campCostForm;

  return (
    <FormWrapper
      title="Review Camp Information"
      cta="Create Camp"
      onSubmit={handleCreateCamp}
      isLoading={isCampCreationInProgress}
    >
      <ConfirmationScreenWrapper>
        <ConfirmationScreenSectionWrapper title="General Camp Information">
          <ConfirmationScreenRowItem label="Camp Name" value={campName} />
          <ConfirmationScreenRowItem label="Camp Address" value={campAddress} />
          <ConfirmationScreenRowItem
            label="Camp Dates"
            value={`${campDates[0]?.toLocaleDateString()}-${campDates[1]?.toLocaleDateString()}`}
          />
        </ConfirmationScreenSectionWrapper>
        <Divider />
        <ConfirmationScreenSectionWrapper title="Camp Details">
          <ConfirmationScreenRowItem label="Sport" value={sport} />
          <ConfirmationScreenRowItem label="Age Group" value={ageGroup + "U"} />
          <ConfirmationScreenRowItem
            label="Player Maximum"
            value={playerMaximum}
          />
        </ConfirmationScreenSectionWrapper>
        <Divider />
        <ConfirmationScreenSectionWrapper title="Camp Cost">
          <ConfirmationScreenRowItem label="Camp Cost" value={cost} />
        </ConfirmationScreenSectionWrapper>
      </ConfirmationScreenWrapper>
    </FormWrapper>
  );
}

export default CreateCampReviewInformation;
