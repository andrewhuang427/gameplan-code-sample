import { useCreateTournamentContext } from "../CreateTournamentContext";
import { FormWrapper } from "../../../../shared/FormWrapper";
import ConfirmationScreenWrapper from "../../shared/ConfirmationScreenWrapper";
import ConfirmationScreenRowItem from "../../../../shared/ConfirmationScreenRowItem";
import Divider from "../../../../shared/Divider";
import ConfirmationScreenSectionWrapper from "../../shared/ConfirmationScreenSectionWrapper";

export const CreateTournamentReviewInformation = () => {
  const {
    tournamentDetailsForm,
    tournamentGeneralInformationForm,
    tournamentCostForm,
    handleCreateTournament,
    isTournamentCreationInProgress,
  } = useCreateTournamentContext();

  const getAgeGroupsString = () => {
    let str = "";
    for (const group of tournamentDetailsForm.values.ageGroups) {
      str += group + "U ";
    }
    return str;
  };

  return (
    <FormWrapper
      title="Review Tournament Information"
      cta="Create Tournament"
      onSubmit={handleCreateTournament}
      isLoading={isTournamentCreationInProgress}
    >
      <ConfirmationScreenWrapper>
        <ConfirmationScreenSectionWrapper title="General Tournament Information">
          <ConfirmationScreenRowItem
            label="Tournament Name"
            value={tournamentGeneralInformationForm.values.tournamentName}
          />
          <ConfirmationScreenRowItem
            label="Tournament Address"
            value={tournamentGeneralInformationForm.values.tournamentAddress}
          />
          <ConfirmationScreenRowItem
            label="Tournament Dates"
            value={`${tournamentGeneralInformationForm.values.tournamentDates[0]?.toLocaleDateString()}-${tournamentGeneralInformationForm.values.tournamentDates[1]?.toLocaleDateString()}`}
          />
        </ConfirmationScreenSectionWrapper>
        <Divider />
        <ConfirmationScreenSectionWrapper title="Tournament Details">
          <ConfirmationScreenRowItem
            label="Sport"
            value={tournamentDetailsForm.values.sport}
          />
          <ConfirmationScreenRowItem
            label="Age Group"
            value={getAgeGroupsString()}
          />
          <ConfirmationScreenRowItem
            label="Team Maximum"
            value={tournamentDetailsForm.values.teamMaximum}
          />
          <ConfirmationScreenRowItem
            label="Game Minimum"
            value={tournamentDetailsForm.values.gameMinimum}
          />
        </ConfirmationScreenSectionWrapper>
        <Divider />
        <ConfirmationScreenSectionWrapper title="Tournament Cost">
          <ConfirmationScreenRowItem
            label="Tournament Cost"
            value={tournamentCostForm.values.cost}
          />
        </ConfirmationScreenSectionWrapper>
      </ConfirmationScreenWrapper>
    </FormWrapper>
  );
};
