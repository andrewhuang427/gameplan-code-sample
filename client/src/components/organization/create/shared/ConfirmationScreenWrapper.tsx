import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ConfirmationScreenWrapper({ children }: Props) {
  return (
    <div className="border rounded border-neutral-200 bg-white">{children}</div>
  );
}
