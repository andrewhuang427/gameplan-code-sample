import { RegisterTournamentSelectTeam } from "./RegisterTournamentSelectTeam";
import { RegisterTournamentCreateTeamForm } from "./RegisterTournamentCreateTeamForm";
import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import { useTeamContext } from "../../../context/TeamContext";

export const RegisterTournamentTeamStep = () => {
  const { teams, loading } = useTeamContext();
  const { setSelectedTeamId } = useRegisterTournamentContext();

  const hasTeams = teams.length > 0;

  if (loading) {
    // todo: implement loading screen using skeleton
    return <></>;
  }

  return hasTeams ? (
    <RegisterTournamentSelectTeam
      teams={teams}
      onUpdateSelectedTeamId={setSelectedTeamId}
    />
  ) : (
    <RegisterTournamentCreateTeamForm />
  );
};
