"use client";

import { OnboardFormWrapper } from "../OnboardFormWrapper";
import { Stack, TextInput } from "@mantine/core";
import { SportSelector } from "@/components/shared/SportSelector";
import { AddressAutocomplete } from "@/components/shared/AddressAutocomplete";
import { useOnboardContext } from "../OnboardContext";
import { useRouter } from "next/navigation";

function OnboardCreateOrganizationForm() {
  const { organizationForm, onboardOrganization, inFlight } =
    useOnboardContext();
  const router = useRouter();

  const handleOnboardOrganization = async () => {
    const response = await onboardOrganization();
    if (response != null) {
      router.refresh();
    }
  };

  return (
    <OnboardFormWrapper
      title="Create Organization"
      description="Creating an organization will allow you to create and manage tournaments and events."
      isLoading={inFlight}
      isDisabled={!organizationForm.isValid()}
      buttonProps={{
        cta: "Create Organization",
        onClick: handleOnboardOrganization,
      }}
    >
      <Stack>
        <TextInput
          label="Organization Name"
          {...organizationForm.getInputProps("name")}
        />
        <SportSelector
          label="Sport"
          {...organizationForm.getInputProps("sport")}
        />
        <AddressAutocomplete
          label="Organization Address"
          error={organizationForm.getInputProps("address").error}
          defaultValue={organizationForm.getInputProps("address").value}
          onChange={organizationForm.getInputProps("address").onChange}
        />
      </Stack>
    </OnboardFormWrapper>
  );
}

export default OnboardCreateOrganizationForm;
