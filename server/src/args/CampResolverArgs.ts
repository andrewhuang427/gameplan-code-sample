import { RecurrencePattern } from "@prisma/client";
import { RecurrencePattern as RecurrencePatternEnum } from "../enums/enums";
import { SportType as SportTypeEnum } from "../enums/enums";
import { Field, Float, InputType } from "type-graphql";

@InputType()
export class CreateCampArgs {
  @Field(() => String)
  campName: string;

  @Field(() => String)
  campAddress: string;

  @Field(() => Float)
  playerMaximum: number;

  @Field(() => RecurrencePatternEnum)
  recurrencePattern: RecurrencePattern;

  @Field(() => String)
  recurrenceDetail: string;

  @Field(() => Float)
  cost: number;

  @Field(() => SportTypeEnum)
  sport: SportTypeEnum;

  @Field(() => Float)
  ageGroup: number;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Number)
  organizationId: number;
}

@InputType()
export class UpdateCampArgs {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  campName: string;

  @Field(() => String)
  campAddress: string;

  @Field(() => Float)
  playerMaximum: number;

  @Field(() => RecurrencePatternEnum)
  recurrencePattern: RecurrencePattern;

  @Field(() => String)
  recurrenceDetail: string;

  @Field(() => Float)
  cost: number;

  @Field(() => SportTypeEnum)
  sport: SportTypeEnum;

  @Field(() => Float)
  ageGroup: number;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;
}

@InputType()
export class GetCampArgs {
  @Field(() => Number)
  id: number;
}

@InputType()
export class GetOrganizationCampsArgs {
  @Field(() => Number)
  organizationId: number;
}
