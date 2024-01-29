import { useForm } from "@mantine/form";
import {
  TournamentFragment,
  UpdateTournamentArgs,
  useUpdateTournamentMutation,
} from "../__generated__/graphql";

export const useEditTournament = (tournament: TournamentFragment) => {
  const [update, { loading }] = useUpdateTournamentMutation();

  const form = useForm({
    initialValues: {
      id: tournament.id,
      tournamentName: tournament.tournamentName,
      tournamentAddress: tournament.tournamentAddress,
      cost: tournament.cost,
      sport: tournament.sport,
      ageGroup: tournament.ageGroup,
      teamMaximum: tournament.teamMaximum,
      gameMinimum: tournament.gameMinimum,
      tournamentDates: [
        new Date(tournament.startDate),
        new Date(tournament.endDate),
      ],
    },
    validate: {
      tournamentName: (value) =>
        value === "" ? "Enter tournament name." : null,
      tournamentAddress: (value) =>
        value === "" ? "Enter tournament address." : null,
      cost: (value) =>
        value === 0 || value == null ? "Enter tournament cost." : null,
      sport: (value) => (value == null ? "Select sport." : null),
      ageGroup: (value) =>
        value === 0 || value == null ? "Invalid age group." : null,
      teamMaximum: (value) =>
        value === 0 || value == null ? "Enter team maximum." : null,
      gameMinimum: (value) =>
        value === 0 || value == null ? "Enter game minimum." : null,
      tournamentDates: (value) =>
        value[0] == null || value[1] == null
          ? "Select tournament start and end dates."
          : null,
    },
  });

  const handleUpdate = async () => {
    const validationResponse = form.validate();
    if (validationResponse.hasErrors === false) {
      return await update({
        variables: {
          args: {
            id: tournament.id,
            tournamentName: form.values.tournamentName,
            tournamentAddress: form.values.tournamentAddress,
            cost: Number(form.values.cost),
            sport: form.values.sport,
            ageGroup: Number(form.values.ageGroup),
            teamMaximum: Number(form.values.teamMaximum),
            gameMinimum: Number(form.values.gameMinimum),
            startDate: form.values.tournamentDates[0],
            endDate: form.values.tournamentDates[1],
          },
        },
      });
    }
    return null;
  };

  return { form, loading, handleUpdate };
};
