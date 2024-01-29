import { ReactNode } from "react";
import { CreateTournamentDetailsForm } from "./forms/CreateTournamentDetailsForm";
import { CreateTournamentGeneralInformationForm } from "./forms/CreateTournamentGeneralInformationForm";
import { CreateTournamentReviewInformation } from "./forms/CreateTournamentReviewInformation";
import { CreateTournamentCostForm } from "./forms/CreateTournamentCostForm";

export type CreateTournamentFormType =
  | "General Information"
  | "Details"
  | "Cost"
  | "Review";

type FormStep = {
  type: CreateTournamentFormType;
  label: string;
  description?: string;
  component: ReactNode;
};

export const createTournamentFormConfig: Array<FormStep> = [
  {
    type: "General Information",
    label: "General Tournament Information",
    description: "Enter general tournament information.",
    component: <CreateTournamentGeneralInformationForm />,
  },
  {
    type: "Details",
    label: "Tournament Details",
    description: "Enter more specific tournament cost and team details.",
    component: <CreateTournamentDetailsForm />,
  },
  {
    type: "Cost",
    label: "Tournament Cost",
    description: "Enter tournament cost information.",
    component: <CreateTournamentCostForm />,
  },
  {
    type: "Review",
    label: "Review Tournament Information.",
    component: <CreateTournamentReviewInformation />,
  },
];
