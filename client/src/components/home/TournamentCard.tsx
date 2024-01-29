import { Badge, Box, Button, Card, Flex, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  tournamentName: string;
  tournamentAddress: string;
  cost: number;
  ageGroup: number;
  teamMaximum: number;
  gameMinimum: number;
  registrationCount: number | null | undefined;
};

export const TournamentCard = ({
  id,
  tournamentName,
  tournamentAddress,
  cost,
  ageGroup,
  teamMaximum,
  gameMinimum,
  registrationCount,
}: Props) => {
  const router = useRouter();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Box>
          <Text fw={500}>{tournamentName}</Text>
          <Text size="xs" c="dimmed">
            {tournamentAddress}
          </Text>
        </Box>
        <Flex wrap="wrap" gap={5}>
          <Badge color="orange">{`Teams Registered: ${registrationCount} / ${teamMaximum}`}</Badge>
          <Badge color="green">{`$${cost}`}</Badge>
          <Badge color="lime">{`${ageGroup}U`}</Badge>
          <Badge color="teal">{`${gameMinimum} game minimum`}</Badge>
        </Flex>
        <Box>
          <Button
            variant="light"
            mt="md"
            onClick={() => {
              router.push(`/register/${id}`);
            }}
          >
            Register
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
