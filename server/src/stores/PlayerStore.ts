import { Context } from "../context";
import {
  CreatePlayerArgs,
  GetPlayerByIdArgs,
  PlayerStoreInterface,
  UpdatePlayerArgs,
} from "./PlayerStoreInterface";

export class PlayerStore implements PlayerStoreInterface {
  async create(context: Context, args: CreatePlayerArgs) {
    const primsa = context.prisma;
    return primsa.player.create({
      data: {
        firstName: args.firstName,
        lastName: args.lastName,
        ageGroup: args.ageGroup,
        playerContactEmail: args.playerContactEmail,
        playerContactPhone: args.playerContactPhone,
        userId: context.userId,
      },
    });
  }

  async update(context: Context, args: UpdatePlayerArgs) {
    const primsa = context.prisma;
    return primsa.player.update({
      where: {
        id: args.id,
      },
      data: {
        firstName: args.firstName,
        lastName: args.lastName,
        ageGroup: args.ageGroup,
        playerContactEmail: args.playerContactEmail,
        playerContactPhone: args.playerContactPhone,
      },
    });
  }

  async getById(context: Context, args: GetPlayerByIdArgs) {
    const primsa = context.prisma;
    return await primsa.player.findUnique({ where: { id: args.id } });
  }
}
