import { ReactNode } from "react";
import { RegisterTournamentConfirmationScreen } from "./RegisterTournamentConfirmationScreen";
import { RegisterTournamentTeamStep } from "./RegisterTournamentTeamStep";
import RegisterTournamentPaymentMethodContainer from "./RegisterTournamentPaymentMethodContainer";

export type RegisterTournamentFormType =
  | "General Team Information"
  | "Waiver"
  | "Payment"
  | "Confirmation";

type FormStep = {
  type: RegisterTournamentFormType;
  label: string;
  description?: string;
  component: ReactNode;
};

export const registerTournamentFormConfig: Array<FormStep> = [
  {
    type: "General Team Information",
    label: "General Team Information",
    description: "Enter general team information.",
    component: <RegisterTournamentTeamStep />,
  },
  {
    type: "Payment",
    label: "Select Payment Method",
    description: "Select a payment method to cover the event fee.",
    component: <RegisterTournamentPaymentMethodContainer />,
  },
  {
    type: "Confirmation",
    label: "Review Registration",
    description: "Review entered information and submit registration.",
    component: <RegisterTournamentConfirmationScreen />,
  },
];
