import { Calendar } from "@mantine/dates";
import { RecurrencePattern } from "../../__generated__/graphql";
import { getRecurrenceDates } from "../../utils/RecurrenceUtils";
import dayjs from "dayjs";

type Props = {
  startDate: Date;
  endDate: Date;
  recurrencePattern: RecurrencePattern;
  recurrenceDetail: string;
};

function RecurrenceCalendar({
  startDate,
  endDate,
  recurrenceDetail,
  recurrencePattern,
}: Props) {
  const recurrenceDates = getRecurrenceDates(
    startDate,
    endDate,
    recurrencePattern,
    recurrenceDetail
  );

  return (
    <Calendar
      defaultDate={startDate}
      getDayProps={(date) => ({
        selected: recurrenceDates.some((s) =>
          dayjs(date).isSame(s.recurrenceDate, "date")
        ),
      })}
    />
  );
}

export default RecurrenceCalendar;
