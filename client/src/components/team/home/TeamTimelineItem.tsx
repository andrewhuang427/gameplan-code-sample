import { Timeline } from "@mantine/core";
import { TournamentRegistrationFragment } from "../../../__generated__/graphql";
import TeamTimelineTournamentCard from "./TeamTimelineTournamentCard";

type Props = {
  registrationGroup: TournamentRegistrationFragment[];
};

function TeamTimelineItem({ registrationGroup }: Props) {
  const r = registrationGroup[0];
  const date = new Date(r.tournament?.startDate).toDateString();
  return (
    <Timeline.Item lineVariant="dashed" title={date}>
      <div className="mt-5">
        {registrationGroup.map((registration) => {
          return (
            <TeamTimelineTournamentCard
              key={registration.id}
              registration={registration}
            />
          );
        })}
      </div>
    </Timeline.Item>
  );
}

export default TeamTimelineItem;
