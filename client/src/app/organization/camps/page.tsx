"use client";

import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import OrganizationDashboardLayout from "../../../components/organization/OrganizationDashboardLayout";
import OrganizationDashboardPageHeader from "../../../components/organization/OrganizationDashboardPageHeader";
import { useRouter } from "next/navigation";
import OrganizationCampsTable from "../../../components/organization/camps/camps-table/OrganizationCampsTable";

function OrganizationCampsPage() {
  const router = useRouter();

  const handleRedirectToCreateCamp = () => {
    router.push("/create/camp");
  };

  return (
    <OrganizationDashboardLayout activeTab="CAMPS">
      <OrganizationDashboardPageHeader
        title="Camps"
        rightComponents={
          <Button
            onClick={handleRedirectToCreateCamp}
            leftSection={<IconPlus size={14} />}
          >
            Create Camp
          </Button>
        }
      />
      <OrganizationCampsTable />
    </OrganizationDashboardLayout>
  );
}

export default OrganizationCampsPage;
