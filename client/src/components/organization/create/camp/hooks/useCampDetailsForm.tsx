import { SportType } from "@/__generated__/graphql";
import { UseFormReturnType, useForm } from "@mantine/form";

export type CampDetailsFormDataType = {
  ageGroup: string;
  sport: SportType;
  playerMaximum: null | number;
};

export const defaultCampDetailsFormData: CampDetailsFormDataType = {
  ageGroup: "",
  sport: SportType.Baseball,
  playerMaximum: null,
};

export type CampDetailsFormType = UseFormReturnType<
  CampDetailsFormDataType,
  (values: CampDetailsFormDataType) => CampDetailsFormDataType
>;

export const useCampDetailsForm = (): CampDetailsFormType => {
  const campDetailsForm = useForm<CampDetailsFormDataType>({
    initialValues: defaultCampDetailsFormData,
    validate: {
      ageGroup: (value) => (value === "" ? "Enter age group." : null),
      playerMaximum: (value) =>
        value === 0 || value == null ? "Enter player maximum." : null,
    },
  });

  return campDetailsForm;
};
