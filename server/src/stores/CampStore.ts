import { Context } from "../context";
import { Camp } from "../database-types/Camp";
import { EventStoreCRUD } from "./EventStoreInterface";

export class CampStore implements EventStoreCRUD<Camp> {
  async create({ prisma }: Context, args: Camp): Promise<Camp> {
    return await prisma.camp.create({
      data: {
        campAddress: args.campAddress,
        campName: args.campName,
        cost: args.cost,
        sport: args.sport,
        ageGroup: args.ageGroup,
        playerMaximum: args.playerMaximum,
        recurrencePattern: args.recurrencePattern,
        recurrenceDetail: args.recurrenceDetail,
        startDate: args.startDate,
        endDate: args.endDate,
        organizationId: args.organizationId,
      },
    });
  }
  async read({ prisma }: Context, id: number): Promise<Camp | null> {
    return await prisma.camp.findUnique({
      where: {
        id,
      },
    });
  }

  async update({ prisma }: Context, args: Camp): Promise<Camp | null> {
    return await prisma.camp.update({
      where: { id: args.id },
      data: {
        campAddress: args.campAddress,
        campName: args.campName,
        cost: args.cost,
        sport: args.sport,
        ageGroup: args.ageGroup,
        playerMaximum: args.playerMaximum,
        recurrencePattern: args.recurrencePattern,
        recurrenceDetail: args.recurrenceDetail,
        startDate: args.startDate,
        endDate: args.endDate,
        organizationId: args.organizationId,
      },
    });
  }
  async getByOrganizationId(
    { prisma }: Context,
    organizationId: number
  ): Promise<Camp[]> {
    return await prisma.camp.findMany({
      where: {
        organizationId,
      },
    });
  }

  async getMany({ prisma }: Context): Promise<Camp[]> {
    return await prisma.camp.findMany();
  }
}
