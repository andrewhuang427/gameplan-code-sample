import { Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  label: string;
  value: ReactNode;
};

export default function ConfirmationScreenRowItem({ label, value }: Props) {
  return (
    <div className={`flex justify-between items-center`}>
      <Text c="dimmed" size="sm">
        {label}
      </Text>
      {typeof value === "string" ? (
        <Text className="text-right" size="sm">
          {value}
        </Text>
      ) : (
        value
      )}
    </div>
  );
}
