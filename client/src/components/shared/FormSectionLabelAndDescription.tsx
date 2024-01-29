import { Box, Text } from "@mantine/core";

type Props = {
  label?: string;
  description?: string;
};

function FormSectionLabelAndDescription({ label, description }: Props) {
  const hasLabelOrDescription = label != null || description != null;

  if (!hasLabelOrDescription) {
    return null;
  }

  return (
    <Box>
      {label != null && (
        <Text size="sm" fw={500}>
          Select Days
        </Text>
      )}
      {description != null && (
        <Text size="xs" c="dimmed">
          Select the reoccurring days which the event will occur on.
        </Text>
      )}
    </Box>
  );
}

export default FormSectionLabelAndDescription;
