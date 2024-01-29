import { Table } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  campId: number;
  children: ReactNode;
};

function OrganizationCampsTableRowCell({ campId, children }: Props) {
  return (
    <Table.Td>
      <Link href={`/organization/camps/${campId}`}>{children}</Link>
    </Table.Td>
  );
}

export default OrganizationCampsTableRowCell;
