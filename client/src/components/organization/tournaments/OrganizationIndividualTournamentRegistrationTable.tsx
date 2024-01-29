import {
  ActionIcon,
  Box,
  Center,
  CopyButton,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { TournamentRegistrationFragment } from "../../../__generated__/graphql";
import OrganizationDashboardSectionWrapper from "../OrganizationDashboardSectionWrapper";
import { IconMail } from "@tabler/icons-react";

type Props = {
  registrations: TournamentRegistrationFragment[];
  isLoading: boolean;
};

function OrganizationIndividualTournamentRegistrationTable({
  registrations,
  isLoading,
}: Props) {
  const rows = registrations.map((r) => {
    const team = r.team;
    const creationDate = new Date(r.createdAt);

    return (
      <Table.Tr key={r.id}>
        <Table.Td>{r.id}</Table.Td>
        <Table.Td>
          <Box>
            <Text size="sm" fw={500}>
              {team?.teamName}
            </Text>
            <Text
              size="sm"
              c="dimmed"
            >{`${team?.teamCity}, ${team?.teamState}`}</Text>
          </Box>
        </Table.Td>
        <Table.Td>
          <Stack>
            <Box>
              <Text size="sm" fw={500}>
                {team?.teamPrimaryContactName}
              </Text>
              <Text size="sm" c="dimmed">
                {team?.teamPrimaryContactEmail}
              </Text>
              <Text size="sm" c="dimmed">
                {team?.teamPrimaryContactPhone}
              </Text>
            </Box>
          </Stack>
        </Table.Td>
        <Table.Td>
          <Box>
            <Text fw={500} size="sm">
              {creationDate.toDateString()}
            </Text>
            <Text size="sm" c="dimmed">
              {creationDate.toLocaleTimeString()}
            </Text>
          </Box>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <OrganizationDashboardSectionWrapper
      title="Registrations"
      isLoading={isLoading}
    >
      {registrations.length === 0 ? (
        <Center className="my-10">
          <Text size="sm" c="dimmed">
            Currently no teams are registered
          </Text>
        </Center>
      ) : (
        <Table verticalSpacing="sm">
          <Table.Thead fz="xs">
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Team</Table.Th>
              <Table.Th>Primary Contact</Table.Th>
              <Table.Th>Registration Date - Time</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      )}
    </OrganizationDashboardSectionWrapper>
  );
}

export default OrganizationIndividualTournamentRegistrationTable;
