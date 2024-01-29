import { Field, ObjectType } from "type-graphql";
import { SportType } from "@prisma/client";
import { SportType as SportTypeEnum } from "../enums/enums";

@ObjectType()
export class GraphQLEventBase {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  cost: number;

  @Field(() => SportTypeEnum)
  sport: SportType;

  @Field(() => Number)
  ageGroup: number;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Number)
  organizationId: number;
}
