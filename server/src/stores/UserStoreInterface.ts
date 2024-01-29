import { User } from "../database-types/User";
import { Context } from "../context";
import { UserType } from "@prisma/client";

export type CreateUserArgs = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserArgs = {
  id: number;
  email?: string;
  password?: string;
  type?: UserType;
  isOnboarded?: boolean;
  stripeCustomerId?: string;
};

export type GetUserByIdArgs = {
  id: number;
};

export type GetUserByEmailArgs = {
  email: string;
};

export interface UserStoreInterface {
  create: (context: Context, args: CreateUserArgs) => Promise<User | null>;
  update: (context: Context, args: UpdateUserArgs) => Promise<User | null>;
  getById: (context: Context, args: GetUserByIdArgs) => Promise<User | null>;
  getByEmail: (
    context: Context,
    args: GetUserByEmailArgs
  ) => Promise<User | null>;
}
