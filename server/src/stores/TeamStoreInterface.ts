import { Team } from "../database-types/Team";
import { Context } from "../context";
import { SportType } from "@prisma/client";

export type CreateTeamArgs = {
  teamName: string;
  teamCity: string;
  teamState: string;
  sport: SportType;
  teamPrimaryContactName: string;
  teamPrimaryContactPhone: string;
  teamPrimaryContactEmail: string;
  teamSecondaryContactName?: string | null;
  teamSecondaryContactPhone?: string | null;
  teamSecondaryContactEmail?: string | null;
};

export type UpdateTeamArgs = {
  id: number;
  teamName?: string;
  teamCity?: string;
  teamState?: string;
  sport?: SportType;
  teamPrimaryContactName?: string;
  teamPrimaryContactPhone?: string;
  teamPrimaryContactEmail?: string;
  teamSecondaryContactName?: string | null;
  teamSecondaryContactPhone?: string | null;
  teamSecondaryContactEmail?: string | null;
};

export type GetTeamByIdArgs = {
  id: number;
};

export type GetTeamsByUserIdArgs = {
  userId: number;
};

export interface TeamStoreInterface {
  create: (context: Context, args: CreateTeamArgs) => Promise<Team | null>;
  update: (context: Context, args: UpdateTeamArgs) => Promise<Team | null>;
  getById: (context: Context, args: GetTeamByIdArgs) => Promise<Team | null>;
  getByUserId: (
    context: Context,
    args: GetTeamsByUserIdArgs
  ) => Promise<Team[] | null>;
  getMany: (context: Context) => Promise<Team[]>;
}
