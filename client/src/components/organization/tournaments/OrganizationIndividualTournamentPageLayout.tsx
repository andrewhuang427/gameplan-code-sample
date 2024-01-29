"use client";

import { Grid, Stack } from "@mantine/core";
import React from "react";
import OrganizationIndividualTournamentRegistrationCount from "./OrganizationIndividualTournamentRegistrationCount";
import OrganizationIndividualTournamentRegistrationTable from "./OrganizationIndividualTournamentRegistrationTable";
import OrganizationIndividualTournamentDetails from "./OrganizationIndividualTournamentDetails";
import {
  TournamentFragment,
  useGetTournamentRegistrationsQuery,
} from "../../../__generated__/graphql";
type Props = {
  tournament: TournamentFragment | null | undefined;
  isLoading: boolean;
  openEditTournamentForm: () => void;
};
function OrganizationIndividualTournamentPageLayout({
  tournament,
  openEditTournamentForm,
  isLoading: isTeamDataLoading,
}: Props) {
  const { data, loading: isRegistrationDataLoading } =
    useGetTournamentRegistrationsQuery({
      variables: {
        args: {
          tournamentId: tournament?.id ?? -1,
        },
      },
    });

  const registrations = data?.getTournamentRegistrations ?? [];

  return (
    <Grid>
      <Grid.Col span={{ md: 12, lg: 8 }}>
        <OrganizationIndividualTournamentRegistrationTable
          registrations={registrations}
          isLoading={isRegistrationDataLoading}
        />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 4 }}>
        <Stack>
          <OrganizationIndividualTournamentRegistrationCount
            registrations={registrations}
            tournament={tournament}
            isLoading={isRegistrationDataLoading}
          />
          <OrganizationIndividualTournamentDetails
            tournament={tournament}
            openEditTournamentForm={openEditTournamentForm}
            isLoading={isTeamDataLoading}
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default OrganizationIndividualTournamentPageLayout;
