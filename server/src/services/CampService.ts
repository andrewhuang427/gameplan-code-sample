import { CreateCampArgs, UpdateCampArgs } from "../args/CampResolverArgs";
import { Context } from "../context";
import { Camp } from "../database-types/Camp";

export class CampService {
  async createCamp(context: Context, args: CreateCampArgs): Promise<Camp> {
    return await context.dataStores.campStore.create(context, {
      ...args,
      id: -1, // not being used
    });
  }

  async updateCamp(
    context: Context,
    args: UpdateCampArgs
  ): Promise<Camp | null> {
    return await context.dataStores.campStore.update(context, {
      ...args,
      organizationId: -1,
    });
  }

  async getCamp(context: Context, id: number): Promise<Camp | null> {
    return await context.dataStores.campStore.read(context, id);
  }

  async getOrganizationCamps(
    context: Context,
    organizationId: number
  ): Promise<Camp[]> {
    return await context.dataStores.campStore.getByOrganizationId(
      context,
      organizationId
    );
  }

  async getCamps(context: Context): Promise<Camp[]> {
    return await context.dataStores.campStore.getMany(context);
  }
}
