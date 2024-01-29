import { Modal } from "@mantine/core";
import EditTournamentForm from "./EditTournamentForm";
import { TournamentFragment } from "../../../__generated__/graphql";

type Props = {
  tournament: TournamentFragment;
  opened: boolean;
  close: () => void;
  onComplete: () => void;
};

function EditTournamentModal({ tournament, opened, close, onComplete }: Props) {
  return (
    <Modal
      size="lg"
      title="Edit Tournament"
      opened={opened}
      onClose={close}
      centered
    >
      <EditTournamentForm tournament={tournament} onComplete={onComplete} />
    </Modal>
  );
}

export default EditTournamentModal;
