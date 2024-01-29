import { Badge, Box, HoverCard, Progress, Stack, Text } from "@mantine/core";
import Divider from "../shared/Divider";

type Props = {
  filled: number;
  available: number;
};

function OrganizationTableCapacityCell({ filled, available }: Props) {
  const capacity = filled / available;

  const getColor = () => {
    if (capacity < 0.5) {
      return "red";
    } else if (capacity < 0.75) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <HoverCard withArrow>
      <HoverCard.Target>
        <Progress color={getColor()} value={capacity * 100} />
      </HoverCard.Target>
      <HoverCard.Dropdown maw={200}>
        <Stack gap="sm">
          <Text size="xs" c="dimmed" fw={500}>
            Your tournament is at {(capacity * 100).toFixed(0)}% capacity
          </Text>
          <Divider />
          <Badge size="xs" variant="light" color="green">
            +75% capacity
          </Badge>
          <Badge size="xs" variant="light" color="yellow">
            +50% capacity
          </Badge>
          <Badge size="xs" variant="light" color="red">
            -50% capacity
          </Badge>
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default OrganizationTableCapacityCell;
