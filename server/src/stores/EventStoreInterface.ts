import { Context } from "../context";
import { BaseEvent } from "../database-types/BaseEvent";

export interface EventStoreCRUD<T extends BaseEvent> {
  create(context: Context, args: T): Promise<T>;
  read(context: Context, id: number): Promise<T | null>;
  update(context: Context, updatedEvent: T): Promise<T | null>;
  getByOrganizationId(context: Context, id: number): Promise<T[]>;
}
