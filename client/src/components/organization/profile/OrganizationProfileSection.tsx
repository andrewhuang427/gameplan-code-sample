import { Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function OrganizationProfileSection({
  children,
  title,
  description,
}: Props) {
  return (
    <div>
      <Text fw={500}>{title}</Text>
      {description != null && (
        <Text size="xs" c="dimmed">
          {description}
        </Text>
      )}
      <div className="mt-4 p-5 rounded border bg-white border-neutral-200">
        {children}
      </div>
    </div>
  );
}
