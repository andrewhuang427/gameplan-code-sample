"use client";

import { logo } from "@/assets";
import { useAuth } from "@/context/AuthContext";
import { ActionIcon, Button, Group, Loader, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenuDeep } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavigationDrawer } from "./NavigationDrawer";
import NavbarSelectTeam from "./NavbarSelectTeam";
import { UserType } from "../../../__generated__/graphql";

type Props = {
  label?: string;
  includeBorderBottom?: boolean;
  shouldHideTeamSelect?: boolean;
};

export const Navbar = ({
  label,
  includeBorderBottom = false,
  shouldHideTeamSelect = false,
}: Props) => {
  const { isLoggedIn, isLoggingIn, user } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.push("/login");
  };

  const handleRedirectToSignup = () => {
    router.push("/signup");
  };

  const leftComponent = (
    <div className="flex items-center gap-4">
      {label == null ? (
        <Image src={logo} height={50} alt="company logo" />
      ) : (
        <div className="py-5">
          <Text>{label}</Text>
        </div>
      )}
      {isLoggedIn && user?.type === UserType.Team && !shouldHideTeamSelect && (
        <NavbarSelectTeam />
      )}
    </div>
  );

  const rightComponent = isLoggedIn ? (
    <ActionIcon variant="dark" size="lg" onClick={open}>
      <IconMenuDeep />
    </ActionIcon>
  ) : (
    <Group>
      <Button onClick={handleRedirectToSignup}>Sign-up</Button>
      <Button onClick={handleRedirectToLogin}>Login</Button>
    </Group>
  );

  return (
    <>
      <div
        className={`w-full flex items-center px-6 justify-between h-16 ${
          includeBorderBottom === true ? "border-b border-neutral-200" : ""
        }`}
      >
        {leftComponent}
        {isLoggingIn ? <Loader size="sm" /> : rightComponent}
      </div>
      <NavigationDrawer opened={opened} close={close} />
    </>
  );
};
