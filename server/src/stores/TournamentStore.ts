import { TournamentQueryOptions } from "./TournamentStoreInterface";
import { Context } from "../context";
import { Tournament } from "../database-types/Tournament";
import { EventStoreCRUD } from "./EventStoreInterface";

export class TournamentStore implements EventStoreCRUD<Tournament> {
  async create(
    context: Context,
    args: Tournament,
    options?: TournamentQueryOptions
  ): Promise<Tournament> {
    const primsa = context.prisma;
    return await primsa.tournament.create({
      data: {
        tournamentAddress: args.tournamentAddress,
        cost: args.cost,
        tournamentName: args.tournamentName,
        sport: args.sport,
        ageGroup: args.ageGroup,
        teamMaximum: args.teamMaximum,
        gameMinimum: args.gameMinimum,
        startDate: args.startDate,
        endDate: args.endDate,
        organizationId: args.organizationId,
      },
      include: {
        organization: options?.includeOrganization ?? false,
      },
    });
  }

  async update(
    context: Context,
    args: Tournament,
    options?: TournamentQueryOptions
  ) {
    const primsa = context.prisma;
    return await primsa.tournament.update({
      where: { id: args.id },
      data: {
        tournamentAddress: args.tournamentAddress,
        cost: args.cost,
        tournamentName: args.tournamentName,
        sport: args.sport,
        ageGroup: args.ageGroup,
        teamMaximum: args.teamMaximum,
        gameMinimum: args.gameMinimum,
        startDate: args.startDate,
        endDate: args.endDate,
        organizationId: args.organizationId,
      },
      include: {
        organization: options?.includeOrganization ?? false,
      },
    });
  }

  async read(
    context: Context,
    id: number,
    options?: TournamentQueryOptions
  ): Promise<Tournament | null> {
    const primsa = context.prisma;
    return await primsa.tournament.findUnique({
      where: {
        id,
      },
      include: {
        organization: options?.includeOrganization ?? false,
      },
    });
  }

  async getByOrganizationId(
    context: Context,
    organizationId: number,
    options?: TournamentQueryOptions
  ) {
    const primsa = context.prisma;
    return await primsa.tournament.findMany({
      where: {
        organizationId,
      },
      include: {
        organization: options?.includeOrganization ?? false,
      },
    });
  }

  async getMany(context: Context, options?: TournamentQueryOptions) {
    const primsa = context.prisma;
    return await primsa.tournament.findMany({
      include: {
        organization: options?.includeOrganization ?? false,
      },
    });
  }
}
