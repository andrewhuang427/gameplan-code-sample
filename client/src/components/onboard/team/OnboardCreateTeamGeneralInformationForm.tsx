"use client";

import { OnboardFormWrapper } from "../OnboardFormWrapper";
import { CreateTeamGeneralInformationForm } from "../../team/create-team/CreateTeamGeneralInformationForm";
import { useRouter } from "next/navigation";
import { useOnboardContext } from "../OnboardContext";

function OnboardCreateTeamGeneralInformationForm() {
  const { generalInformationForm } = useOnboardContext();
  const router = useRouter();

  const handleRedirectToContactForm = () => {
    router.push("/onboard/team/contact");
  };

  return (
    <OnboardFormWrapper
      title="Create your first team"
      description="Creating a team will allow you to easily manage and register for tournaments and events."
      isDisabled={!generalInformationForm.isValid()}
      buttonProps={{
        cta: "Continue",
        onClick: handleRedirectToContactForm,
      }}
    >
      <CreateTeamGeneralInformationForm formDetails={generalInformationForm} />
    </OnboardFormWrapper>
  );
}

export default OnboardCreateTeamGeneralInformationForm;
