import { ReactNode } from "react";
import OrganizationDashboardSidebar from "./OrganizationDashboardSidebar";
import OrganizationDashboardNavbar from "./OrganizationDashboardNavbar";
import { Container } from "@mantine/core";

type Props = {
  activeTab: "HOME" | "TOURNAMENTS" | "CAMPS" | "ORGANIZATION";
  children: ReactNode;
};

const OrganizationDashboardLayout = ({ children, activeTab }: Props) => {
  return (
    <main className="flex flex-col w-full h-full">
      <div className="grow grid grid-cols-5">
        <div className="flex md:col-span-1 bg-slate-100 ">
          <OrganizationDashboardSidebar activeTab={activeTab} />
        </div>
        <div className="col-span-4">
          <OrganizationDashboardNavbar />
          <div className="mt-10">
            <Container size="xl">{children}</Container>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrganizationDashboardLayout;
