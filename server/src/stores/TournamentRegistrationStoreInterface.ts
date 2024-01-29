import { Context } from "../context";
import { TournamentRegistration } from "../database-types/TournamentRegistration";

export type CreateRegistrationArgs = {
  tournamentId: number;
  teamId: number;
  stripePaymentIntentId: string;
};

export type GetRegistrationsByTeamIdArgs = {
  teamId: number;
};

export type GetRegistrationCountArgs = {
  tournamentId: number;
};

export type GetRegistrationByTeamAndTournamentIdArgs = {
  teamId: number;
  tournamentId: number;
};

export type GetRegistrationsByTournamentIdArgs = {
  tournamentId: number;
};

export type RegistrationQueryProps = {
  includeTeam: boolean;
  includeTournament: boolean;
};

export interface TournamentRegistrationStoreInterface {
  create: (
    context: Context,
    args: CreateRegistrationArgs,
    options?: RegistrationQueryProps
  ) => Promise<TournamentRegistration | null>;
  getRegistrationsByTeamId: (
    context: Context,
    args: GetRegistrationsByTeamIdArgs,
    options?: RegistrationQueryProps
  ) => Promise<TournamentRegistration[]>;
  getRegistrationCountByTournamentId: (
    context: Context,
    args: GetRegistrationCountArgs,
    options?: RegistrationQueryProps
  ) => Promise<number>;
  getRegistrationsByTournamentId: (
    context: Context,
    args: GetRegistrationsByTournamentIdArgs,
    options?: RegistrationQueryProps
  ) => Promise<TournamentRegistration[]>;
}
