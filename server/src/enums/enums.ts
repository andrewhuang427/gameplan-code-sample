import { registerEnumType } from "type-graphql";

export enum SportType {
  BASEBALL = "BASEBALL",
  SOCCER = "SOCCER",
  BASKETBALL = "BASKETBALL",
}

export enum UserType {
  ORGANIZATION = "ORGANIZATION",
  TEAM = "TEAM",
  PLAYER = "PLAYER",
}

export enum RecurrencePattern {
  ONE_TIME = "ONE_TIME",
  WEEKLY = "WEEKLY",
  BI_WEEKLY = "BI_WEEKLY",
  MONTHLY = "MONTHLY",
}

registerEnumType(SportType, { name: "SportType" });
registerEnumType(UserType, { name: "UserType" });
registerEnumType(RecurrencePattern, { name: "RecurrencePattern" });
