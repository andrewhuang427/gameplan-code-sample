import OrganizationDashboardLayout from "../../components/organization/OrganizationDashboardLayout";
import OrganizationDashboardPageHeader from "../../components/organization/OrganizationDashboardPageHeader";

function OrganizationPage() {
  return (
    <OrganizationDashboardLayout activeTab="HOME">
      <OrganizationDashboardPageHeader title="Home" />
    </OrganizationDashboardLayout>
  );
}

export default OrganizationPage;
