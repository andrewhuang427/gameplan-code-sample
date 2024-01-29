"use client";

import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import OrganizationDashboardLayout from "../../../components/organization/OrganizationDashboardLayout";
import OrganizationDashboardPageHeader from "../../../components/organization/OrganizationDashboardPageHeader";
import OrganizationTournamentsTable from "../../../components/organization/tournaments/tournaments-table/OrganizationTournamentsTable";
import { useRouter } from "next/navigation";

function OrganizationTournamentsPage() {
  const router = useRouter();

  const handleRedirectToCreateTournaments = () => {
    router.push("/create/tournament");
  };

  return (
    <OrganizationDashboardLayout activeTab="TOURNAMENTS">
      <OrganizationDashboardPageHeader
        title="Tournaments"
        rightComponents={
          <Button
            onClick={handleRedirectToCreateTournaments}
            leftSection={<IconPlus size={14} />}
          >
            Create Tournament
          </Button>
        }
      />
      <OrganizationTournamentsTable />
    </OrganizationDashboardLayout>
  );
}

export default OrganizationTournamentsPage;
