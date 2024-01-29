import { ReactNode } from "react";
import { ProtectedRoute } from "../../guards/ProtectedRoute";
import { UserType } from "../../__generated__/graphql";

function OrganizationLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute userType={UserType.Organization}>{children}</ProtectedRoute>
  );
}

export default OrganizationLayout;
