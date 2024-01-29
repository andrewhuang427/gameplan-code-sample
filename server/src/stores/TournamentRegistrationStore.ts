import { Context } from "../context";
import {
  CreateRegistrationArgs,
  GetRegistrationCountArgs,
  GetRegistrationsByTeamIdArgs,
  GetRegistrationsByTournamentIdArgs,
  RegistrationQueryProps,
  TournamentRegistrationStoreInterface,
} from "./TournamentRegistrationStoreInterface";

export class TournamentRegistrationStore
  implements TournamentRegistrationStoreInterface
{
  async create(
    context: Context,
    args: CreateRegistrationArgs,
    options?: RegistrationQueryProps
  ) {
    const primsa = context.prisma;
    return primsa.tournamentRegistration.create({
      data: {
        teamId: args.teamId,
        tournamentId: args.tournamentId,
        stripePaymentIntentId: args.stripePaymentIntentId,
      },
      include: {
        team: options?.includeTeam ?? false,
        tournament: options?.includeTournament ?? false,
      },
    });
  }

  async getRegistrationsByTeamId(
    context: Context,
    args: GetRegistrationsByTeamIdArgs,
    options?: RegistrationQueryProps
  ) {
    const primsa = context.prisma;
    return primsa.tournamentRegistration.findMany({
      where: {
        teamId: args.teamId,
      },
      include: {
        team: options?.includeTeam ?? false,
        tournament: options?.includeTournament ?? false,
      },
    });
  }

  async getRegistrationCountByTournamentId(
    context: Context,
    args: GetRegistrationCountArgs
  ) {
    const primsa = context.prisma;
    return primsa.tournamentRegistration.count({
      where: { tournamentId: args.tournamentId },
    });
  }

  async getRegistrationsByTournamentId(
    context: Context,
    args: GetRegistrationsByTournamentIdArgs,
    options?: RegistrationQueryProps
  ) {
    const primsa = context.prisma;
    return primsa.tournamentRegistration.findMany({
      where: {
        tournamentId: args.tournamentId,
      },
      include: {
        team: options?.includeTeam ?? false,
        tournament: options?.includeTournament ?? false,
      },
    });
  }
}
