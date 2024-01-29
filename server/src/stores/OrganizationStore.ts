import { Context } from "src/context";
import {
  CreateOrganizationArgs,
  GetOrganizationArgs,
  GetOrganizationByUserIdArgs,
  OrganizationStoreInterface,
  UpdateOrganizationArgs,
} from "./OrganizationInterface";

export class OrganizationStore implements OrganizationStoreInterface {
  async create(context: Context, args: CreateOrganizationArgs) {
    const primsa = context.prisma;
    return await primsa.organization.create({
      data: {
        name: args.name,
        address: args.address,
        sport: args.sport,
        userId: context.userId,
      },
    });
  }

  async update(context: Context, args: UpdateOrganizationArgs) {
    const primsa = context.prisma;
    return await primsa.organization.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        address: args.address,
        sport: args.sport,
        stripeConnectedAccountId: args.stripeConnectedAccountId,
        isStripeConnectedAccountOnboardingComplete:
          args.isStripeConnectedAccountOnboardingComplete,
      },
    });
  }

  async getById(context: Context, args: GetOrganizationArgs) {
    const primsa = context.prisma;
    return await primsa.organization.findUnique({ where: { id: args.id } });
  }

  async getByUserId(context: Context, args: GetOrganizationByUserIdArgs) {
    const primsa = context.prisma;
    return await primsa.organization.findMany({
      where: {
        userId: args.id,
      },
    });
  }
}
