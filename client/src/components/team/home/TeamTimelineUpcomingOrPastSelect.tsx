import { SegmentedControl, Center, Text } from "@mantine/core";
import { IconRotateClockwise2, IconArrowBack } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  timeFrame: string;
  setTimeFrame: Dispatch<SetStateAction<string>>;
};

function TeamTimelineUpcomingOrPastSelect({ timeFrame, setTimeFrame }: Props) {
  return (
    <SegmentedControl
      value={timeFrame}
      onChange={setTimeFrame}
      data={[
        {
          value: "upcoming",
          label: (
            <Center>
              <IconRotateClockwise2 size={20} />
              <Text ml={5} size="sm" fw={500}>
                Upcoming
              </Text>
            </Center>
          ),
        },
        {
          value: "past",
          label: (
            <Center>
              <IconArrowBack size={20} />
              <Text ml={5} size="sm" fw={500}>
                Past
              </Text>
            </Center>
          ),
        },
      ]}
    />
  );
}

export default TeamTimelineUpcomingOrPastSelect;
