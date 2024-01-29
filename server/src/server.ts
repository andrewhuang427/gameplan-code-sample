import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Context, createContextFunction } from "./context";
import { buildSchema } from "type-graphql";
import { TournamentResolver } from "./resolvers/TournamentResolver";
import { TeamResolver } from "./resolvers/TeamResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { OnboardResolver } from "./resolvers/OnboardResolver";
import { OrganizationResolver } from "./resolvers/OrganizationResolver";
import { TournamentRegistrationResolver } from "./resolvers/TournamentRegistrationResolver";
import { PaymentsResolver } from "./resolvers/PaymentsResolver";
import { CampResolver } from "./resolvers/CampResolver";
import { PlayerResolver } from "./resolvers/PlayerResolver";

const main = async () => {
  const server = new ApolloServer<Context>({
    schema: await buildSchema({
      resolvers: [
        TournamentResolver,
        CampResolver,
        TeamResolver,
        PlayerResolver,
        UserResolver,
        OnboardResolver,
        OrganizationResolver,
        TournamentRegistrationResolver,
        PaymentsResolver,
      ],
    }),
  });

  const { url } = await startStandaloneServer(server, {
    context: createContextFunction,
    listen: { port: 4000 },
  });

  console.log(`\
  🚀 Server ready at: ${url}
  `);
};

main();
