import { Context } from "../context";
import { Tournament } from "../database-types/Tournament";
import { EventStoreCRUD } from "./EventStoreInterface";

export type TournamentQueryOptions = {
  includeOrganization?: boolean;
};

export interface TournamentStoreInterface extends EventStoreCRUD<Tournament> {
  getByOrganizationId: (
    context: Context,
    organizationId: number,
    options?: TournamentQueryOptions
  ) => Promise<Tournament[] | null>;
  getMany: (context: Context) => Promise<Tournament[]>;
}
