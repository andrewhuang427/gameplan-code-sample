import { Box, Button, Flex, MantineSpacing, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  secondaryAction?: ReactNode;
  onSubmit?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  gap?: MantineSpacing;
  cta?: string;
};

export const FormWrapper = ({
  children,
  title,
  secondaryAction,
  onSubmit,
  gap,
  cta,
  isDisabled = false,
  isLoading = false,
}: Props) => {
  return (
    <Stack gap={gap}>
      {title != null && (
        <Text size="xl" fw={500}>
          {title}
        </Text>
      )}
      {children}
      {onSubmit != null && (
        <Flex gap={10}>
          <Button
            variant="filled"
            color="dark"
            onClick={onSubmit}
            loading={isLoading}
            disabled={isDisabled}
          >
            {cta}
          </Button>
          {secondaryAction != null && secondaryAction}
        </Flex>
      )}
    </Stack>
  );
};
