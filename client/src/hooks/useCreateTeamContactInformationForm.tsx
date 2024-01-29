import { UseFormReturnType, useForm } from "@mantine/form";

export type TeamContactInformationFormDataType = {
  primaryContactName: string;
  primaryContactEmail: string;
  primaryContactPhone: string;
  secondaryContactName: string;
  secondaryContactEmail: string;
  secondaryContactPhone: string;
};

export const defaultTeamContactInformationForm: TeamContactInformationFormDataType =
  {
    primaryContactEmail: "",
    primaryContactName: "",
    primaryContactPhone: "",
    secondaryContactEmail: "",
    secondaryContactName: "",
    secondaryContactPhone: "",
  };

export type TeamContactInformationFormType = UseFormReturnType<
  TeamContactInformationFormDataType,
  (
    values: TeamContactInformationFormDataType
  ) => TeamContactInformationFormDataType
>;

export const useCreateTeamContactInformationForm = () =>
  useForm<TeamContactInformationFormDataType>({
    initialValues: defaultTeamContactInformationForm,
    validate: {
      primaryContactEmail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid primary contact email",
      primaryContactPhone: (value) =>
        value === "" ? "Enter primary contact phone number." : null,
      primaryContactName: (value) =>
        value === "" ? "Enter primary contact name." : null,
      secondaryContactEmail: (value) =>
        /^\S+@\S+$/.test(value) || value === ""
          ? null
          : "Invalid secondary contact email",
    },
  });
