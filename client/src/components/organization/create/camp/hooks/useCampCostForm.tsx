import { UseFormReturnType, useForm } from "@mantine/form";

export type CampCostFormDataType = {
  cost: number | null;
};

export const defaultCampCostFormData: CampCostFormDataType = {
  cost: null,
};

export type CampCostFormType = UseFormReturnType<
  CampCostFormDataType,
  (values: CampCostFormDataType) => CampCostFormDataType
>;

export function useCampCostForm(): CampCostFormType {
  const costForm = useForm<CampCostFormDataType>({
    initialValues: defaultCampCostFormData,
    validate: {
      cost: (value) =>
        value === 0 || value == null ? "Enter camp cost." : null,
    },
  });
  return costForm;
}
