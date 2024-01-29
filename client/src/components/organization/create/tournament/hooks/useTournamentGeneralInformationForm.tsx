import { UseFormReturnType, useForm } from "@mantine/form";

export type TournamentGeneralInformationFormDataType = {
  tournamentName: string;
  tournamentAddress: string;
  tournamentDates: [Date | null, Date | null];
};

export const defaultTournamentInformationFormData: TournamentGeneralInformationFormDataType =
  {
    tournamentName: "",
    tournamentAddress: "",
    tournamentDates: [null, null],
  };

export type TournamentGeneralInformationFormType = UseFormReturnType<
  TournamentGeneralInformationFormDataType,
  (
    values: TournamentGeneralInformationFormDataType
  ) => TournamentGeneralInformationFormDataType
>;

export const useTournamentGeneralInformationForm =
  (): TournamentGeneralInformationFormType => {
    const teamInformationForm =
      useForm<TournamentGeneralInformationFormDataType>({
        initialValues: defaultTournamentInformationFormData,
        validate: {
          tournamentName: (value) =>
            value === "" ? "Enter tournament name." : null,
          tournamentAddress: (value) =>
            value === "" ? "Enter tournament address." : null,
          tournamentDates: (value) =>
            value[0] == null || value[1] == null
              ? "Select tournament start and end dates."
              : null,
        },
      });

    return teamInformationForm;
  };
