import { Drawer, ActionIcon, CloseIcon } from "@mantine/core";
import {
  IconBox,
  IconChartBar,
  IconCreditCard,
  IconListDetails,
  IconLogout,
  IconPencil,
  IconSquare,
} from "@tabler/icons-react";
import { NavigationDrawerActionItem } from "./NavigationDrawerActionItem";
import { useAuth } from "@/context/AuthContext";
import { NavigationDrawerUserSection } from "./NavigationDrawerUserSection";
import { UserType } from "../../../__generated__/graphql";

const organizationActionItems = [
  {
    path: "/organization",
    title: "Dashboard",
    description: "Navigate to your organization's dashboard.",
    icon: <IconChartBar />,
  },
];

const teamActionItems = [
  {
    path: "/team",
    title: "Home",
    description: "View team's schedule and upcoming events",
    icon: <IconListDetails />,
  },
  {
    path: "/team/payments",
    title: "Payments",
    description: "View saved payment methods and transactions made.",
    icon: <IconCreditCard />,
  },
  {
    path: "/team/profile",
    title: "Profile",
    description: "View and update profile information.",
    icon: <IconBox />,
  },
];

type Props = {
  opened: boolean;
  close: () => void;
};

export const NavigationDrawer = ({ opened, close }: Props) => {
  const { user, logout } = useAuth();

  return (
    <Drawer.Root opened={opened} onClose={close} position="right">
      <Drawer.Overlay />
      <Drawer.Content className="flex">
        <div className="w-full flex flex-col">
          <div className="grow">
            <div className="px-5 pt-5">
              <ActionIcon variant="dark" size="sm" onClick={close}>
                <CloseIcon />
              </ActionIcon>
            </div>
            <div className="px-5 pt-5">
              <NavigationDrawerUserSection />
            </div>
            {user?.isOnboarded === true && user.type != null ? (
              <div className="px-5 pt-5">
                {user.type === UserType.Organization && (
                  <>
                    {organizationActionItems.map((item) => {
                      return (
                        <NavigationDrawerActionItem
                          key={item.title}
                          {...item}
                        />
                      );
                    })}
                  </>
                )}
                {user.type === UserType.Team && (
                  <>
                    {teamActionItems.map((item) => {
                      return (
                        <NavigationDrawerActionItem
                          key={item.title}
                          {...item}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            ) : (
              <div className="px-5 pt-5">
                <NavigationDrawerActionItem
                  title="Complete Onboarding"
                  path="/onboard"
                  icon={<IconPencil />}
                />
              </div>
            )}
          </div>
          <div className="p-5">
            <NavigationDrawerActionItem
              onClick={() => {
                close();
                logout();
              }}
              title="Logout"
              icon={<IconLogout />}
            />
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};
