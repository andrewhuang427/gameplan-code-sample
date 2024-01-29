import { Group, Radio } from "@mantine/core";
import { RecurrencePattern } from "../../__generated__/graphql";
import { Dispatch, SetStateAction } from "react";
import {
  recurrencePatterns,
  stringToRecurrencePattern,
} from "../../utils/RecurrenceUtils";

type Props = {
  recurrencePattern: RecurrencePattern;
  setRecurrencePattern: Dispatch<SetStateAction<RecurrencePattern>>;
};

function RecurrencePatternSelect({
  recurrencePattern,
  setRecurrencePattern,
}: Props) {
  return (
    <Radio.Group
      value={recurrencePattern}
      onChange={(value) => {
        const pattern = stringToRecurrencePattern(value);
        setRecurrencePattern(pattern);
      }}
      label="Recurrence pattern"
      description="Select your camp's recurrence pattern"
    >
      <Group mt="xs">
        {recurrencePatterns.map((r) => {
          return (
            <Radio
              key={r.pattern}
              value={r.pattern}
              label={r.label}
              size="sm"
            />
          );
        })}
      </Group>
    </Radio.Group>
  );
}

export default RecurrencePatternSelect;
