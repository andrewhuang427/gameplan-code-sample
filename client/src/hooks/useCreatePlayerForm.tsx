import { UseFormReturnType, useForm } from "@mantine/form";

export type CreatePlayerFormDataType = {
  firstName: string;
  lastName: string;
  ageGroup: number | null;
  primaryContactEmail: string;
  primaryContactPhone: string;
};

export const defaultCreatePlayerFormValue: CreatePlayerFormDataType = {
  firstName: "",
  lastName: "",
  ageGroup: null,
  primaryContactEmail: "",
  primaryContactPhone: "",
};

export type CreatePlayerFormType = UseFormReturnType<
  CreatePlayerFormDataType,
  (values: CreatePlayerFormDataType) => CreatePlayerFormDataType
>;

function useCreatePlayerForm() {
  return useForm<CreatePlayerFormDataType>({
    initialValues: defaultCreatePlayerFormValue,
    validate: {
      firstName: (value) => (value === "" ? "Enter first name." : null),
      lastName: (value) => (value === "" ? "Enter last name." : null),
      ageGroup: (value) => (value == null ? "Enter age group." : null),
      primaryContactEmail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid primary contact email",
      primaryContactPhone: (value) =>
        value === "" ? "Enter primary contact phone number." : null,
    },
  });
}

export default useCreatePlayerForm;
