import { Flex, Title, Box, Text, Skeleton } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  rightComponents?: ReactNode;
  isLoading?: boolean;
};

function OrganizationDashboardPageHeader({
  title,
  description,
  rightComponents,
  isLoading = false,
}: Props) {
  const leftComponent = isLoading ? (
    <Box className="grow">
      <Skeleton height={30} w="60%" />
      <Skeleton height={15} w="40%" mt={10} />
    </Box>
  ) : (
    <Box className="grow">
      <Title fw={400} order={2}>
        {title}
      </Title>
      {description != null && (
        <Text c="dimmed" size="sm" mt={5}>
          {description}
        </Text>
      )}
    </Box>
  );

  return (
    <Flex justify="space-between" mb={24}>
      {leftComponent}
      {rightComponents != null && rightComponents}
    </Flex>
  );
}

export default OrganizationDashboardPageHeader;
