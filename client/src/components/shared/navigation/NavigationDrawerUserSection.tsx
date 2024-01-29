import { useAuth } from "@/context/AuthContext";
import { Tooltip, Text, Badge } from "@mantine/core";

export const NavigationDrawerUserSection = () => {
  const { user } = useAuth();

  return (
    <div className="rounded bg-slate-100 p-4">
      <div className="flex justify-between">
        <Text size="xs" c="dimmed">
          Signed-in as:
        </Text>
        {user?.type != null && (
          <Tooltip label="Account Type">
            <Badge variant="light">{user?.type}</Badge>
          </Tooltip>
        )}
      </div>
      <Text fw={500}>{user?.email}</Text>
    </div>
  );
};
