import { TournamentFragment } from "../../../../__generated__/graphql";
import { Table, Box, Text } from "@mantine/core";
import OrganizationTableCapacityCell from "../../OrganizationTableCapacityCell";
import OrganizationTournamentsTableActionMenu from "./OrganizationTournamentsTableActionMenu";
import Link from "next/link";
import OrganizationTournamentsTableRowCell from "./OrganizationTournamentsTableRowCell";

type Props = {
  tournament: TournamentFragment;
};

const OrganizationTournamentsTableRow = ({ tournament }: Props) => {
  return (
    <Table.Tr className="cursor-pointer hover:bg-slate-50">
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Box>
          <Text size="sm" fw={500}>
            {tournament.tournamentName}
          </Text>
          <Text size="xs" c="dimmed">
            {tournament.tournamentAddress}
          </Text>
        </Box>
      </OrganizationTournamentsTableRowCell>
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Link href={`/organization/tournaments/${tournament.id}`}>
          {tournament.registrationCount != null && (
            <OrganizationTableCapacityCell
              filled={tournament.registrationCount}
              available={tournament.teamMaximum}
            />
          )}
        </Link>
      </OrganizationTournamentsTableRowCell>
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Text size="sm">{"$" + tournament.cost}</Text>
      </OrganizationTournamentsTableRowCell>
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Text size="sm">{tournament.ageGroup + "U"}</Text>
      </OrganizationTournamentsTableRowCell>
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Text size="sm">{tournament.gameMinimum + " games"}</Text>
      </OrganizationTournamentsTableRowCell>
      <OrganizationTournamentsTableRowCell tournamentId={tournament.id}>
        <Text size="sm">
          {new Date(tournament.startDate).toDateString()} -{" "}
          {new Date(tournament.endDate).toDateString()}
        </Text>
      </OrganizationTournamentsTableRowCell>
      <Table.Td>
        <OrganizationTournamentsTableActionMenu />
      </Table.Td>
    </Table.Tr>
  );
};

export default OrganizationTournamentsTableRow;
