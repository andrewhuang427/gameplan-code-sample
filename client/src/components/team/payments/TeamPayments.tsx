"use client";

import { Grid, Stack, Title } from "@mantine/core";
import TeamPaymentsPaymentMethodsSection from "./TeamPaymentsPaymentMethodsSection";
import TeamPaymentsBillingHistorySection from "./TeamPaymentsBillingHistorySection";

function TeamPayments() {
  return (
    <div className="my-10 mx-auto max-w-7xl">
      <Stack>
        <Title fw={400}>Payments</Title>
        <Grid>
          <Grid.Col span={7}>
            <TeamPaymentsBillingHistorySection />
          </Grid.Col>
          <Grid.Col span={5}>
            <TeamPaymentsPaymentMethodsSection />
          </Grid.Col>
        </Grid>
      </Stack>
    </div>
  );
}

export default TeamPayments;
