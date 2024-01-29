"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm";
import {
  PaymentIntentFragment,
  PaymentMethodFragment,
  SportType,
  TournamentFragment,
} from "../../../__generated__/graphql";
import { ApolloError } from "@apollo/client";
import { useCreateRegistration } from "../../../hooks/useCreateRegistration";
import { PaymentStripeElementsProvider } from "../../shared/PaymentStripeElementsProvider";
import { LoadingScreen } from "../../shared/LoadingScreen";
import { useSetupRegistration } from "../../../hooks/useSetupRegistration";
import { useRedirectAndRefresh } from "../../../hooks/useRedirectAndRefresh";

export type RegisterTournamentContextType = {
  formStep: number;
  tournament: TournamentFragment;
  selectedPaymentMethod: PaymentMethodFragment | null;
  paymentIntent: PaymentIntentFragment | null;
  isRegistrationInProgress: boolean;
  handleAdvanceToNextFormStep: () => void;
  handleReturnToPreviousFormStep: () => void;
  setFormStep: Dispatch<SetStateAction<number>>;
  setSelectedTeamId: Dispatch<SetStateAction<number | null>>;
  setSelectedPaymentMethod: Dispatch<
    SetStateAction<PaymentMethodFragment | null>
  >;
  handleCreateRegistration: () => Promise<void>;
};

const RegisterTournamentContext = createContext<RegisterTournamentContextType>({
  formStep: 0,
  selectedPaymentMethod: null,
  paymentIntent: null,
  isRegistrationInProgress: false,
  tournament: {
    id: 0,
    tournamentName: "",
    tournamentAddress: "",
    cost: 0,
    sport: SportType.Baseball,
    ageGroup: 0,
    teamMaximum: 0,
    gameMinimum: 0,
    startDate: undefined,
    endDate: undefined,
  },
  handleAdvanceToNextFormStep: () => {},
  handleReturnToPreviousFormStep: () => {},
  setFormStep: () => {},
  setSelectedTeamId: () => {},
  setSelectedPaymentMethod: () => {},
  handleCreateRegistration: async () => {},
});

type Props = {
  children: ReactNode;
  tournament: TournamentFragment;
};

export const RegisterTournamentContextProvider = ({
  children,
  tournament,
}: Props) => {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodFragment | null>(null);

  const { paymentIntent, setupIntent } = useSetupRegistration(tournament.id);
  const [createRegistration, isCreateRegistrationInFlight] =
    useCreateRegistration();

  const redirectAndRefresh = useRedirectAndRefresh();

  const {
    formStep,
    setFormStep,
    handleAdvanceToNextFormStep,
    handleReturnToPreviousFormStep,
  } = useMultiStepForm();

  const handleCreateRegistration = async () => {
    if (
      selectedTeamId == null ||
      selectedPaymentMethod == null ||
      paymentIntent == null
    )
      return;
    try {
      const response = await createRegistration({
        teamId: selectedTeamId,
        tournamentId: tournament.id,
        paymentIntentId: paymentIntent.id,
      });
      if (response != null) {
        redirectAndRefresh("/team");
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        console.log({ error, message: error.message });
      }
    }
  };

  const contextValue: RegisterTournamentContextType = {
    formStep,
    selectedPaymentMethod,
    tournament,
    paymentIntent,
    isRegistrationInProgress: isCreateRegistrationInFlight,
    setFormStep,
    handleAdvanceToNextFormStep,
    handleReturnToPreviousFormStep,
    setSelectedTeamId,
    setSelectedPaymentMethod,
    handleCreateRegistration,
  };

  if (setupIntent == null) {
    return <LoadingScreen />;
  }

  return (
    <RegisterTournamentContext.Provider value={contextValue}>
      {setupIntent.clientSecret !== "" && (
        <PaymentStripeElementsProvider clientSecret={setupIntent.clientSecret}>
          {children}
        </PaymentStripeElementsProvider>
      )}
    </RegisterTournamentContext.Provider>
  );
};

export const useRegisterTournamentContext = () => {
  return useContext(RegisterTournamentContext);
};
