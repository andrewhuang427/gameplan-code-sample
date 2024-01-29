"use client";

import { logo } from "../../assets";
import Image from "next/image";
import OrganizationDashboardSidebarLink from "./OrganizationDashboardSidebarLink";
import { useOrganizationContext } from "../../context/OrganizationContext";
import { Avatar, Text } from "@mantine/core";
import { IconTournament } from "@tabler/icons-react";

type Props = {
  activeTab: "HOME" | "TOURNAMENTS" | "CAMPS" | "ORGANIZATION";
};

const OrganizationDashboardSidebar = ({ activeTab }: Props) => {
  const { organization } = useOrganizationContext();

  return (
    <div className="p-2 w-full">
      <Image height={50} src={logo} alt="company logo" />
      <div className="flex items-center gap-4 m-5">
        <Avatar radius="md" color="indigo" variant="light">
          <IconTournament size={20} />
        </Avatar>
        <div className="grow">
          <Text size="xs" c="dimmed">
            Organization
          </Text>
          <Text fw={500}>{organization?.name}</Text>
        </div>
      </div>
      <div className="flex flex-col m-5">
        <OrganizationDashboardSidebarLink
          path="/organization"
          label="Home"
          isActive={activeTab === "HOME"}
        />
        <OrganizationDashboardSidebarLink
          path="/organization/tournaments"
          label="Tournaments"
          isActive={activeTab === "TOURNAMENTS"}
        />
        <OrganizationDashboardSidebarLink
          path="/organization/camps"
          label="Camps"
          isActive={activeTab === "CAMPS"}
        />
        <OrganizationDashboardSidebarLink
          path="/organization/profile"
          label="Organization Profile"
          isActive={activeTab === "ORGANIZATION"}
        />
      </div>
    </div>
  );
};

export default OrganizationDashboardSidebar;
