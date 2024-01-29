import { ReactNode } from "react";
import { CreateCampGeneralInformationForm } from "./forms/CreateCampGeneralInformationForm";
import { CreateCampCostForm } from "./forms/CreateCampCostForm";
import { CreateCampDetailsForm } from "./forms/CreateCampDetailsForm";
import CreateCampReviewInformation from "./forms/CreateCampReviewInformation";

export type CreateCampFormType =
  | "General Information"
  | "Dates"
  | "Details"
  | "Cost"
  | "Review";

type FormStep = {
  type: CreateCampFormType;
  label: string;
  description?: string;
  component: ReactNode;
};

export const createCampFormConfig: Array<FormStep> = [
  {
    type: "General Information",
    label: "General Camp Information",
    description: "Enter general camp information.",
    component: <CreateCampGeneralInformationForm />,
  },
  {
    type: "Details",
    label: "Camp Details",
    description: "Enter more specific camp details.",
    component: <CreateCampDetailsForm />,
  },
  {
    type: "Cost",
    label: "Cost",
    description: "Enter camp cost information.",
    component: <CreateCampCostForm />,
  },
  {
    type: "Review",
    label: "Review camp Information.",
    component: <CreateCampReviewInformation />,
  },
];
