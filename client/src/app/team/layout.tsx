import { ReactNode } from "react";
import { ProtectedRoute } from "../../guards/ProtectedRoute";
import { UserType } from "../../__generated__/graphql";
import { Navbar } from "../../components/shared/navigation/Navbar";

function TeamPageLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute userType={UserType.Team}>
      <main>
        <Navbar />
        {children}
      </main>
    </ProtectedRoute>
  );
}

export default TeamPageLayout;
