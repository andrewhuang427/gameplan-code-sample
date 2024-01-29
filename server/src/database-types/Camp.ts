import { RecurrencePattern } from "@prisma/client";
import { BaseEvent } from "./BaseEvent";

export class Camp extends BaseEvent {
  campName: string;
  campAddress: string;
  playerMaximum: number;
  recurrencePattern: RecurrencePattern;
  recurrenceDetail: string;
}
