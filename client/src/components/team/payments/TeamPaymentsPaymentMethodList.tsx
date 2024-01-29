import { Button, Stack, Text } from "@mantine/core";
import { useGetPaymentMethodsQuery } from "../../../__generated__/graphql";
import { IconPlus } from "@tabler/icons-react";
import AddPaymentMethodModal from "../../shared/AddPaymentMethodModal";
import { useDisclosure } from "@mantine/hooks";
import TeamPaymentsPaymentMethod from "./TeamPaymentsPaymentMethod";

type Props = {
  resetSetupIntent: () => void;
};

function TeamPaymentsPaymentMethodList({ resetSetupIntent }: Props) {
  const { data, refetch } = useGetPaymentMethodsQuery();
  const [opened, { open, close }] = useDisclosure(false);

  const paymentMethods = data?.getPaymentMethods ?? [];

  return (
    <>
      {paymentMethods.length === 0 ? (
        <Text size="sm" c="dimmed">
          No payments methods have been added.
        </Text>
      ) : (
        <Stack gap="xs">
          {paymentMethods.map((paymentMethod) => {
            return (
              <TeamPaymentsPaymentMethod
                key={paymentMethod.id}
                paymentMethod={paymentMethod}
                refetchPaymentMethods={refetch}
              />
            );
          })}
        </Stack>
      )}

      <Button
        className="mt-5"
        fullWidth
        onClick={open}
        variant="light"
        leftSection={<IconPlus />}
      >
        Add Payment Method
      </Button>
      <Text className="mt-5" size="xs" c="dimmed">
        All payments methods are stored securely with Stripe.
      </Text>
      <AddPaymentMethodModal
        opened={opened}
        close={close}
        onComplete={() => {
          resetSetupIntent();
          refetch();
          close();
        }}
      />
    </>
  );
}

export default TeamPaymentsPaymentMethodList;
