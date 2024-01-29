import { Stack, Box, Flex, Badge, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { TournamentRegistrationFragment } from "../../../__generated__/graphql";

type Props = {
  registration: TournamentRegistrationFragment;
};

function TeamTimelineTournamentCard({ registration }: Props) {
  return (
    <div className="mt-3 border border-neutral-200 bg-white rounded p-5">
      <Stack gap={20}>
        <Box>
          <Text fw={500}>{registration.tournament?.tournamentName}</Text>
          <Flex mt={2} gap={4} align="center">
            <IconMapPin
              size={20}
              stroke={1.25}
              color="var(--mantine-color-dimmed)"
            />
            <Text size="xs" c="dimmed">
              {registration.tournament?.tournamentAddress}
            </Text>
          </Flex>
        </Box>
        <Flex gap={5}>
          <Badge variant="light">{registration.tournament?.sport}</Badge>
          <Badge variant="light">
            {registration.tournament?.ageGroup + "U"}
          </Badge>
        </Flex>
      </Stack>
    </div>
  );
}

export default TeamTimelineTournamentCard;
