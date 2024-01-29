"use client";

import { Stack, Text, Timeline } from "@mantine/core";
import { useGetRegistrationsQuery } from "../../../__generated__/graphql";
import { useTeamContext } from "../../../context/TeamContext";
import { sortRegistrationsByDate } from "../../../utils/TeamTimelineUtils";
import { useState } from "react";
import TeamTimelineSectionHeader from "./TeamTimelineSectionHeader";
import TeamTimelineItem from "./TeamTimelineItem";

const TeamTimeLine = () => {
  const [timeFrame, setTimeFrame] = useState<string>("upcoming");
  const { selectedTeam } = useTeamContext();
  const { data } = useGetRegistrationsQuery({
    variables: { args: { teamId: selectedTeam?.id ?? -1 } },
  });

  const registrations = data?.getRegistrations ?? [];
  const organizedRegistrations = sortRegistrationsByDate(
    registrations,
    timeFrame === "upcoming"
  );

  return (
    <div className="my-10 mx-auto max-w-3xl">
      <Stack>
        <TeamTimelineSectionHeader
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
          registrations={registrations}
        />
        {registrations.length === 0 ? (
          <Text size="sm" c="dimmed">
            Current not signed-up for any events
          </Text>
        ) : (
          <Timeline radius="md" lineWidth={2} className="mt-5">
            {organizedRegistrations.map((registrationGroup, index) => {
              return (
                <TeamTimelineItem
                  key={index}
                  registrationGroup={registrationGroup}
                />
              );
            })}
          </Timeline>
        )}
      </Stack>
    </div>
  );
};

export default TeamTimeLine;
