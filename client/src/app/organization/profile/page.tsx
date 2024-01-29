import OrganizationDashboardLayout from "../../../components/organization/OrganizationDashboardLayout";
import OrganizationDashboardPageHeader from "../../../components/organization/OrganizationDashboardPageHeader";
import OrganizationStripeAccountSection from "../../../components/organization/profile/OrganizationStripeAccountSection";

function OrganizationProfilePage() {
  return (
    <OrganizationDashboardLayout activeTab="ORGANIZATION">
      <OrganizationDashboardPageHeader title="Profile" />
      <OrganizationStripeAccountSection />
    </OrganizationDashboardLayout>
  );
}

export default OrganizationProfilePage;
