import { Stack, Box, Divider, Text } from "@mantine/core";
import { SelectableContainerWrapper } from "../../shared/SelectableContainerWrapper";

type Props = {
  onSelect: () => void;
  isSelected: boolean;
  teamName: string;
  teamCity: string;
  teamState: string;
  teamPrimaryContactName: string;
  teamPrimaryContactEmail: string;
  teamPrimaryContactPhone: string;
};

export const RegisterTournamentSelectTeamCard = ({
  onSelect,
  isSelected,
  teamName,
  teamCity,
  teamState,
  teamPrimaryContactEmail,
  teamPrimaryContactName,
  teamPrimaryContactPhone,
}: Props) => {
  return (
    <SelectableContainerWrapper isSelected={isSelected} onClick={onSelect}>
      <Stack>
        <Box>
          <Text lineClamp={1} size="small" fw={500}>
            {teamName}
          </Text>
          <Text
            lineClamp={1}
            size="xs"
            c="dimmed"
          >{`${teamCity}, ${teamState}`}</Text>
        </Box>
        <Divider c="dimmed" />
        <Stack gap="sm">
          <Text size="sm" fw={500}>
            Primary Contact Information
          </Text>
          <Box>
            <Text size="sm" c="dimmed">
              {teamPrimaryContactName}
            </Text>
            <Text size="sm" c="dimmed">
              {teamPrimaryContactEmail}
            </Text>
            <Text size="sm" c="dimmed">
              {teamPrimaryContactPhone}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </SelectableContainerWrapper>
  );
};
