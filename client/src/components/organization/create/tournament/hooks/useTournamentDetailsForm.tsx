import { SportType } from "@/__generated__/graphql";
import { UseFormReturnType, useForm } from "@mantine/form";

export type TournamentDetailsFormDataType = {
  ageGroups: string[];
  sport: SportType;
  teamMaximum: null | number;
  gameMinimum: null | number;
};

export const defaultTournamentDetailsFormData: TournamentDetailsFormDataType = {
  ageGroups: [],
  sport: SportType.Baseball,
  teamMaximum: null,
  gameMinimum: null,
};

export type TournamentDetailsFormType = UseFormReturnType<
  TournamentDetailsFormDataType,
  (values: TournamentDetailsFormDataType) => TournamentDetailsFormDataType
>;

export const useTournamentDetailsForm = (): TournamentDetailsFormType => {
  const teamDetailsForm = useForm<TournamentDetailsFormDataType>({
    initialValues: defaultTournamentDetailsFormData,
    validate: {
      ageGroups: (value) => (value.length === 0 ? "Select age groups." : null),
      teamMaximum: (value) =>
        value === 0 || value == null ? "Enter team maximum." : null,
      gameMinimum: (value) =>
        value === 0 || value == null ? "Enter game minimum." : null,
    },
  });

  return teamDetailsForm;
};
