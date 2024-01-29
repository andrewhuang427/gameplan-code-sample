import { ThemeIcon, Text } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  path?: string;
  title: string;
  description?: string;
  icon: ReactNode;
};

export const NavigationDrawerActionItem = ({
  onClick,
  path,
  title,
  description,
  icon,
}: Props) => {
  const component = (
    <div
      className="flex gap-5 align-middle items-center rounded cursor-pointer p-4 hover:bg-slate-100"
      onClick={onClick}
    >
      <ThemeIcon variant="light">{icon}</ThemeIcon>
      <div>
        <Text fw={500}>{title}</Text>
        {description != null && (
          <Text c="dimmed" size="xs">
            {description}
          </Text>
        )}
      </div>
    </div>
  );

  if (path != null) {
    return <Link href={path}>{component}</Link>;
  }

  return component;
};
