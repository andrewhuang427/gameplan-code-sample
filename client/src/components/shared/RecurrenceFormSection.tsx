import { Dispatch, SetStateAction, useEffect } from "react";
import { RecurrencePattern } from "../../__generated__/graphql";
import { Box, Button, Popover, Stack } from "@mantine/core";
import { getMonthlyRecurrenceDetail } from "../../utils/RecurrenceUtils";
import RecurrenceCalendar from "./RecurrenceCalendar";
import RecurrenceDetailSelect from "./RecurrenceDetailSelect";
import RecurrencePatternSelect from "./RecurrencePatternSelect";
import { IconCalendarTime } from "@tabler/icons-react";

type Props = {
  startDate: Date;
  endDate: Date;
  recurrenceDetail: string;
  recurrencePattern: RecurrencePattern;
  setRecurrenceDetail: Dispatch<SetStateAction<string>>;
  setRecurrencePattern: Dispatch<SetStateAction<RecurrencePattern>>;
};
function RecurrenceFormSection({
  startDate,
  endDate,
  recurrenceDetail,
  recurrencePattern,
  setRecurrenceDetail,
  setRecurrencePattern,
}: Props) {
  useEffect(() => {
    if (recurrencePattern === RecurrencePattern.Monthly) {
      const newRecurrenceDetail =
        getMonthlyRecurrenceDetail(startDate).recurrenceDetail;
      setRecurrenceDetail(newRecurrenceDetail);
    }
  }, [recurrencePattern, startDate]);

  return (
    <Stack gap="lg">
      <RecurrencePatternSelect
        recurrencePattern={recurrencePattern}
        setRecurrencePattern={setRecurrencePattern}
      />
      <RecurrenceDetailSelect
        recurrencePattern={recurrencePattern}
        recurrenceDetail={recurrenceDetail}
        setRecurrenceDetail={setRecurrenceDetail}
      />
      {recurrencePattern != RecurrencePattern.OneTime && (
        <Box>
          <Popover position="right" withArrow shadow="md">
            <Popover.Target>
              <Button
                size="xs"
                leftSection={<IconCalendarTime />}
                variant="light"
              >
                Show Calendar
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <RecurrenceCalendar
                startDate={startDate}
                endDate={endDate}
                recurrenceDetail={recurrenceDetail}
                recurrencePattern={recurrencePattern}
              />
            </Popover.Dropdown>
          </Popover>
        </Box>
      )}
    </Stack>
  );
}

export default RecurrenceFormSection;
