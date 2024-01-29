import { Context } from "../context";
import { Player } from "../database-types/Player";

export type CreatePlayerArgs = {
  firstName: string;
  lastName: string;
  ageGroup: number;
  playerContactEmail: string;
  playerContactPhone: string;
};

export type UpdatePlayerArgs = {
  id: number;
  firstName?: string;
  lastName?: string;
  ageGroup?: number;
  playerContactEmail?: string;
  playerContactPhone?: string;
};

export type GetPlayerByIdArgs = {
  id: number;
};

export interface PlayerStoreInterface {
  create: (context: Context, args: CreatePlayerArgs) => Promise<Player | null>;
  update: (context: Context, args: UpdatePlayerArgs) => Promise<Player | null>;
  getById: (
    context: Context,
    args: GetPlayerByIdArgs
  ) => Promise<Player | null>;
}
