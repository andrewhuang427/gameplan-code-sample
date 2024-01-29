"use client";

import { Text } from "@mantine/core";
import {
  DetailedPaymentIntentFragment,
  useGetPaymentIntentsQuery,
} from "../../../__generated__/graphql";
import { useTeamContext } from "../../../context/TeamContext";
import TeamPaymentsBillingHistoryTable from "./TeamPaymentsBillingHistoryTable";
import TeamPaymentsSectionWrapper from "./TeamPaymentsSectionWrapper";

function TeamPaymentsBillingHistorySection() {
  const { selectedTeam } = useTeamContext();
  const { data, loading } = useGetPaymentIntentsQuery({
    variables: { args: { teamId: selectedTeam?.id ?? -1 } },
  });

  const paymentIntents: DetailedPaymentIntentFragment[] =
    data?.getPaymentIntents ?? [];

  return (
    <TeamPaymentsSectionWrapper title="Billing History" isLoading={loading}>
      {paymentIntents.length === 0 ? (
        <Text size="sm" c="dimmed">
          No payments have been made.
        </Text>
      ) : (
        <TeamPaymentsBillingHistoryTable paymentIntents={paymentIntents} />
      )}
    </TeamPaymentsSectionWrapper>
  );
}

export default TeamPaymentsBillingHistorySection;
