import { VerticalStepperCell } from "./VerticalStepperCell";

export type VerticalStepperOption = {
  onClick: () => void;
  isDisabled: boolean;
  isChecked: boolean;
  label: string;
  description?: string;
};

type Props = {
  options: VerticalStepperOption[];
};

export const VerticalStepper = ({ options }: Props) => {
  return (
    <div className="px-5 py-14">
      {options.map((option, index) => {
        return (
          <VerticalStepperCell
            key={index}
            onClick={option.onClick}
            label={option.label}
            description={option.description}
            isChecked={option.isChecked}
            isDisabled={option.isDisabled}
          />
        );
      })}
    </div>
  );
};
