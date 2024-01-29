import { Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

type Props = {
  label: string;
  description?: string;
  isChecked: boolean;
  isDisabled: boolean;
  onClick: () => void;
};

export const VerticalStepperCell = ({
  label,
  description,
  isChecked,
  isDisabled,
  onClick,
}: Props) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center rounded p-3 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-100"
      } `}
    >
      <div className="flex items-center w-8 mr-2">
        {isChecked && <IconCircleCheck size={18} width={30} />}
      </div>
      <div className="grow">
        <Text fw={500}>{label}</Text>
        {description != null && (
          <Text size="xs" c="dimmed">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};
