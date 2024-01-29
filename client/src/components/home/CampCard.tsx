import { Card, Stack, Box, Flex, Badge, Button, Text } from "@mantine/core";
import { CampFragment } from "../../__generated__/graphql";

type Props = {
  camp: CampFragment;
};

function CampCard({ camp }: Props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Box>
          <Text fw={500}>{camp.campName}</Text>
          <Text size="xs" c="dimmed">
            {camp.campAddress}
          </Text>
        </Box>
        <Flex wrap="wrap" gap={5}>
          <Badge color="orange">{`Athletes Registered: ${
            camp.registrationCount ?? 0
          } / ${camp.playerMaximum}`}</Badge>
          <Badge color="green">{`$${camp.cost}`}</Badge>
          <Badge color="lime">{`${camp.ageGroup}U`}</Badge>
          <Badge color="teal">{`${camp.playerMaximum} spots`}</Badge>
        </Flex>
        <Box>
          <Button variant="light" mt="md" onClick={() => {}}>
            Register
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}

export default CampCard;
