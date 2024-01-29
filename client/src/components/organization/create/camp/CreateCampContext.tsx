"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMultiStepForm } from "../../../../hooks/useMultiStepForm";
import { createCampFormConfig } from "./CreateCampConfig";
import { useOrganizationContext } from "../../../../context/OrganizationContext";
import {
  CampGeneralInformationFormType,
  defaultCampInformationFormData,
  useCampGeneralInformationForm,
} from "./hooks/useCampGeneralInformationForm";
import {
  CampCostFormType,
  defaultCampCostFormData,
  useCampCostForm,
} from "./hooks/useCampCostForm";
import {
  CampDetailsFormType,
  defaultCampDetailsFormData,
  useCampDetailsForm,
} from "./hooks/useCampDetailsForm";
import { defaultForm } from "../../../../utils/CustomMantineFormUtils";
import {
  CreateCampArgs,
  RecurrencePattern,
  useCreateCampMutation,
} from "../../../../__generated__/graphql";
import { useRouter } from "next/navigation";

export type CreateCampContextType = {
  formStep: number;
  campGeneralInformationForm: CampGeneralInformationFormType;
  campDetailsForm: CampDetailsFormType;
  campCostForm: CampCostFormType;
  recurrencePattern: RecurrencePattern;
  recurrenceDetail: string;
  handleAdvanceToNextFormStep: () => void;
  handleReturnToPreviousFormStep: () => void;
  handleCreateCamp: () => Promise<void>;
  setFormStep: Dispatch<SetStateAction<number>>;
  setRecurrencePattern: Dispatch<SetStateAction<RecurrencePattern>>;
  setRecurrenceDetail: Dispatch<SetStateAction<string>>;
  isFinalStep: boolean;
  isCampCreationInProgress: boolean;
};

const CreateCampContext = createContext<CreateCampContextType>({
  formStep: 0,
  campGeneralInformationForm: defaultForm(defaultCampInformationFormData),
  campDetailsForm: defaultForm(defaultCampDetailsFormData),
  campCostForm: defaultForm(defaultCampCostFormData),
  recurrencePattern: RecurrencePattern.OneTime,
  recurrenceDetail: "",
  handleAdvanceToNextFormStep: () => {},
  handleReturnToPreviousFormStep: () => {},
  handleCreateCamp: async () => {},
  setFormStep: () => {},
  setRecurrencePattern: () => {},
  setRecurrenceDetail: () => {},
  isFinalStep: false,
  isCampCreationInProgress: false,
});

export const CreateCampContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [recurrencePattern, setRecurrencePattern] = useState<RecurrencePattern>(
    RecurrencePattern.OneTime
  );
  const [recurrenceDetail, setRecurrenceDetail] = useState<string>("");

  const { organization } = useOrganizationContext();

  const generalInformationForm = useCampGeneralInformationForm();
  const detailsForm = useCampDetailsForm();
  const costForm = useCampCostForm();

  const {
    formStep,
    setFormStep,
    handleAdvanceToNextFormStep,
    handleReturnToPreviousFormStep,
  } = useMultiStepForm();

  const router = useRouter();

  const [createCamp, { loading: isCampCreationInProgress }] =
    useCreateCampMutation({
      update: (cache, result) => {
        cache.modify({
          fields: {
            getOrganizationCamps(existingCamps = []) {
              const createCampResult = result.data?.createCamp;
              if (createCampResult != null) {
                return [...existingCamps, createCampResult];
              }
              return existingCamps;
            },
          },
        });
      },
    });

  useEffect(() => {
    console.log({ recurrenceDetail, recurrencePattern });
  }, [recurrenceDetail, recurrencePattern]);

  const handleCreateCamp = async () => {
    const { campName, campAddress, campDates } = generalInformationForm.values;
    const { sport, playerMaximum, ageGroup } = detailsForm.values;
    const { cost } = costForm.values;

    if (
      organization != null &&
      playerMaximum != null &&
      cost != null &&
      campDates[0] != null &&
      campDates[1] != null
    ) {
      const args: CreateCampArgs = {
        ageGroup: Number(ageGroup),
        campAddress,
        campName,
        cost: Number(cost),
        endDate: campDates[1],
        organizationId: organization.id,
        playerMaximum: Number(playerMaximum),
        recurrenceDetail,
        recurrencePattern,
        sport: sport,
        startDate: campDates[1],
      };
      const response = await createCamp({ variables: { args } });
      if (response != null) {
        router.push("/organization/camps");
      }
    }
  };

  return (
    <CreateCampContext.Provider
      value={{
        formStep,
        campGeneralInformationForm: generalInformationForm,
        campDetailsForm: detailsForm,
        campCostForm: costForm,
        recurrencePattern,
        recurrenceDetail,
        handleAdvanceToNextFormStep,
        handleReturnToPreviousFormStep,
        handleCreateCamp,
        setFormStep,
        setRecurrencePattern,
        setRecurrenceDetail,
        isFinalStep: formStep === createCampFormConfig.length - 1,
        isCampCreationInProgress,
      }}
    >
      {children}
    </CreateCampContext.Provider>
  );
};

export const useCreateCampContext = () => {
  return useContext(CreateCampContext);
};
