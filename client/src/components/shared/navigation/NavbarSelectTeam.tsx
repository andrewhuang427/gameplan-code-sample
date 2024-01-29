import { Select } from "@mantine/core";
import { useTeamContext } from "../../../context/TeamContext";
import { IconBrandAsana } from "@tabler/icons-react";

const NavbarSelectTeam = () => {
  const { teams, selectedTeam, setSelectedTeam } = useTeamContext();

  const parsedValues = teams.map((team) => {
    return {
      value: String(team.id),
      label: team.teamName,
    };
  });

  return (
    <Select
      onChange={(value) => {
        setSelectedTeam(teams.filter((team) => team.id === Number(value))[0]);
      }}
      value={String(selectedTeam?.id)}
      data={parsedValues}
      leftSection={<IconBrandAsana />}
    />
  );
};

export default NavbarSelectTeam;
