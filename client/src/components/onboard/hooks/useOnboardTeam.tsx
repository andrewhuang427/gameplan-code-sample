import { useOnboardTeamMutation } from "../../../__generated__/graphql";
import { useCreateTeam } from "../../../hooks/useCreateTeam";

function useOnboardTeam() {
  const { contactInformationForm, generalInformationForm } = useCreateTeam();

  const [onboardTeamMutation, { loading }] = useOnboardTeamMutation();

  const onboardTeam = async () => {
    const values = {
      ...contactInformationForm.values,
      ...generalInformationForm.values,
    };
    if (
      contactInformationForm.isValid() &&
      generalInformationForm.isValid() &&
      values.sport != null
    ) {
      const response = await onboardTeamMutation({
        variables: {
          args: {
            teamName: values.teamName,
            teamCity: values.teamCity,
            teamState: values.teamState,
            sport: values.sport,
            teamPrimaryContactEmail: values.primaryContactEmail,
            teamPrimaryContactName: values.primaryContactName,
            teamPrimaryContactPhone: values.primaryContactPhone,
            teamSecondaryContactEmail: values.secondaryContactEmail,
            teamSecondaryContactName: values.secondaryContactName,
            teamSecondaryContactPhone: values.secondaryContactPhone,
          },
        },
      });
      return response;
    }
    return null;
  };

  return {
    onboardTeam,
    loading,
    contactInformationForm,
    generalInformationForm,
  };
}

export default useOnboardTeam;
