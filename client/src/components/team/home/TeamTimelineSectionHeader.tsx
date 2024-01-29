import { Flex, Title } from "@mantine/core";
import TeamScheduleMenu from "./TeamScheduleMenu";
import TeamTimelineUpcomingOrPastSelect from "./TeamTimelineUpcomingOrPastSelect";
import { Dispatch, SetStateAction } from "react";
import { TournamentRegistrationFragment } from "../../../__generated__/graphql";

type Props = {
  timeFrame: string;
  setTimeFrame: Dispatch<SetStateAction<string>>;
  registrations: TournamentRegistrationFragment[];
};

function TeamTimelineSectionHeader({
  timeFrame,
  setTimeFrame,
  registrations,
}: Props) {
  return (
    <Flex align="center" justify="space-between">
      <Title fw={400}>Calendar</Title>
      <Flex gap={10} align="center">
        <TeamTimelineUpcomingOrPastSelect
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />
        <TeamScheduleMenu registrations={registrations} />
      </Flex>
    </Flex>
  );
}

export default TeamTimelineSectionHeader;
