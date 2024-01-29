"use client";

import { Badge, Box, Stack, Text } from "@mantine/core";
import { useGetConnectedAccountQuery } from "../../../__generated__/graphql";
import { useOrganizationContext } from "../../../context/OrganizationContext";
import OrganizationStripeOnboardingTrigger from "./OrganizationStripeOnboardingTrigger";
import OrganizationAccountSectionRow from "./OrganizationAccountSectionRow";
import OrganizationDashboardSectionWrapper from "../OrganizationDashboardSectionWrapper";

export default function OrganizationStripeAccountSection() {
  const { organization } = useOrganizationContext();
  const { data, loading } = useGetConnectedAccountQuery({
    variables: {
      args: {
        id: organization?.id ?? -1,
      },
    },
  });

  const connectedAccount = data?.getConnectedAccount;

  const connectedAccountStatus =
    connectedAccount == null || !connectedAccount.isEnabled ? (
      <Badge variant="light" color="red">
        Onboarding Incomplete
      </Badge>
    ) : (
      <Badge variant="light" color="green">
        Onboarding Complete
      </Badge>
    );

  return (
    <OrganizationDashboardSectionWrapper
      title="Stripe Account Details"
      rightTitle={connectedAccountStatus}
      isLoading={loading}
    >
      <div className="mt-3">
        {connectedAccount == null || !connectedAccount.isEnabled ? (
          <Stack>
            <Text c="dimmed" size="xs">
              To link your Organization to Stripe, click the link below.
            </Text>
            <Box>
              <OrganizationStripeOnboardingTrigger />
            </Box>
          </Stack>
        ) : (
          <div className="max-w-md">
            <Stack gap={5}>
              <OrganizationAccountSectionRow
                label={"Connected account ID"}
                value={connectedAccount.id}
              />
              <OrganizationAccountSectionRow
                label={"Payments enabled"}
                value={String(connectedAccount.isEnabled)}
              />
            </Stack>
          </div>
        )}
      </div>
    </OrganizationDashboardSectionWrapper>
  );
}
