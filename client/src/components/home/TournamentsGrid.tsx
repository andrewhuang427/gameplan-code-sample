"use client";

import { useGetTournamentsQuery } from "@/__generated__/graphql";
import { Container, Grid, Title } from "@mantine/core";
import { TournamentCard } from "./TournamentCard";

const TournamentsGrid = () => {
  const { data } = useGetTournamentsQuery();

  return (
    <Container mt={20} size="xl">
      <Title fw={400} order={2}>
        Tournaments
      </Title>
      <Grid mt={20}>
        {data?.getTournaments?.map((t) => {
          return (
            <Grid.Col key={t.id} span={{ base: 12, md: 6, lg: 3 }}>
              <TournamentCard
                id={t.id}
                tournamentName={t.tournamentName}
                tournamentAddress={t.tournamentAddress}
                cost={t.cost}
                ageGroup={t.ageGroup}
                gameMinimum={t.gameMinimum}
                teamMaximum={t.teamMaximum}
                registrationCount={t.registrationCount}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TournamentsGrid;
