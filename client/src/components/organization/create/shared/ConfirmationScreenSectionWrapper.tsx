import { Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

function ConfirmationScreenSectionWrapper({ children, title }: Props) {
  return (
    <Stack p={20}>
      <Text fw={500}>{title}</Text>
      {children}
    </Stack>
  );
}

export default ConfirmationScreenSectionWrapper;
