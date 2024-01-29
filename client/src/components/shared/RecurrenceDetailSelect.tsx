import { Dispatch, SetStateAction } from "react";
import { RecurrencePattern } from "../../__generated__/graphql";
import DaysOfTheWeekSelect from "./DaysOfTheWeekSelect";
import { Text } from "@mantine/core";
import { getMonthlyRecurrenceString } from "../../utils/RecurrenceUtils";

type Props = {
  recurrencePattern: RecurrencePattern;
  recurrenceDetail: string;
  setRecurrenceDetail: Dispatch<SetStateAction<string>>;
};

function RecurrenceDetailSelect({
  recurrencePattern,
  recurrenceDetail,
  setRecurrenceDetail,
}: Props) {
  if (
    recurrencePattern === RecurrencePattern.Weekly ||
    recurrencePattern === RecurrencePattern.BiWeekly
  ) {
    return (
      <DaysOfTheWeekSelect
        label="Select Days"
        description="Select reoccurring days of the event."
        setRecurrenceDetail={setRecurrenceDetail}
      />
    );
  }

  if (recurrencePattern === RecurrencePattern.Monthly) {
    return (
      <Text size="sm" fw={500}>
        {getMonthlyRecurrenceString(recurrenceDetail)}
      </Text>
    );
  }
  return null;
}

export default RecurrenceDetailSelect;
