"use client";

import { Navbar } from "@/components/shared/navigation/Navbar";
import { RegisterTournamentFormContainer } from "../../../../components/team/register/RegisterTournamentFormContainer";
import ProtectedRegistrationRoute from "../../../../guards/ProtectedRegistrationRoute";

export default function Register({ params }: { params: { id: string } }) {
  return (
    <ProtectedRegistrationRoute tournamentId={Number(params.id)}>
      <main className="flex flex-col w-full h-full">
        <Navbar includeBorderBottom={true} shouldHideTeamSelect={true} />
        <RegisterTournamentFormContainer />
      </main>
    </ProtectedRegistrationRoute>
  );
}
