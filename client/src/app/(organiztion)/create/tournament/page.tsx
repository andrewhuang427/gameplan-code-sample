import { Navbar } from "@/components/shared/navigation/Navbar";
import { CreateTournamentFormContainer } from "@/components/organization/create/tournament/CreateTournamentFormContainer";
import { CreateTournamentContextProvider } from "../../../../components/organization/create/tournament/CreateTournamentContext";

export default function CreateTournament() {
  return (
    <CreateTournamentContextProvider>
      <Navbar includeBorderBottom />
      <CreateTournamentFormContainer />
    </CreateTournamentContextProvider>
  );
}
