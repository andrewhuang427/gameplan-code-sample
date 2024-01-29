import { SportType } from "@prisma/client";

export class Team {
  id: number;
  teamName: string;
  teamCity: string;
  teamState: string;
  sport: SportType;
  teamPrimaryContactName: string;
  teamPrimaryContactPhone: string;
  teamPrimaryContactEmail: string;
  teamSecondaryContactName?: string | null;
  teamSecondaryContactPhone?: string | null;
  teamSecondaryContactEmail?: string | null;
  userId: number;
}
