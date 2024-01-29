import { Organization } from "../database-types/Organization";
import { Context } from "../context";
import { SportType } from "@prisma/client";

export type CreateOrganizationArgs = {
  name: string;
  sport: SportType;
  address?: string;
};

export type UpdateOrganizationArgs = {
  id: number;
  name?: string;
  sport?: SportType;
  address?: string;
  stripeConnectedAccountId?: string;
  isStripeConnectedAccountOnboardingComplete?: boolean;
};

export type GetOrganizationArgs = {
  id: number;
};

export type GetOrganizationByUserIdArgs = {
  id: number;
};

export interface OrganizationStoreInterface {
  create: (
    context: Context,
    args: CreateOrganizationArgs
  ) => Promise<Organization | null>;
  update: (
    context: Context,
    args: UpdateOrganizationArgs
  ) => Promise<Organization | null>;
  getById: (
    context: Context,
    args: GetOrganizationArgs
  ) => Promise<Organization | null>;
  getByUserId: (
    context: Context,
    args: GetOrganizationByUserIdArgs
  ) => Promise<Organization[] | null>;
}
