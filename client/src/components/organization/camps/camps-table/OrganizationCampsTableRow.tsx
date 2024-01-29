import React from "react";
import { CampFragment } from "../../../../__generated__/graphql";
import { Box, Table, Text } from "@mantine/core";
import OrganizationCampsTableRowCell from "./OrganizationCampsTableRowCell";
import OrganizationCampsTableActionMenu from "./OrganizationCampsTableActionMenu";
import OrganizationTableCapacityCell from "../../OrganizationTableCapacityCell";

type Props = {
  camp: CampFragment;
};

function OrganizationCampsTableRow({ camp }: Props) {
  return (
    <Table.Tr className="cursor-pointer hover:bg-slate-50">
      <OrganizationCampsTableRowCell campId={camp.id}>
        <Box>
          <Text size="sm" fw={500}>
            {camp.campName}
          </Text>
          <Text size="xs" c="dimmed">
            {camp.campAddress}
          </Text>
        </Box>
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <OrganizationTableCapacityCell
          filled={camp.registrationCount ?? 0}
          available={camp.playerMaximum}
        />
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <Text size="sm">{"$" + camp.cost}</Text>
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <Text size="sm">{camp.ageGroup + "U"}</Text>
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <Text size="sm">{camp.playerMaximum}</Text>
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <Text size="sm">
          {new Date(camp.startDate).toDateString()} -{" "}
          {new Date(camp.endDate).toDateString()}
        </Text>
      </OrganizationCampsTableRowCell>
      <OrganizationCampsTableRowCell campId={camp.id}>
        <OrganizationCampsTableActionMenu />
      </OrganizationCampsTableRowCell>
    </Table.Tr>
  );
}

export default OrganizationCampsTableRow;
