"use client";

import {
  Popover,
  Text,
  ActionIcon,
  NavLink,
  Divider,
  Stack,
} from "@mantine/core";
import { IconLogout, IconMenuDeep } from "@tabler/icons-react";
import { useAuth } from "../../context/AuthContext";

const OrganizationDashboardNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-full flex items-center px-6 justify-end h-16">
      <Popover position="bottom-end" shadow="md">
        <Popover.Target>
          <ActionIcon size="lg" variant="light">
            <IconMenuDeep />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown p={10}>
          <Stack gap={10}>
            <div className="p-2">
              <Text size="xs" c="dimmed">
                Signed-in as
              </Text>
              <Text size="sm" fw={500}>
                {user?.email}
              </Text>
            </div>
            <Divider c="dimmed" />
            <NavLink
              leftSection={<IconLogout />}
              label="Logout"
              fw={500}
              onClick={logout}
            />
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default OrganizationDashboardNavbar;
