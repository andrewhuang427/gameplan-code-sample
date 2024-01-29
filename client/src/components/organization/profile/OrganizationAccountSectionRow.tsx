import { Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  label: string;
  value: ReactNode;
};

export default function OrganizationAccountSectionRow({ label, value }: Props) {
  return (
    <div className="flex justify-between items-center">
      <Text size="sm" c="dimmed">
        {label}
      </Text>
      <Text size="sm">{value}</Text>
    </div>
  );
}
