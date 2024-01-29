import { Organization, UserType } from "@prisma/client";
import { Team } from "../database-types/Team";
import { Context } from "../context";
import { CreateOrganizationArgs } from "../stores/OrganizationInterface";
import { CreateTeamArgs } from "../stores/TeamStoreInterface";
import { Player } from "../database-types/Player";
import { CreatePlayerArgs } from "../stores/PlayerStoreInterface";

export class OnboardService {
  async onboardTeam(context: Context, args: CreateTeamArgs): Promise<Team> {
    const {
      userId,
      dataStores: { userStore, teamStore },
    } = context;

    await userStore.update(context, {
      id: userId,
      isOnboarded: true,
      type: UserType.TEAM,
    });

    return await teamStore.create(context, args);
  }

  async onboardOrganization(
    context: Context,
    args: CreateOrganizationArgs
  ): Promise<Organization> {
    const {
      userId,
      dataStores: { userStore, organizationStore },
    } = context;

    await userStore.update(context, {
      id: userId,
      isOnboarded: true,
      type: UserType.ORGANIZATION,
    });

    return await organizationStore.create(context, args);
  }

  async onboardPlayer(
    context: Context,
    args: CreatePlayerArgs
  ): Promise<Player> {
    const {
      userId,
      dataStores: { userStore, playerStore },
    } = context;

    await userStore.update(context, {
      id: userId,
      isOnboarded: true,
      type: UserType.PLAYER,
    });

    return await playerStore.create(context, args);
  }
}
