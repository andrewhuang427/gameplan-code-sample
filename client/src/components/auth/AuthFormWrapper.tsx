import { Flex, Paper, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { ReactNode } from "react";
import { logo } from "../../assets";

type Props = {
  children: ReactNode;
  title: string;
};

export const AuthFormWrapper = ({ title, children }: Props) => {
  return (
    <div className="grow max-w-xl">
      <Paper radius="md" p="xl" bg="none">
        <Flex justify="center">
          <Image height={60} src={logo} alt="company logo" />
        </Flex>
        <Text size="lg" fw={500} mb="lg">
          {title}
        </Text>
        <Stack gap="lg">{children}</Stack>
      </Paper>
    </div>
  );
};
