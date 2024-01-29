"use client";

import { Flex, Stack, Text } from "@mantine/core";
import { SelectableContainerWrapper } from "../shared/SelectableContainerWrapper";
import { OnboardFormWrapper } from "./OnboardFormWrapper";
import { ReactNode } from "react";
import { IconSoccerField, IconUser, IconUsers } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useOnboardContext } from "./OnboardContext";
import { UserType } from "../../__generated__/graphql";

type AccountTypeType = {
  icon: ReactNode;
  type: UserType;
  title: string;
  description?: string;
};

const accountTypes: AccountTypeType[] = [
  {
    icon: <IconUser />,
    type: UserType.Player,
    title: "Player",
    description:
      "Open a player account to manage your athlete and register for camps and events.",
  },
  {
    icon: <IconUsers height="20px" />,
    type: UserType.Team,
    title: "Team",
    description:
      "Open a team account to manage your team and register for tournaments.",
  },
  {
    icon: <IconSoccerField />,
    type: UserType.Organization,
    title: "Organization",
    description:
      "Open an organization account to manage and host tournaments, camps, and events.",
  },
];

export const OnboardSelectAccountType = () => {
  const { userType, setUserType } = useOnboardContext();
  const router = useRouter();

  const handleRedirect = () => {
    if (userType === UserType.Team) {
      router.push("/onboard/team");
    }
    if (userType === UserType.Organization) {
      router.push("/onboard/organization");
    }
    if (userType === UserType.Player) {
      router.push("/onboard/player");
    }
  };

  return (
    <OnboardFormWrapper
      title="Choose your account type"
      isDisabled={userType == null}
      buttonProps={{
        onClick: handleRedirect,
        cta: "Continue",
      }}
    >
      <div className="flex gap-4">
        {accountTypes.map((accountType) => {
          return (
            <SelectableContainerWrapper
              key={accountType.type}
              isSelected={userType === accountType.type}
              onClick={() => {
                setUserType(accountType.type);
              }}
            >
              <Stack>
                <Flex gap={5}>
                  {accountType.icon}
                  <Text fw={500}>{accountType.title}</Text>
                </Flex>
                {accountType.description != null && (
                  <Text size="xs" c="dimmed">
                    {accountType.description}
                  </Text>
                )}
              </Stack>
            </SelectableContainerWrapper>
          );
        })}
      </div>
    </OnboardFormWrapper>
  );
};
