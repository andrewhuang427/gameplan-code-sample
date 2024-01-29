import { UseFormReturnType, useForm } from "@mantine/form";

export type TournamentCostFormDataType = {
  cost: number | null;
};

export const defaultTournamentCostFormData: TournamentCostFormDataType = {
  cost: null,
};

export type TournamentCostFormType = UseFormReturnType<
  TournamentCostFormDataType,
  (values: TournamentCostFormDataType) => TournamentCostFormDataType
>;

export const useTournamentCostForm = (): TournamentCostFormType => {
  const costForm = useForm<TournamentCostFormDataType>({
    initialValues: defaultTournamentCostFormData,
    validate: {
      cost: (value) =>
        value === 0 || value == null ? "Enter tournament cost." : null,
    },
  });

  return costForm;
};
