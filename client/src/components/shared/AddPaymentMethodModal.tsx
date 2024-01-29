import { Modal, Box } from "@mantine/core";
import { PaymentAddPaymentMethodFormContainer } from "./PaymentAddPaymentMethodFormContainer";

type Props = {
  opened: boolean;
  close: () => void;
  onComplete: () => void;
};

function AddPaymentMethodModal({ opened, close, onComplete }: Props) {
  return (
    <Modal
      size="lg"
      title="Add Payment Method"
      opened={opened}
      onClose={close}
      centered
    >
      <Box px={20} pb={20} mt={5}>
        <PaymentAddPaymentMethodFormContainer
          shouldHideTitle={true}
          onComplete={onComplete}
        />
      </Box>
    </Modal>
  );
}

export default AddPaymentMethodModal;
