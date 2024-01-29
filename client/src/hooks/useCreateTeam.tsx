"use client";

import { useCreateTeamMutation } from "@/__generated__/graphql";
import { useCreateTeamGeneralInformationForm } from "./useCreateTeamGeneralInformationForm";
import { useCreateTeamContactInformationForm } from "./useCreateTeamContactInformationForm";

export const useCreateTeam = () => {
  const generalInformationForm = useCreateTeamGeneralInformationForm();
  const contactInformationForm = useCreateTeamContactInformationForm();

  const [createTeamMutation, { loading }] = useCreateTeamMutation();

  const createTeam = async () => {
    const values = {
      ...generalInformationForm.values,
      ...contactInformationForm.values,
    };

    if (
      generalInformationForm.isValid() &&
      contactInformationForm.isValid() &&
      values.sport != null
    ) {
      const response = await createTeamMutation({
        variables: {
          args: {
            teamName: values.teamName,
            teamCity: values.teamCity,
            teamState: values.teamState,
            sport: values.sport,
            teamPrimaryContactEmail: values.primaryContactEmail,
            teamPrimaryContactPhone: values.primaryContactPhone,
            teamPrimaryContactName: values.primaryContactName,
          },
        },
      });
      return response;
    }
    return null;
  };

  return {
    generalInformationForm,
    contactInformationForm,
    createTeam,
    loading,
  };
};
