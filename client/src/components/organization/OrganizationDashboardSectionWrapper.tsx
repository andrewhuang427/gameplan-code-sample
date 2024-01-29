import { Flex, Loader, Title } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  isLoading?: boolean;
  rightSection?: ReactNode;
  rightTitle?: ReactNode;
};

function OrganizationDashboardSectionWrapper({
  children,
  title,
  icon,
  rightSection,
  rightTitle,
  isLoading = false,
}: Props) {
  return (
    <div className="border border-neutral-200 rounded bg-white p-5">
      <Flex align="center" gap={10} mb={15}>
        {isLoading && <Loader size="xs" />}
        {icon != null && icon}
        <Flex className="grow" align="center" gap={10}>
          <Title fw={500} order={4}>
            {title}
          </Title>
          {rightTitle != null && rightTitle}
        </Flex>
        {rightSection != null && rightSection}
      </Flex>
      {children}
    </div>
  );
}

export default OrganizationDashboardSectionWrapper;
