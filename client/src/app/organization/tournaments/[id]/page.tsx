"use client";

import OrganizationDashboardLayout from "../../../../components/organization/OrganizationDashboardLayout";
import OrganizationIndividualTournamentPageLayout from "../../../../components/organization/tournaments/OrganizationIndividualTournamentPageLayout";
import { useGetTournamentQuery } from "../../../../__generated__/graphql";
import OrganizationDashboardPageHeader from "../../../../components/organization/OrganizationDashboardPageHeader";
import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import EditTournamentModal from "../../../../components/shared/tournament/EditTournamentModal";

function OrganizationTournamentsPage({ params }: { params: { id: string } }) {
  const [opened, { close, open }] = useDisclosure(false);
  const { data, loading } = useGetTournamentQuery({
    variables: {
      args: {
        id: Number(params.id),
      },
    },
  });

  const tournament = data?.getTournament;

  return (
    <>
      <OrganizationDashboardLayout activeTab="TOURNAMENTS">
        <OrganizationDashboardPageHeader
          title={tournament?.tournamentName ?? ""}
          description={tournament?.tournamentAddress}
          isLoading={loading}
          rightComponents={
            <Button
              onClick={open}
              variant="light"
              leftSection={<IconEdit size={20} />}
            >
              Edit Tournament
            </Button>
          }
        />
        <OrganizationIndividualTournamentPageLayout
          tournament={tournament}
          isLoading={loading}
          openEditTournamentForm={open}
        />
      </OrganizationDashboardLayout>
      {tournament != null && (
        <EditTournamentModal
          tournament={tournament}
          opened={opened}
          close={close}
          onComplete={() => {
            close();
          }}
        />
      )}
    </>
  );
}

export default OrganizationTournamentsPage;
