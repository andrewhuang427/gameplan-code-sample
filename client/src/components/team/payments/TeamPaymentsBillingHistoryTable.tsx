import { Button, Table } from "@mantine/core";
import { DetailedPaymentIntentFragment } from "../../../__generated__/graphql";
import PaymentMethodDisplay from "../../shared/PaymentMethodDisplay";
import Link from "next/link";

type Props = {
  paymentIntents: DetailedPaymentIntentFragment[];
};

function TeamPaymentsBillingHistoryTable({ paymentIntents }: Props) {
  const rows = paymentIntents.map((paymentIntents) => (
    <Table.Tr key={paymentIntents.paymentIntentId}>
      <Table.Td>{paymentIntents.eventName}</Table.Td>
      <Table.Td>
        ${((paymentIntents.charge?.amount ?? 0) / 100).toFixed(2)}
      </Table.Td>
      <Table.Td>
        {paymentIntents.paymentMethod != null && (
          <PaymentMethodDisplay
            paymentMethod={paymentIntents.paymentMethod}
            shouldShowExpiry={false}
          />
        )}
      </Table.Td>

      <Table.Td>
        <Link target="_blank" href={paymentIntents.charge?.receiptUrl ?? ""}>
          <Button variant="light" size="xs">
            Receipt
          </Button>
        </Link>{" "}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table verticalSpacing="md">
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default TeamPaymentsBillingHistoryTable;
