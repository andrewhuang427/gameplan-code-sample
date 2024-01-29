import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  isDisplayedInFlexBox?: boolean;
};

export const SelectableContainerWrapper = ({
  children,
  isSelected,
  onClick,
  isDisplayedInFlexBox = true,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`border p-6 rounded cursor-pointer hover:shadow-md bg-white
      ${isSelected ? "border-indigo-500" : "border-neutral-200"}
      ${isDisplayedInFlexBox ? "basis-96" : "max-w-lg"}`}
    >
      {children}
    </div>
  );
};
