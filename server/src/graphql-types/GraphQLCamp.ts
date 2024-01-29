import { Field, ObjectType } from "type-graphql";
import { GraphQLEventBase } from "./GraphQLEventBase";
import { RecurrencePattern } from "@prisma/client";
import { RecurrencePattern as RecurrencePatternEnum } from "../enums/enums";

@ObjectType()
export class GraphQLCamp extends GraphQLEventBase {
  @Field(() => String)
  campName: string;

  @Field(() => String)
  campAddress: string;

  @Field(() => Number)
  playerMaximum: number;

  @Field(() => RecurrencePatternEnum)
  recurrencePattern: RecurrencePattern;

  @Field(() => String)
  recurrenceDetail: string;

  @Field(() => Number, { nullable: true })
  registrationCount?: number | null;
}
