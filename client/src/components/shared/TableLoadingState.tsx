import { Center, Flex, Loader, Text } from "@mantine/core";
import React from "react";

type Props = {
  label: string;
};
function TableLoadingState({ label }: Props) {
  return (
    <Center className="py-10">
      <Flex align="center" gap={10}>
        <Loader size="sm" />
        <Text size="sm" fw={500}>
          {label}
        </Text>
      </Flex>
    </Center>
  );
}

export default TableLoadingState;
