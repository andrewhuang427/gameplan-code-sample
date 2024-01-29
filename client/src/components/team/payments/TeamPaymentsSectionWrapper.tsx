import { Flex, Loader, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  isLoading?: boolean;
};

function TeamPaymentsSectionWrapper({
  title,
  children,
  description,
  icon,
  isLoading = false,
}: Props) {
  return (
    <div className={`p-6 border rounded border-neutral-200 bg-white `}>
      <Flex align="center" gap={10}>
        {icon != null && icon}
        <Text fw={500}>{title}</Text>
        {isLoading && <Loader size="xs" />}
      </Flex>
      {description != null && (
        <Text className="mt-1 mb-6" size="xs" c="dimmed">
          {description}
        </Text>
      )}
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default TeamPaymentsSectionWrapper;
