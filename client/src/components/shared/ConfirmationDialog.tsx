import { Box, Button, Group, Modal, Stack, Text } from "@mantine/core";

type Props = {
  title: string;
  description: string;
  opened: boolean;
  close: () => void;
  onContinue: () => void;
};

function ConfirmationDialog({
  title,
  description,
  opened,
  close,
  onContinue,
}: Props) {
  return (
    <Modal
      withCloseButton={false}
      size="md"
      opened={opened}
      onClose={close}
      centered
    >
      <Box>
        <Text size="lg" fw={500}>
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Box>

      <Group justify="end" className="mt-8">
        <Button color="red" variant="light" onClick={close}>
          Cancel
        </Button>
        <Button onClick={onContinue}>Continue</Button>
      </Group>
    </Modal>
  );
}

export default ConfirmationDialog;
