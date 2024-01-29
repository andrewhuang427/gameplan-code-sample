import { SportType } from "@prisma/client";

export class Organization {
  id: number;
  name: string;
  sport: SportType;
  address: string | null;
  userId: number;
  stripeConnectedAccountId: string | null;
  isStripeConnectedAccountOnboardingComplete: boolean;
}
