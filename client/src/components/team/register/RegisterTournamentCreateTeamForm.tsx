import { useTeamContext } from "../../../context/TeamContext";
import { FormWrapper } from "../../shared/FormWrapper";
import { CreateTeamForm } from "../create-team/CreateTeamForm";

export const RegisterTournamentCreateTeamForm = () => {
  const { refetch: refetchTeams } = useTeamContext();

  return (
    <FormWrapper cta="Continue" title="General Team Information">
      <CreateTeamForm
        onComplete={() => {
          refetchTeams();
        }}
      />
    </FormWrapper>
  );
};
