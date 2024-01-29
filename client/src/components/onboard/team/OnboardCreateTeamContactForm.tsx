"use client";

import { useRouter } from "next/navigation";
import { CreateTeamContactInformationForm } from "../../team/create-team/CreateTeamContactInformationForm";
import { useOnboardContext } from "../OnboardContext";
import { OnboardFormWrapper } from "../OnboardFormWrapper";

export const OnboardCreateTeamContactForm = () => {
  const { contactInformationForm, onboardTeam, inFlight } = useOnboardContext();
  const router = useRouter();

  const handleOnboardTeam = async () => {
    const response = await onboardTeam();
    if (response != null) {
      router.refresh();
    }
  };

  return (
    <OnboardFormWrapper
      title="Team Contact Information"
      description="Saving your contact information will allow future tournament hosts get in contact with your team."
      isLoading={inFlight}
      isDisabled={!contactInformationForm.isValid()}
      buttonProps={{
        cta: "Create Team",
        onClick: handleOnboardTeam,
      }}
    >
      <CreateTeamContactInformationForm
        isLoading={inFlight}
        formDetails={contactInformationForm}
      />
    </OnboardFormWrapper>
  );
};
