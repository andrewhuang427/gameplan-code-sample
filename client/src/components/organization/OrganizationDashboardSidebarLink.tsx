import { Text } from "@mantine/core";
import Link from "next/link";

type Props = {
  label: string;
  isActive?: boolean;
  path: string;
};

export default function OrganizationDashboardSidebarLink({
  label,
  isActive = false,
  path,
}: Props) {
  return (
    <Link href={path}>
      <div className="flex align-middle items-center">
        <div
          className={`h-4 mr-2 ${
            isActive ? "border-r-2 border-indigo-500" : ""
          }`}
        />
        <div
          className={`flex items-center grow rounded hover:bg-slate-200 cursor-pointer p-2`}
        >
          <Text size="sm" c={isActive ? "indigo" : undefined} fw={500}>
            {label}
          </Text>
        </div>
      </div>
    </Link>
  );
}
