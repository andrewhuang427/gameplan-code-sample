import { useState } from "react";
import OrganizationDashboardSectionWrapper from "../../OrganizationDashboardSectionWrapper";
import { SegmentedControl, Center, Text, Table } from "@mantine/core";
import { IconRotateClockwise2, IconArrowBack } from "@tabler/icons-react";
import { useOrganizationContext } from "../../../../context/OrganizationContext";
import { useGetOrganizationCampsQuery } from "../../../../__generated__/graphql";
import TableLoadingState from "../../../shared/TableLoadingState";
import OrganizationCampsTableRow from "./OrganizationCampsTableRow";
import { getRenderedCamps } from "../../../../utils/OrganizationCampUtils";

function OrganizationCampsTable() {
  const [selectedFilter, setSelectedFilter] = useState("upcoming");
  const { organization } = useOrganizationContext();
  const { data, loading } = useGetOrganizationCampsQuery({
    variables: {
      args: {
        organizationId: organization?.id ?? -1,
      },
    },
  });

  const sortedCamps = getRenderedCamps(
    data?.getOrganizationCamps ?? [],
    selectedFilter === "upcoming"
  );

  const component = loading ? (
    <TableLoadingState label="Loading Camps" />
  ) : (
    <Table verticalSpacing="md" stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr fz="xs">
          <Table.Th>Camp Name</Table.Th>
          <Table.Th>Registrations</Table.Th>
          <Table.Th>Cost</Table.Th>
          <Table.Th>Age Group</Table.Th>
          <Table.Th>Max Registrants</Table.Th>
          <Table.Th>Dates</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sortedCamps.map((camp) => {
          return <OrganizationCampsTableRow key={camp.id} camp={camp} />;
        })}
      </Table.Tbody>
    </Table>
  );

  return (
    <OrganizationDashboardSectionWrapper
      title={selectedFilter === "upcoming" ? "Upcoming Camps" : "Past Camps"}
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

export default OrganizationCampsTable;
