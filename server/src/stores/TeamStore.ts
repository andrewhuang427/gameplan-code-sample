import { Context } from "../context";
import {
  CreateTeamArgs,
  GetTeamByIdArgs,
  GetTeamsByUserIdArgs,
  TeamStoreInterface,
  UpdateTeamArgs,
} from "./TeamStoreInterface";

export class TeamStore implements TeamStoreInterface {
  async create(context: Context, args: CreateTeamArgs) {
    const primsa = context.prisma;
    return primsa.team.create({
      data: {
        teamName: args.teamName,
        teamCity: args.teamCity,
        teamState: args.teamState,
        sport: args.sport,
        teamPrimaryContactEmail: args.teamPrimaryContactEmail,
        teamPrimaryContactName: args.teamPrimaryContactName,
        teamPrimaryContactPhone: args.teamPrimaryContactPhone,
        teamSecondaryContactEmail: args.teamSecondaryContactEmail,
        teamSecondaryContactName: args.teamSecondaryContactName,
        teamSecondaryContactPhone: args.teamSecondaryContactPhone,
        userId: context.userId,
      },
    });
  }
  async update(context: Context, args: UpdateTeamArgs) {
    const primsa = context.prisma;
    return await primsa.team.update({
      where: {
        id: args.id,
      },
      data: {
        teamName: args.teamName,
        teamCity: args.teamCity,
        teamState: args.teamState,
        sport: args.sport,
        teamPrimaryContactEmail: args.teamPrimaryContactEmail,
        teamPrimaryContactName: args.teamPrimaryContactName,
        teamPrimaryContactPhone: args.teamPrimaryContactPhone,
        teamSecondaryContactEmail: args.teamSecondaryContactEmail,
        teamSecondaryContactName: args.teamSecondaryContactName,
        teamSecondaryContactPhone: args.teamSecondaryContactPhone,
      },
    });
  }
  async getById(context: Context, args: GetTeamByIdArgs) {
    const primsa = context.prisma;
    return await primsa.team.findUnique({ where: { id: args.id } });
  }

  async getByUserId(context: Context, args: GetTeamsByUserIdArgs) {
    const primsa = context.prisma;
    return await primsa.team.findMany({ where: { userId: args.userId } });
  }

  async getMany(context: Context) {
    const primsa = context.prisma;
    return await primsa.team.findMany();
  }
}
