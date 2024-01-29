import { Table } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  tournamentId: number;
  children: ReactNode;
};

function OrganizationTournamentsTableRowCell({
  tournamentId,
  children,
}: Props) {
  return (
    <Table.Td>
      <Link href={`/organization/tournaments/${tournamentId}`}>{children}</Link>
    </Table.Td>
  );
}

export default OrganizationTournamentsTableRowCell;
