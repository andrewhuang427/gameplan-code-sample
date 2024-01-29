import { UserType } from "@prisma/client";
import { Context } from "../context";
import { Player } from "../database-types/Player";
import { CreatePlayerArgs } from "../stores/PlayerStoreInterface";

export class PlayerService {
  async createPlayer(
    context: Context,
    args: CreatePlayerArgs
  ): Promise<Player> {
    const {
      dataStores: { playerStore, userStore },
      services: { userService },
      userId,
    } = context;

    const user = await userService.validateUser(context);
    const player = await playerStore.create(context, args);
    if (user.type == null) {
      await userStore.update(context, {
        id: userId,
        isOnboarded: true,
        type: UserType.TEAM,
      });
    }
    return player;
  }
}
