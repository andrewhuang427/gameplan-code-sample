import { ReactNode } from "react";

type Props = {
  stepperComponent: ReactNode;
  formComponent: ReactNode;
};

export default function CreateFormLayout({
  stepperComponent,
  formComponent,
}: Props) {
  return (
    <div className="grow grid grid-cols-3">
      <div
        className="flex justify-end md:col-span-1 border-r border-neutral-200"
        style={{ borderRightStyle: "solid" }}
      >
        {stepperComponent}
      </div>
      <div className="col-span-2 p-14 max-w-3xl">{formComponent}</div>
    </div>
  );
}
