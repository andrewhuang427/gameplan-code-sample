import { ProtectedRoute } from "@/guards/ProtectedRoute";
import { ReactNode } from "react";
import { UserType } from "../../../__generated__/graphql";

export default function CreateTournamentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute userType={UserType.Organization}>
      <main className="flex flex-col w-full h-full">{children}</main>
    </ProtectedRoute>
  );
}
