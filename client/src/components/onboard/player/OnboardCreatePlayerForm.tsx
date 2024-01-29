"use client";

import { NumberInput, Stack, TextInput, rem } from "@mantine/core";
import { OnboardFormWrapper } from "../OnboardFormWrapper";
import { useOnboardContext } from "../OnboardContext";
import { useRouter } from "next/navigation";
import { IconAt } from "@tabler/icons-react";

function OnboardCreatePlayerForm() {
  const { playerForm, onboardPlayer, inFlight } = useOnboardContext();
  const router = useRouter();

  const handleOnboardPlayer = async () => {
    const response = await onboardPlayer();
    if (response != null) {
      router.refresh();
    }
  };

  return (
    <OnboardFormWrapper
      title="Create Player"
      isLoading={inFlight}
      isDisabled={!playerForm.isValid()}
      buttonProps={{ cta: "Create Player", onClick: handleOnboardPlayer }}
    >
      <Stack>
        <TextInput
          label="First Name"
          {...playerForm.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          {...playerForm.getInputProps("lastName")}
        />
        <NumberInput
          label="Age Group"
          {...playerForm.getInputProps("ageGroup")}
        />
        <TextInput
          label="Primary Contact Email"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          {...playerForm.getInputProps("primaryContactEmail")}
        />
        <TextInput
          label="Primary Contact Phone"
          {...playerForm.getInputProps("primaryContactPhone")}
        />
      </Stack>
    </OnboardFormWrapper>
  );
}

export default OnboardCreatePlayerForm;
