import { Context } from "../context";
import {
  CreateUserArgs,
  GetUserByEmailArgs,
  GetUserByIdArgs,
  UpdateUserArgs,
  UserStoreInterface,
} from "./UserStoreInterface";
import * as bcrypt from "bcrypt";

export class UserStore implements UserStoreInterface {
  async create(context: Context, args: CreateUserArgs) {
    const primsa = context.prisma;
    const hashedPassword = await bcrypt.hash(args.password, 10);
    return await primsa.user.create({
      data: {
        name: args.name,
        email: args.email,
        password: hashedPassword,
        isOnboarded: false,
      },
    });
  }

  async update(context: Context, args: UpdateUserArgs) {
    const primsa = context.prisma;
    return await primsa.user.update({
      where: {
        id: args.id,
      },
      data: {
        email: args.email,
        password:
          args.password != null
            ? await bcrypt.hash(args.password, 10)
            : undefined,
        type: args.type,
        isOnboarded: args.isOnboarded,
        stripeCustomerId: args.stripeCustomerId,
      },
    });
  }

  async getById(context: Context, args: GetUserByIdArgs) {
    const primsa = context.prisma;
    return await primsa.user.findUnique({
      where: {
        id: args.id,
      },
    });
  }

  async getByEmail(context: Context, args: GetUserByEmailArgs) {
    const primsa = context.prisma;
    return await primsa.user.findUnique({
      where: {
        email: args.email,
      },
    });
  }
}
