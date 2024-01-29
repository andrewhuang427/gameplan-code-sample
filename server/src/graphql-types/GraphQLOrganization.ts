import { SportType } from "@prisma/client";
import { SportType as SportTypeEnum } from "../enums/enums";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLOrganization {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => SportTypeEnum)
  sport: SportType;

  @Field(() => Boolean)
  isStripeConnectedAccountOnboardingComplete: boolean;

  @Field(() => String, { nullable: true })
  address: string | null;

  @Field(() => Number)
  userId: number;
}
