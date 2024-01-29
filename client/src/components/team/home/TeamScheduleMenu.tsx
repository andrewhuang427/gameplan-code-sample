import { Menu, ActionIcon, Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconCalendarTime } from "@tabler/icons-react";
import { TournamentRegistrationFragment } from "../../../__generated__/graphql";

type Props = {
  registrations: TournamentRegistrationFragment[];
};

function TeamScheduleMenu({ registrations }: Props) {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="light">
          <IconCalendarTime />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Calendar
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator
                disabled={
                  registrations == null ||
                  registrations.filter((r) => {
                    const startDate = new Date(r.tournament?.startDate);
                    const endDate = new Date(r.tournament?.endDate);
                    const isBetween =
                      date.valueOf() >= startDate.valueOf() &&
                      date.valueOf() <= endDate.valueOf();
                    return isBetween;
                  }).length === 0
                }
                size={6}
                offset={-2}
              >
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
      </Menu.Dropdown>
    </Menu>
  );
}

export default TeamScheduleMenu;
