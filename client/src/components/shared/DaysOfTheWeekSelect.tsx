import { Group, Button, Stack, Text, Box } from "@mantine/core";
import { recurrenceDetailDays } from "../../utils/RecurrenceUtils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FormSectionLabelAndDescription from "./FormSectionLabelAndDescription";

type Props = {
  label?: string;
  description?: string;
  setRecurrenceDetail: Dispatch<SetStateAction<string>>;
};

function DaysOfTheWeekSelect({
  label,
  description,
  setRecurrenceDetail,
}: Props) {
  const [days, setDays] = useState<string[]>([]);

  useEffect(() => {
    setRecurrenceDetail(days.join(", "));
  }, [days]);

  return (
    <Stack gap="sm">
      <FormSectionLabelAndDescription label={label} description={description} />
      <Group gap="xs">
        {recurrenceDetailDays.map((dayDetail) => {
          const isSelected = days.includes(dayDetail.value);
          return (
            <Button
              key={dayDetail.value}
              size="xs"
              color={isSelected ? "indigo" : "#868e96"}
              variant={isSelected ? "filled" : "outline"}
              onClick={() => {
                setDays((prevDays) => {
                  if (prevDays.includes(dayDetail.value)) {
                    return [...prevDays].filter((d) => d != dayDetail.value);
                  } else {
                    return [...prevDays, dayDetail.value].sort();
                  }
                });
              }}
            >
              {dayDetail.label}
            </Button>
          );
        })}
      </Group>
    </Stack>
  );
}

export default DaysOfTheWeekSelect;
