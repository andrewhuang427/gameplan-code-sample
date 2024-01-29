"use client";

import { Stack, TextInput, rem, Switch, Button } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { TeamContactInformationFormType } from "@/hooks/useCreateTeamContactInformationForm";

type Props = {
  formDetails: TeamContactInformationFormType;
  isLoading: boolean;
  onContinueClick?: () => void;
};

export const CreateTeamContactInformationForm = ({
  formDetails,
  isLoading,
  onContinueClick,
}: Props) => {
  const [shouldShowSecondaryContact, setShouldShowSecondaryContact] =
    useState<boolean>(false);

  const resetSecondaryContactInformationForm = () => {
    formDetails.setFieldValue("secondaryContactEmail", "");
    formDetails.setFieldValue("secondaryContactPhone", "");
    formDetails.setFieldValue("secondaryContactName", "");
  };

  return (
    <Stack>
      <TextInput
        label="Primary contact name"
        {...formDetails.getInputProps("primaryContactName")}
      />
      <TextInput
        label="Primary contact email"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        {...formDetails.getInputProps("primaryContactEmail")}
      />
      <TextInput
        label="Primary contact phone"
        {...formDetails.getInputProps("primaryContactPhone")}
      />
      <Switch
        checked={shouldShowSecondaryContact}
        onChange={(event) => {
          if (event.target.checked === false) {
            resetSecondaryContactInformationForm();
          }
          setShouldShowSecondaryContact(event.target.checked);
        }}
        label="Add secondary contact"
        description="Adding a secondary contact can be beneficial if the tournament needs to contact your team."
      />
      {shouldShowSecondaryContact && (
        <>
          <TextInput
            label="Secondary contact name"
            {...formDetails.getInputProps("secondaryContactName")}
          />
          <TextInput
            label="Secondary contact email"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            {...formDetails.getInputProps("secondaryContactEmail")}
          />
          <TextInput
            label="Secondary contact phone"
            {...formDetails.getInputProps("secondaryContactPhone")}
          />
        </>
      )}
      {onContinueClick != null && (
        <Button loading={isLoading} onClick={onContinueClick}>
          Create Team
        </Button>
      )}
    </Stack>
  );
};
