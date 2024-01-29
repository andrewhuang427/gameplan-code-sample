import { Box, Button, Stack, Text, Title } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  description?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  title: string;
  buttonProps?: {
    cta: string;
    onClick: () => void;
  };
};

export const OnboardFormWrapper = ({
  children,
  description,
  title,
  buttonProps,
  isLoading = false,
  isDisabled = false,
}: Props) => {
  return (
    <div className="my-10 mx-auto max-w-3xl">
      <Stack>
        <Title fw={400}>{title}</Title>
        {description != null && (
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        )}
        <div className="my-4">{children}</div>
        {buttonProps != null && (
          <Box>
            <Button
              fullWidth={false}
              disabled={isDisabled}
              onClick={buttonProps.onClick}
              loading={isLoading}
            >
              {buttonProps.cta}
            </Button>
          </Box>
        )}
      </Stack>
    </div>
  );
};
