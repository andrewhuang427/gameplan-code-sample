import {
  TournamentRegistrationFragment,
  TournamentFragment,
} from "../../../__generated__/graphql";
import OrganizationDashboardSectionWrapper from "../OrganizationDashboardSectionWrapper";
import { Flex, Progress, Stack, Text } from "@mantine/core";

type Props = {
  tournament: TournamentFragment | null | undefined;
  registrations: TournamentRegistrationFragment[];
  isLoading: boolean;
};

function OrganizationIndividualTournamentRegistrationCount({
  registrations,
  tournament,
  isLoading,
}: Props) {
  const teamMaximum = tournament?.teamMaximum;
  const numRegistration = registrations.length;

  const getPercentageFull = () => {
    if (teamMaximum != null) {
      return Math.round((numRegistration / teamMaximum) * 100);
    }
    return 0;
  };

  const percentage = getPercentageFull();

  return (
    <OrganizationDashboardSectionWrapper
      title="Registration Count"
      isLoading={isLoading}
    >
      <Stack>
        <Text c="dimmed" size="sm">
          The tournament currently at {percentage}% of its total capacity.{" "}
          {numRegistration} team(s) are registered out of {teamMaximum} spots.
        </Text>
        <Progress
          size="sm"
          variant="light"
          color={percentage === 100 ? "green" : "indigo"}
          value={percentage}
        />
      </Stack>
    </OrganizationDashboardSectionWrapper>
  );
}

export default OrganizationIndividualTournamentRegistrationCount;
