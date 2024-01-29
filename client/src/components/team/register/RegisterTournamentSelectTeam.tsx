"use client";

import { TeamFragment } from "@/__generated__/graphql";
import { useEffect, useState } from "react";
import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import { FormWrapper } from "../../shared/FormWrapper";
import { RegisterTournamentSelectTeamCard } from "./RegisterTournamentSelectTeamCard";

type Props = {
  onUpdateSelectedTeamId: (teamId: number) => void;
  teams: TeamFragment[];
};

export const RegisterTournamentSelectTeam = ({
  onUpdateSelectedTeamId,
  teams,
}: Props) => {
  const { handleAdvanceToNextFormStep } = useRegisterTournamentContext();
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const selectedTeam = teams[selected];
    onUpdateSelectedTeamId(selectedTeam.id);
  }, [selected, teams]);

  return (
    <FormWrapper
      cta="Continue"
      title="Select Participating Team"
      onSubmit={() => {
        handleAdvanceToNextFormStep();
      }}
    >
      <div className="flex flex-wrap gap-4">
        {teams.map((team, index) => {
          return (
            <RegisterTournamentSelectTeamCard
              key={team.id}
              teamName={team.teamName}
              teamCity={team.teamCity}
              teamState={team.teamState}
              teamPrimaryContactEmail={team.teamPrimaryContactEmail}
              teamPrimaryContactName={team.teamPrimaryContactName}
              teamPrimaryContactPhone={team.teamPrimaryContactPhone}
              isSelected={selected === index}
              onSelect={() => {
                setSelected(index);
              }}
            />
          );
        })}
      </div>
    </FormWrapper>
  );
};
