"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TeamFragment, useGetTeamsQuery } from "../__generated__/graphql";
import { useAuth } from "./AuthContext";

type TeamContextType = {
  loading: boolean;
  teams: TeamFragment[];
  selectedTeam: TeamFragment | null;
  setSelectedTeam: Dispatch<SetStateAction<TeamFragment | null>>;
  refetch: () => void;
};

const defaultTeamContextValue: TeamContextType = {
  loading: false,
  teams: [],
  selectedTeam: null,
  setSelectedTeam: () => {},
  refetch: () => {},
};

export const TeamContext = createContext<TeamContextType>(
  defaultTeamContextValue
);

type TeamContextProviderProps = {
  children: ReactNode;
};

export function TeamContextProvider({ children }: TeamContextProviderProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamFragment | null>(null);
  const isInitialTeamSet = useRef(false);
  const { user } = useAuth();
  const { data, loading, refetch } = useGetTeamsQuery({
    variables: { args: { userId: user?.id ?? -1 } },
  });

  const teams = data?.getTeams;

  useEffect(() => {
    if (
      isInitialTeamSet.current === false &&
      selectedTeam == null &&
      teams != null &&
      teams.length > 0
    ) {
      setSelectedTeam(teams[0]);
      isInitialTeamSet.current = true;
    }
  }, [teams]);

  return (
    <TeamContext.Provider
      value={{
        loading,
        teams: teams ?? [],
        selectedTeam,
        setSelectedTeam,
        refetch,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export const useTeamContext = () => useContext(TeamContext);
