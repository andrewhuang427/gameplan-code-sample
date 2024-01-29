"use client";

import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { defaultForm } from "@/utils/CustomMantineFormUtils";
import { createTournamentFormConfig } from "./CreateTournamentFormConfig";
import {
  TournamentDetailsFormType,
  defaultTournamentDetailsFormData,
  useTournamentDetailsForm,
} from "./hooks/useTournamentDetailsForm";
import {
  TournamentGeneralInformationFormType,
  defaultTournamentInformationFormData,
  useTournamentGeneralInformationForm,
} from "./hooks/useTournamentGeneralInformationForm";
import {
  TournamentCostFormType,
  defaultTournamentCostFormData,
  useTournamentCostForm,
} from "./hooks/useTournamentCostForm";
import {
  CreateTournamentArgs,
  useCreateTournamentMutation,
} from "@/__generated__/graphql";
import { useMultiStepForm } from "../../../../hooks/useMultiStepForm";
import { useOrganizationContext } from "../../../../context/OrganizationContext";
import { useRouter } from "next/navigation";

export type CreateTournamentContextType = {
  formStep: number;
  tournamentGeneralInformationForm: TournamentGeneralInformationFormType;
  tournamentDetailsForm: TournamentDetailsFormType;
  tournamentCostForm: TournamentCostFormType;
  handleAdvanceToNextFormStep: () => void;
  handleReturnToPreviousFormStep: () => void;
  handleCreateTournament: () => Promise<void>;
  setFormStep: Dispatch<SetStateAction<number>>;
  isFinalStep: boolean;
  isTournamentCreationInProgress: boolean;
};

const CreateTournamentContext = createContext<CreateTournamentContextType>({
  formStep: 0,
  tournamentGeneralInformationForm: defaultForm(
    defaultTournamentInformationFormData
  ),
  tournamentDetailsForm: defaultForm(defaultTournamentDetailsFormData),
  tournamentCostForm: defaultForm(defaultTournamentCostFormData),
  handleAdvanceToNextFormStep: () => {},
  handleReturnToPreviousFormStep: () => {},
  handleCreateTournament: async () => {},
  setFormStep: () => {},
  isFinalStep: false,
  isTournamentCreationInProgress: false,
});

type Props = {
  children: React.ReactNode;
};

export const CreateTournamentContextProvider = ({ children }: Props) => {
  const { organization } = useOrganizationContext();

  const generalInformationForm = useTournamentGeneralInformationForm();
  const detailsForm = useTournamentDetailsForm();
  const costForm = useTournamentCostForm();
  const router = useRouter();

  const {
    formStep,
    setFormStep,
    handleAdvanceToNextFormStep,
    handleReturnToPreviousFormStep,
  } = useMultiStepForm();

  const [createTournament, { loading: isTournamentCreationInProgress }] =
    useCreateTournamentMutation({
      update: (cache, result) => {
        cache.modify({
          fields: {
            getOrganizationTournaments(existingTournaments = []) {
              const createTournamentResult = result.data?.createTournament;
              if (createTournamentResult != null) {
                return [...existingTournaments, ...createTournamentResult];
              }
              return existingTournaments;
            },
          },
        });
      },
    });

  const handleCreateTournament = async () => {
    const { tournamentAddress, tournamentDates, tournamentName } =
      generalInformationForm.values;
    const { ageGroups, gameMinimum, teamMaximum, sport } = detailsForm.values;
    const { cost } = costForm.values;

    if (
      organization != null &&
      gameMinimum != null &&
      teamMaximum != null &&
      cost != null &&
      tournamentDates[0] != null &&
      tournamentDates[1] != null
    ) {
      const args: CreateTournamentArgs = {
        tournamentName,
        tournamentAddress,
        cost: Number(cost),
        ageGroups: ageGroups.map((ageGroup) => Number(ageGroup)),
        teamMaximum: Number(teamMaximum),
        gameMinimum: Number(gameMinimum),
        sport,
        startDate: tournamentDates[0],
        endDate: tournamentDates[1],
        organizationId: organization.id,
      };
      const response = await createTournament({ variables: { args } });
      if (response != null) {
        router.push("/organization/tournaments");
      }
    }
  };

  return (
    <CreateTournamentContext.Provider
      value={{
        formStep,
        tournamentGeneralInformationForm: generalInformationForm,
        tournamentDetailsForm: detailsForm,
        tournamentCostForm: costForm,
        handleAdvanceToNextFormStep,
        handleReturnToPreviousFormStep,
        handleCreateTournament,
        setFormStep,
        isFinalStep: formStep === createTournamentFormConfig.length - 1,
        isTournamentCreationInProgress,
      }}
    >
      {children}
    </CreateTournamentContext.Provider>
  );
};

export const useCreateTournamentContext = () => {
  return useContext(CreateTournamentContext);
};
