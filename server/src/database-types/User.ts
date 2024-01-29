import { UserType } from "@prisma/client";

export class User {
  id: number;
  name: string | null;
  email: string;
  password: string;
  type: UserType | null;
  isOnboarded: boolean;
  stripeCustomerId: string | null;
}
