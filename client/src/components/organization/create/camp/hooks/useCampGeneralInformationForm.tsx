import { UseFormReturnType, useForm } from "@mantine/form";

export type CampGeneralInformationFormDataType = {
  campName: string;
  campAddress: string;
  campDates: [Date | null, Date | null];
};

export const defaultCampInformationFormData: CampGeneralInformationFormDataType =
  {
    campName: "",
    campAddress: "",
    campDates: [null, null],
  };

export type CampGeneralInformationFormType = UseFormReturnType<
  CampGeneralInformationFormDataType,
  (
    values: CampGeneralInformationFormDataType
  ) => CampGeneralInformationFormDataType
>;

export const useCampGeneralInformationForm =
  (): CampGeneralInformationFormType => {
    const teamInformationForm = useForm<CampGeneralInformationFormDataType>({
      initialValues: defaultCampInformationFormData,
      validate: {
        campName: (value) => (value === "" ? "Enter camp name." : null),
        campAddress: (value) => (value === "" ? "Enter camp address." : null),
        campDates: (value) =>
          value[0] == null || value[1] == null
            ? "Select tournament start and end dates."
            : null,
      },
    });

    return teamInformationForm;
  };
