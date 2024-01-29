"use client";

import {
  Center,
  Flex,
  Loader,
  SegmentedControl,
  Table,
  Text,
} from "@mantine/core";
import { useGetOrganizationTournamentsQuery } from "../../../../__generated__/graphql";
import { useOrganizationContext } from "../../../../context/OrganizationContext";
import OrganizationTournamentsTableRow from "./OrganizationTournamentsTableRow";
import OrganizationDashboardSectionWrapper from "../../OrganizationDashboardSectionWrapper";
import { IconRotateClockwise2, IconArrowBack } from "@tabler/icons-react";
import { useState } from "react";
import { getRenderedTournaments } from "../../../../utils/OrganizationTournamentUtils";
import TableLoadingState from "../../../shared/TableLoadingState";

export default function OrganizationTournamentsTable() {
  const [selectedFilter, setSelectedFilter] = useState("upcoming");
  const { organization } = useOrganizationContext();
  const { data, loading } = useGetOrganizationTournamentsQuery({
    variables: { args: { organizationId: organization?.id ?? -1 } },
  });

  const sortedTournaments = getRenderedTournaments(
    data?.getOrganizationTournaments ?? [],
    selectedFilter === "upcoming"
  );

  const component = loading ? (
    <TableLoadingState label="Loading Tournaments" />
  ) : (
    <Table verticalSpacing="md" stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr fz="xs">
          <Table.Th>Tournament Name</Table.Th>
          <Table.Th>Registrations</Table.Th>
          <Table.Th>Cost</Table.Th>
          <Table.Th>Age Group</Table.Th>
          <Table.Th>Game Minimum</Table.Th>
          <Table.Th>Dates</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sortedTournaments.map((tournament) => {
          return (
            <OrganizationTournamentsTableRow
              key={tournament.id}
              tournament={tournament}
            />
          );
        })}
      </Table.Tbody>
    </Table>
  );

  return (
    <OrganizationDashboardSectionWrapper
      title={
        selectedFilter === "upcoming"
          ? "Upcoming Tournaments"
          : "Past Tournaments"
      }
      rightSection={
        <SegmentedControl
          value={selectedFilter}
          onChange={setSelectedFilter}
          data={[
            {
              value: "upcoming",
              label: (
                <Center>
                  <IconRotateClockwise2 size={20} />
                  <Text ml={5} size="sm" fw={500}>
                    Upcoming
                  </Text>
                </Center>
              ),
            },
            {
              value: "past",
              label: (
                <Center>
                  <IconArrowBack size={20} />
                  <Text ml={5} size="sm" fw={500}>
                    Past
                  </Text>
                </Center>
              ),
            },
          ]}
        />
      }
    >
      {component}
    </OrganizationDashboardSectionWrapper>
  );
}
