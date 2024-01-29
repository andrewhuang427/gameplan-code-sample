import { BaseEvent } from "./BaseEvent";

export class Tournament extends BaseEvent {
  tournamentName: string;
  tournamentAddress: string;
  teamMaximum: number;
  gameMinimum: number;
}
