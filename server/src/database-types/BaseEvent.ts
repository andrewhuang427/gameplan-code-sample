import { SportType } from "@prisma/client";

export class BaseEvent {
  id: number;
  cost: number;
  sport: SportType;
  ageGroup: number;
  startDate: Date;
  endDate: Date;
  organizationId: number;
}
