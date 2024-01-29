"use client";

import { useGetCampsQuery } from "@/__generated__/graphql";
import { Container, Grid, Title } from "@mantine/core";
import CampCard from "./CampCard";

const CampsGrid = () => {
  const { data } = useGetCampsQuery();

  return (
    <Container mt={20} size="xl">
      <Title fw={400} order={2}>
        Camps
      </Title>
      <Grid mt={20}>
        {data?.getCamps?.map((c) => {
          return (
            <Grid.Col key={c.id} span={{ base: 12, md: 6, lg: 3 }}>
              <CampCard camp={c} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CampsGrid;
