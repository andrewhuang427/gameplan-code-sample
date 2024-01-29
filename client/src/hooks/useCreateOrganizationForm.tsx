import { SportType } from "@/__generated__/graphql";
import { UseFormReturnType, useForm } from "@mantine/form";

export type CreateOrganizationFormDataType = {
  name: string;
  sport: null | SportType;
  address: string;
};

export const defaultCreateOrganizationFormValue = {
  name: "",
  sport: null,
  address: "",
};

export type CreateOrganizationFormType = UseFormReturnType<
  CreateOrganizationFormDataType,
  (values: CreateOrganizationFormDataType) => CreateOrganizationFormDataType
>;

export const useCreateOrganizationForm = () =>
  useForm<CreateOrganizationFormDataType>({
    initialValues: defaultCreateOrganizationFormValue,
    validate: {
      name: (value) => (value === "" ? "Enter organization name." : null),
      sport: (value) => (value == null ? "Select organization sport." : null),
      address: (value) => (value === "" ? "Enter organization address." : null),
    },
  });
