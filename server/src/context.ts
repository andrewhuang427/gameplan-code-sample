import { PrismaClient } from "@prisma/client";
import { TournamentStore } from "./stores/TournamentStore";
import { TeamStore } from "./stores/TeamStore";
import { UserStore } from "./stores/UserStore";
import { IncomingMessage, ServerResponse } from "http";
import { OrganizationStore } from "./stores/OrganizationStore";
import { TournamentRegistrationStore } from "./stores/TournamentRegistrationStore";
import { StripeService } from "./services/StripeService";
import { TournamentRegistrationService } from "./services/TournamentRegistrationService";
import { UserService } from "./services/UserService";
import { TournamentConverter } from "./converters/TournamentConverter";
import { OrganizationService } from "./services/OrganizationService";
import { OnboardService } from "./services/OnboardService";
import { PaymentsService } from "./services/PaymentService";
import { TeamService } from "./services/TeamService";
import { TournamentService } from "./services/TournamentService";
import { CampStore } from "./stores/CampStore";
import { CampService } from "./services/CampService";
import { PlayerStore } from "./stores/PlayerStore";
import { PlayerService } from "./services/PlayerService";

export interface Context {
  request: IncomingMessage;
  response: ServerResponse;
  authToken: null | undefined | string;
  userId: number;
  prisma: PrismaClient;
  converters: {
    tournamentConverter: TournamentConverter;
  };
  services: {
    campService: CampService;
    onboardService: OnboardService;
    organizationService: OrganizationService;
    paymentService: PaymentsService;
    tournamentRegistrationService: TournamentRegistrationService;
    stripeService: StripeService;
    teamService: TeamService;
    playerService: PlayerService;
    tournamentService: TournamentService;
    userService: UserService;
  };
  dataStores: {
    campStore: CampStore;
    tournamentStore: TournamentStore;
    teamStore: TeamStore;
    playerStore: PlayerStore;
    userStore: UserStore;
    organizationStore: OrganizationStore;
    tournamentRegistrationStore: TournamentRegistrationStore;
  };
}

const prisma = new PrismaClient();

type ContextInput = {
  req: IncomingMessage;
  res: ServerResponse;
};

export const createContextFunction = async ({
  req,
  res,
}: ContextInput): Promise<Context> => ({
  request: req,
  response: res,
  authToken: req.headers.authorization,
  userId: -1,
  prisma: prisma,
  converters: {
    tournamentConverter: new TournamentConverter(),
  },
  services: {
    campService: new CampService(),
    onboardService: new OnboardService(),
    organizationService: new OrganizationService(),
    paymentService: new PaymentsService(),
    tournamentRegistrationService: new TournamentRegistrationService(),
    stripeService: new StripeService(),
    teamService: new TeamService(),
    playerService: new PlayerService(),
    tournamentService: new TournamentService(),
    userService: new UserService(),
  },
  dataStores: {
    campStore: new CampStore(),
    tournamentStore: new TournamentStore(),
    teamStore: new TeamStore(),
    playerStore: new PlayerStore(),
    userStore: new UserStore(),
    organizationStore: new OrganizationStore(),
    tournamentRegistrationStore: new TournamentRegistrationStore(),
  },
});
