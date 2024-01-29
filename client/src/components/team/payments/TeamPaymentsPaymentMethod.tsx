import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import {
  PaymentMethodFragment,
  useRemovePaymentMethodMutation,
} from "../../../__generated__/graphql";
import PaymentMethodDisplay from "../../shared/PaymentMethodDisplay";
import ConfirmationDialog from "../../shared/ConfirmationDialog";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  paymentMethod: PaymentMethodFragment;
  refetchPaymentMethods: () => void;
};

function TeamPaymentsPaymentMethod({
  paymentMethod,
  refetchPaymentMethods,
}: Props) {
  const [remove, { loading }] = useRemovePaymentMethodMutation();
  const [opened, { open, close }] = useDisclosure(false);

  const handleRemovePaymentMethod = async () => {
    await remove({
      variables: {
        args: {
          paymentMethodId: paymentMethod.id,
        },
      },
    });
    refetchPaymentMethods();
  };

  return (
    <>
      <div className="flex items-center p-5 border border-neutral-200 rounded">
        <div className="grow">
          <PaymentMethodDisplay paymentMethod={paymentMethod} />
        </div>
        <ActionIcon loading={loading} c="dimmed" variant="light" onClick={open}>
          <IconTrash />
        </ActionIcon>
      </div>
      <ConfirmationDialog
        title="Remove Payment Method?"
        description="After removing a payment method, you will need to re-enter payment details the next time you register for an event."
        opened={opened}
        close={close}
        onContinue={() => {
          close();
          handleRemovePaymentMethod();
        }}
      />
    </>
  );
}

export default TeamPaymentsPaymentMethod;
