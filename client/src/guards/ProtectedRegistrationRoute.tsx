import { ReactNode, useEffect } from "react";
import { UserType, useGetTournamentQuery } from "../__generated__/graphql";
import { LoadingScreen } from "../components/shared/LoadingScreen";
import { RegisterTournamentContextProvider } from "../components/team/register/RegisterTournamentContext";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  tournamentId: number;
};

function ProtectedRegistrationRoute({ children, tournamentId }: Props) {
  const { isLoggedIn, isLoggingIn, user } = useAuth();
  const { data, loading: isTournamentQueryLoading } = useGetTournamentQuery({
    variables: {
      args: {
        id: tournamentId,
      },
    },
  });
  const router = useRouter();
  const tournament = data?.getTournament;
  const isOrganizationUser =
    user != null && user.type === UserType.Organization;

  useEffect(() => {
    if (!isLoggingIn && !isLoggedIn) {
      router.push(`/login?returnTo=/register/${tournamentId}`);
    } else if (isOrganizationUser) {
      router.push("/organization");
    }
  }, [isLoggedIn, isLoggingIn]);

  if (
    !isLoggedIn ||
    isLoggingIn ||
    isTournamentQueryLoading ||
    tournament == null
  ) {
    return <LoadingScreen />;
  }

  return (
    <RegisterTournamentContextProvider tournament={tournament}>
      {children}
    </RegisterTournamentContextProvider>
  );
}

export default ProtectedRegistrationRoute;
