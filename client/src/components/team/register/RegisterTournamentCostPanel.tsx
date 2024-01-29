import { Box, Center, Flex, Stack, Text, Title } from "@mantine/core";
import { formatCurrency } from "../../../utils/CurrencyUtils";

type Props = {
  cost: number;
};
export const RegisterTournamentCostPanel = ({ cost }: Props) => {
  return (
    <div className="bg-indigo-50 ms-8 p-8 shadow-md rounded-xl">
      <Stack gap={4} my={30}>
        <Center>
          <Text size="xs" fw={500}>
            Total Cost
          </Text>
        </Center>
        <Center>
          <Title order={1} c="indigo">
            {formatCurrency(cost)}
          </Title>
        </Center>
      </Stack>
      <Box>
        <Stack>
          <Text size="xs" fw={500} c="dimmed">
            Order Summary
          </Text>
          <Flex justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Tournament Cost
            </Text>
            <Text size="xs" fw={500}>
              {formatCurrency(cost)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Taxes
            </Text>
            <Text size="xs" fw={500}>
              $0.00
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Transaction Fees
            </Text>
            <Text size="xs" fw={500}>
              $0.00
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Total
            </Text>
            <Text size="xs" fw={500} c="indigo">
              {formatCurrency(cost)}
            </Text>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
};
