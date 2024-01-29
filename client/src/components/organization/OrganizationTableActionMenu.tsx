import { Menu, MenuDropdown } from "@mantine/core";
import {
  IconArrowRight,
  IconDots,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

type Props = {
  onSeeMoreClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

function OrganizationTableActionMenu({
  onSeeMoreClick,
  onEditClick,
  onDeleteClick,
}: Props) {
  return (
    <Menu shadow="md" position="bottom-end" width={200}>
      <Menu.Target>
        <IconDots size={20} color="var(--mantine-color-dimmed)" />
      </Menu.Target>
      <MenuDropdown>
        <Menu.Label>Actions</Menu.Label>
        {onSeeMoreClick != null && (
          <Menu.Item leftSection={<IconArrowRight size={15} />}>
            See More
          </Menu.Item>
        )}
        {onEditClick != null && (
          <Menu.Item leftSection={<IconEdit size={15} />}>
            Edit Tournament
          </Menu.Item>
        )}
        {onDeleteClick != null && (
          <Menu.Item color="red" leftSection={<IconTrash size={15} />}>
            Delete Tournament
          </Menu.Item>
        )}
      </MenuDropdown>
    </Menu>
  );
}

export default OrganizationTableActionMenu;
