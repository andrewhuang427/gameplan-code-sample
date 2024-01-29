import { SportType } from "@/__generated__/graphql";
import { UseFormReturnType, useForm } from "@mantine/form";

export type TeamGeneralInformationFormDataType = {
  teamName: string;
  teamCity: string;
  teamState: string;
  sport: null | SportType;
};

export const defaultTeamGeneralInformationForm: TeamGeneralInformationFormDataType =
  {
    teamName: "",
    teamCity: "",
    teamState: "",
    sport: null,
  };

export type TeamGeneralInformationFormType = UseFormReturnType<
  TeamGeneralInformationFormDataType,
  (
    values: TeamGeneralInformationFormDataType
  ) => TeamGeneralInformationFormDataType
>;

export const useCreateTeamGeneralInformationForm = () =>
  useForm<TeamGeneralInformationFormDataType>({
    initialValues: defaultTeamGeneralInformationForm,
    validate: {
      teamName: (value) => (value === "" ? "Enter team name." : null),
      teamCity: (value) => (value === "" ? "Enter team city." : null),
      teamState: (value) => (value === "" ? "Enter team state." : null),
      sport: (value) => (value == null ? "Select Sport." : null),
    },
  });
