"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultForm } from "@/utils/CustomMantineFormUtils";
import {
  OnboardOrganizationMutation,
  OnboardPlayerMutation,
  OnboardTeamMutation,
  UserType,
} from "@/__generated__/graphql";
import { FetchResult } from "@apollo/client";
import {
  TeamContactInformationFormType,
  defaultTeamContactInformationForm,
} from "../../hooks/useCreateTeamContactInformationForm";
import {
  TeamGeneralInformationFormType,
  defaultTeamGeneralInformationForm,
} from "../../hooks/useCreateTeamGeneralInformationForm";
import {
  CreateOrganizationFormDataType,
  CreateOrganizationFormType,
  defaultCreateOrganizationFormValue,
} from "../../hooks/useCreateOrganizationForm";
import {
  CreatePlayerFormType,
  defaultCreatePlayerFormValue,
} from "../../hooks/useCreatePlayerForm";
import useOnboardTeam from "./hooks/useOnboardTeam";
import useOnboardOrganization from "./hooks/useOnboardOrganization";
import useOnboardPlayer from "./hooks/useOnboardPlayer";

type OnboardContextType = {
  userType: null | UserType;
  setUserType: Dispatch<SetStateAction<null | UserType>>;
  onboardTeam: () => Promise<FetchResult<OnboardTeamMutation> | null>;
  onboardOrganization: () => Promise<FetchResult<OnboardOrganizationMutation> | null>;
  onboardPlayer: () => Promise<FetchResult<OnboardPlayerMutation> | null>;
  inFlight: boolean;
  contactInformationForm: TeamContactInformationFormType;
  generalInformationForm: TeamGeneralInformationFormType;
  organizationForm: CreateOrganizationFormType;
  playerForm: CreatePlayerFormType;
};

const onboardContextDefaultValue: OnboardContextType = {
  userType: null,
  inFlight: false,
  setUserType: () => {},
  onboardTeam: async () => null,
  onboardOrganization: async () => null,
  onboardPlayer: async () => null,
  contactInformationForm: defaultForm(defaultTeamContactInformationForm),
  generalInformationForm: defaultForm(defaultTeamGeneralInformationForm),
  organizationForm: defaultForm<CreateOrganizationFormDataType>(
    defaultCreateOrganizationFormValue
  ),
  playerForm: defaultForm(defaultCreatePlayerFormValue),
};

const OnboardContext = createContext<OnboardContextType>(
  onboardContextDefaultValue
);

type Props = { children: ReactNode };

export const OnboardContextProvider = ({ children }: Props) => {
  const [userType, setUserType] = useState<null | UserType>(null);

  const {
    onboardTeam,
    contactInformationForm,
    generalInformationForm,
    loading: isTeamMutationLoading,
  } = useOnboardTeam();

  const {
    onboardOrganization,
    loading: isOrganizationMutationLoading,
    organizationForm,
  } = useOnboardOrganization();

  const {
    onboardPlayer,
    loading: isPlayerMutationLoading,
    playerForm,
  } = useOnboardPlayer();

  const router = useRouter();

  // redirect the user back to the start of the onboard
  // flow if they do not have a select user type
  useEffect(() => {
    if (userType === null) {
      router.push("/onboard");
    }
  }, [userType, router]);

  return (
    <OnboardContext.Provider
      value={{
        setUserType,
        onboardTeam,
        onboardOrganization,
        onboardPlayer,
        contactInformationForm,
        generalInformationForm,
        organizationForm,
        playerForm,
        userType,
        inFlight:
          isTeamMutationLoading ||
          isOrganizationMutationLoading ||
          isPlayerMutationLoading,
      }}
    >
      {children}
    </OnboardContext.Provider>
  );
};

export const useOnboardContext = () => {
  return useContext(OnboardContext);
};
