import { Context } from "../context";
import { User } from "../database-types/User";
import { LoginArgs, SignupArgs } from "../args/UserResolverArgs";
import { JWT_SECRET, JWT_EXPIRATION } from "../constants";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export class UserService {
  async signup(
    context: Context,
    args: SignupArgs
  ): Promise<{ token: string; user: User } | null> {
    const {
      dataStores: { userStore },
    } = context;

    const user = await userStore.create(context, args);
    if (user == null) {
      return null;
    }

    return {
      token: jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      }),
      user,
    };
  }

  async login(
    context: Context,
    args: LoginArgs
  ): Promise<{ token: string; user: User } | null> {
    const {
      dataStores: { userStore },
    } = context;

    const user = await userStore.getByEmail(context, { email: args.email });
    if (user == null) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(args.password, user.password);
    if (isPasswordValid) {
      return {
        token: jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRATION,
        }),
        user,
      };
    }
    return null;
  }

  async me(context: Context): Promise<User | null> {
    const { dataStores, userId } = context;
    return await dataStores.userStore.getById(context, { id: userId });
  }

  async validateUserAsStripeCustomer(
    context: Context
  ): Promise<User & { stripeCustomerId: string }> {
    const user = await this.validateUser(context);
    const stripeCustomerId = user.stripeCustomerId;
    if (stripeCustomerId == null) {
      throw new Error("User not associated with Stripe Customer ID.");
    }

    return { ...user, stripeCustomerId: user.stripeCustomerId ?? "" };
  }

  async validateUser(context: Context): Promise<User> {
    const user = await context.dataStores.userStore.getById(context, {
      id: context.userId,
    });
    if (user == null) {
      throw new Error("User not found.");
    }

    return user;
  }
}
