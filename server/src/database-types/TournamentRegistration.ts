import { Team } from "./Team";
import { Tournament } from "./Tournament";

export class TournamentRegistration {
  id: number;
  stripePaymentIntentId: string;
  createdAt: Date;
  teamId: number;
  tournamentId: number;
  tournament?: Tournament;
  team?: Team;
}
