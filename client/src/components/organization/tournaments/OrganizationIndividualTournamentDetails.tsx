import { ActionIcon, Box, Flex, Stack, Text } from "@mantine/core";
import { TournamentFragment } from "../../../__generated__/graphql";
import OrganizationDashboardSectionWrapper from "../OrganizationDashboardSectionWrapper";
import Divider from "../../shared/Divider";
import { ReactNode } from "react";
import { IconEdit } from "@tabler/icons-react";

type Props = {
  tournament: TournamentFragment | null | undefined;
  openEditTournamentForm: () => void;
  isLoading: boolean;
};

function OrganizationIndividualTournamentDetails({
  tournament,
  openEditTournamentForm,
  isLoading,
}: Props) {
  return (
    <OrganizationDashboardSectionWrapper
      isLoading={isLoading}
      title="Tournament Details"
      rightSection={
        <ActionIcon size="sm" variant="light" onClick={openEditTournamentForm}>
          <IconEdit />
        </ActionIcon>
      }
    >
      {!isLoading && (
        <Stack>
          <Text size="sm" fw={500} c="dimmed">
            General Information
          </Text>
          <Box>
            <Text size="sm" fw={500}>
              {tournament?.tournamentName}
            </Text>
            <Text size="sm" c="dimmed">
              {tournament?.tournamentAddress}
            </Text>
          </Box>
          <Divider />
          <Text size="sm" fw={500} c="dimmed">
            Additional Information
          </Text>
          <AdditionalDetail
            label="Tournament Cost"
            value={"$" + tournament?.cost}
          />
          <AdditionalDetail
            label="Start Date"
            value={new Date(tournament?.startDate).toDateString()}
          />
          <AdditionalDetail
            label="End Date"
            value={new Date(tournament?.endDate).toDateString()}
          />

          <AdditionalDetail label="Sport" value={tournament?.sport} />
          <AdditionalDetail
            label="Age group"
            value={tournament?.ageGroup + "U"}
          />
          <AdditionalDetail
            label="Team Maximum"
            value={tournament?.teamMaximum}
          />
          <AdditionalDetail
            label="Game Minimum"
            value={tournament?.gameMinimum}
          />
        </Stack>
      )}
    </OrganizationDashboardSectionWrapper>
  );
}

export default OrganizationIndividualTournamentDetails;

const AdditionalDetail = ({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) => {
  return (
    <Flex justify="space-between">
      <Text size="sm" fw={500} c="dimmed">
        {label}
      </Text>
      <Text size="sm" fw={500}>
        {value}
      </Text>
    </Flex>
  );
};
