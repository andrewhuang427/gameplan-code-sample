import { Context } from "../context";
import { Tournament } from "../database-types/Tournament";
import { GraphQLTournament } from "../graphql-types/GraphQLTournament";

export class TournamentConverter {
  async convertToGraphQL(
    context: Context,
    tournament: Tournament
  ): Promise<GraphQLTournament> {
    const {
      dataStores: { tournamentRegistrationStore },
    } = context;

    const registrationCount =
      await tournamentRegistrationStore.getRegistrationCountByTournamentId(
        context,
        {
          tournamentId: tournament.id,
        }
      );

    return {
      ...tournament,
      registrationCount,
    };
  }

  async convertMultipleToGraphQL(
    context: Context,
    tournaments: Tournament[]
  ): Promise<GraphQLTournament[]> {
    const {
      dataStores: { tournamentRegistrationStore },
    } = context;

    const tournamentsWithCount = await Promise.all(
      tournaments.map(async (t) => {
        const registrationCount =
          await tournamentRegistrationStore.getRegistrationCountByTournamentId(
            context,
            {
              tournamentId: t.id,
            }
          );

        return { ...t, registrationCount };
      })
    );

    return tournamentsWithCount;
  }
}
