import { UserType } from "@prisma/client";
import { GetTeamsArgs } from "../args/TeamResolverArgs";
import { Context } from "../context";
import { Team } from "../database-types/Team";
import { CreateTeamArgs } from "../stores/TeamStoreInterface";

export class TeamService {
  async createTeam(context: Context, args: CreateTeamArgs): Promise<Team> {
    const {
      dataStores: { teamStore, userStore },
      services: { userService },
      userId,
    } = context;

    const user = await userService.validateUser(context);
    const team = await teamStore.create(context, args);
    if (user.type == null) {
      await userStore.update(context, {
        id: userId,
        isOnboarded: true,
        type: UserType.TEAM,
      });
    }

    return team;
  }

  async getTeams(context: Context, args: GetTeamsArgs): Promise<Team[]> {
    return await context.dataStores.teamStore.getByUserId(context, args);
  }
}
