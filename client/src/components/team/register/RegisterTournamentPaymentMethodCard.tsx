import { ActionIcon, Flex } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import {
  PaymentMethodFragment,
  useRemovePaymentMethodMutation,
} from "../../../__generated__/graphql";
import { SelectableContainerWrapper } from "../../shared/SelectableContainerWrapper";
import PaymentMethodDisplay from "../../shared/PaymentMethodDisplay";
import { useDisclosure } from "@mantine/hooks";
import ConfirmationDialog from "../../shared/ConfirmationDialog";

type Props = {
  paymentMethod: PaymentMethodFragment;
  isSelected: boolean;
  refetchPaymentMethods: () => void;
  onSelect: () => void;
};

function RegisterTournamentPaymentMethodCard({
  paymentMethod,
  isSelected,
  refetchPaymentMethods,
  onSelect,
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
      <SelectableContainerWrapper
        isDisplayedInFlexBox={false}
        isSelected={isSelected}
        onClick={onSelect}
      >
        <Flex align="center" gap={10}>
          <div className="grow">
            <PaymentMethodDisplay paymentMethod={paymentMethod} />
          </div>
          <ActionIcon
            loading={loading}
            c="dimmed"
            variant="light"
            onClick={open}
          >
            <IconTrash />
          </ActionIcon>
        </Flex>
      </SelectableContainerWrapper>
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

export default RegisterTournamentPaymentMethodCard;
