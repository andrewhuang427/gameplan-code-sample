import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type CreateCampArgs = {
  ageGroup: Scalars['Float']['input'];
  campAddress: Scalars['String']['input'];
  campName: Scalars['String']['input'];
  cost: Scalars['Float']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  organizationId: Scalars['Float']['input'];
  playerMaximum: Scalars['Float']['input'];
  recurrenceDetail: Scalars['String']['input'];
  recurrencePattern: RecurrencePattern;
  sport: SportType;
  startDate: Scalars['DateTimeISO']['input'];
};

export type CreateOrganizationArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sport: SportType;
};

export type CreatePlayerArgs = {
  ageGroup: Scalars['Float']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  playerContactEmail: Scalars['String']['input'];
  playerContactPhone: Scalars['String']['input'];
};

export type CreateRegistrationArgs = {
  paymentIntentId: Scalars['String']['input'];
  teamId: Scalars['Float']['input'];
  tournamentId: Scalars['Float']['input'];
};

export type CreateTeamArgs = {
  sport: SportType;
  teamCity: Scalars['String']['input'];
  teamName: Scalars['String']['input'];
  teamPrimaryContactEmail: Scalars['String']['input'];
  teamPrimaryContactName: Scalars['String']['input'];
  teamPrimaryContactPhone: Scalars['String']['input'];
  teamSecondaryContactEmail?: InputMaybe<Scalars['String']['input']>;
  teamSecondaryContactName?: InputMaybe<Scalars['String']['input']>;
  teamSecondaryContactPhone?: InputMaybe<Scalars['String']['input']>;
  teamState: Scalars['String']['input'];
};

export type CreateTournamentArgs = {
  ageGroups: Array<Scalars['Float']['input']>;
  cost: Scalars['Float']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  gameMinimum: Scalars['Float']['input'];
  organizationId: Scalars['Float']['input'];
  sport: SportType;
  startDate: Scalars['DateTimeISO']['input'];
  teamMaximum: Scalars['Float']['input'];
  tournamentAddress: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};

export type GetCampArgs = {
  id: Scalars['Float']['input'];
};

export type GetConnectedAccountArgs = {
  id: Scalars['Float']['input'];
};

export type GetOrganizationCampsArgs = {
  organizationId: Scalars['Float']['input'];
};

export type GetOrganizationTournamentsArgs = {
  organizationId: Scalars['Float']['input'];
};

export type GetPaymentIntentsArgs = {
  teamId: Scalars['Float']['input'];
};

export type GetRegistrationsArgs = {
  teamId: Scalars['Float']['input'];
};

export type GetTeamsArgs = {
  userId: Scalars['Float']['input'];
};

export type GetTournamentArgs = {
  id: Scalars['Float']['input'];
};

export type GetTournamentRegistrationsArgs = {
  tournamentId: Scalars['Float']['input'];
};

export type GraphQlAuthResponse = {
  __typename?: 'GraphQLAuthResponse';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<GraphQlUser>;
};

export type GraphQlCamp = {
  __typename?: 'GraphQLCamp';
  ageGroup: Scalars['Float']['output'];
  campAddress: Scalars['String']['output'];
  campName: Scalars['String']['output'];
  cost: Scalars['Float']['output'];
  endDate: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  organizationId: Scalars['Float']['output'];
  playerMaximum: Scalars['Float']['output'];
  recurrenceDetail: Scalars['String']['output'];
  recurrencePattern: RecurrencePattern;
  registrationCount?: Maybe<Scalars['Float']['output']>;
  sport: SportType;
  startDate: Scalars['DateTimeISO']['output'];
};

export type GraphQlCard = {
  __typename?: 'GraphQLCard';
  brand: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  expiryMonth: Scalars['Float']['output'];
  expiryYear: Scalars['Float']['output'];
  funding: Scalars['String']['output'];
  lastFour: Scalars['String']['output'];
};

export type GraphQlCharge = {
  __typename?: 'GraphQLCharge';
  amount: Scalars['Float']['output'];
  applicationFeeAmount?: Maybe<Scalars['Float']['output']>;
  created: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  receiptUrl?: Maybe<Scalars['String']['output']>;
};

export type GraphQlConnectedAccount = {
  __typename?: 'GraphQLConnectedAccount';
  id: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
};

export type GraphQlDetailedPaymentIntent = {
  __typename?: 'GraphQLDetailedPaymentIntent';
  charge?: Maybe<GraphQlCharge>;
  eventName: Scalars['String']['output'];
  paymentIntentId: Scalars['String']['output'];
  paymentMethod?: Maybe<GraphQlPaymentMethod>;
};

export type GraphQlOnboardOrganizationToStripeResponse = {
  __typename?: 'GraphQLOnboardOrganizationToStripeResponse';
  url: Scalars['String']['output'];
};

export type GraphQlOrganization = {
  __typename?: 'GraphQLOrganization';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isStripeConnectedAccountOnboardingComplete: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sport: SportType;
  userId: Scalars['Float']['output'];
};

export type GraphQlPaymentIntent = {
  __typename?: 'GraphQLPaymentIntent';
  clientSecret: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type GraphQlPaymentMethod = {
  __typename?: 'GraphQLPaymentMethod';
  card: GraphQlCard;
  id: Scalars['String']['output'];
};

export type GraphQlPlayer = {
  __typename?: 'GraphQLPlayer';
  ageGroup: Scalars['Float']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  playerContactEmail: Scalars['String']['output'];
  playerContactPhone: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
};

export type GraphQlRegistrationPaymentSetup = {
  __typename?: 'GraphQLRegistrationPaymentSetup';
  paymentIntent: GraphQlPaymentIntent;
  setupIntent: GraphQlSetupIntent;
};

export type GraphQlSetupIntent = {
  __typename?: 'GraphQLSetupIntent';
  clientSecret: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type GraphQlTeam = {
  __typename?: 'GraphQLTeam';
  id: Scalars['Float']['output'];
  sport: SportType;
  teamCity: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
  teamPrimaryContactEmail: Scalars['String']['output'];
  teamPrimaryContactName: Scalars['String']['output'];
  teamPrimaryContactPhone: Scalars['String']['output'];
  teamSecondaryContactEmail?: Maybe<Scalars['String']['output']>;
  teamSecondaryContactName?: Maybe<Scalars['String']['output']>;
  teamSecondaryContactPhone?: Maybe<Scalars['String']['output']>;
  teamState: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
};

export type GraphQlTournament = {
  __typename?: 'GraphQLTournament';
  ageGroup: Scalars['Float']['output'];
  cost: Scalars['Float']['output'];
  endDate: Scalars['DateTimeISO']['output'];
  gameMinimum: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  organizationId: Scalars['Float']['output'];
  registrationCount?: Maybe<Scalars['Float']['output']>;
  sport: SportType;
  startDate: Scalars['DateTimeISO']['output'];
  teamMaximum: Scalars['Float']['output'];
  tournamentAddress: Scalars['String']['output'];
  tournamentName: Scalars['String']['output'];
};

export type GraphQlTournamentRegistration = {
  __typename?: 'GraphQLTournamentRegistration';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  team?: Maybe<GraphQlTeam>;
  teamId: Scalars['Float']['output'];
  tournament?: Maybe<GraphQlTournament>;
  tournamentId: Scalars['Float']['output'];
};

export type GraphQlUser = {
  __typename?: 'GraphQLUser';
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isOnboarded: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserType>;
};

export type LoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCamp?: Maybe<GraphQlCamp>;
  createPlayer?: Maybe<GraphQlPlayer>;
  createRegistration?: Maybe<GraphQlTournamentRegistration>;
  createSetupIntent?: Maybe<GraphQlSetupIntent>;
  createTeam?: Maybe<GraphQlTeam>;
  createTournament?: Maybe<Array<GraphQlTournament>>;
  login?: Maybe<GraphQlAuthResponse>;
  onboardOrganization?: Maybe<GraphQlOrganization>;
  onboardOrganizationToStripe?: Maybe<GraphQlOnboardOrganizationToStripeResponse>;
  onboardPlayer?: Maybe<GraphQlPlayer>;
  onboardTeam?: Maybe<GraphQlTeam>;
  removePaymentMethod?: Maybe<GraphQlPaymentMethod>;
  setupRegistration?: Maybe<GraphQlRegistrationPaymentSetup>;
  signup?: Maybe<GraphQlAuthResponse>;
  updateCamp?: Maybe<GraphQlCamp>;
  updateTournament?: Maybe<GraphQlTournament>;
};


export type MutationCreateCampArgs = {
  args: CreateCampArgs;
};


export type MutationCreatePlayerArgs = {
  args: CreatePlayerArgs;
};


export type MutationCreateRegistrationArgs = {
  args: CreateRegistrationArgs;
};


export type MutationCreateTeamArgs = {
  args: CreateTeamArgs;
};


export type MutationCreateTournamentArgs = {
  args: CreateTournamentArgs;
};


export type MutationLoginArgs = {
  args: LoginArgs;
};


export type MutationOnboardOrganizationArgs = {
  args: CreateOrganizationArgs;
};


export type MutationOnboardOrganizationToStripeArgs = {
  args: OnboardOrganizationToStripeArgs;
};


export type MutationOnboardPlayerArgs = {
  args: CreatePlayerArgs;
};


export type MutationOnboardTeamArgs = {
  args: CreateTeamArgs;
};


export type MutationRemovePaymentMethodArgs = {
  args: RemovePaymentMethodArgs;
};


export type MutationSetupRegistrationArgs = {
  args: SetupRegistrationArgs;
};


export type MutationSignupArgs = {
  args: SignupArgs;
};


export type MutationUpdateCampArgs = {
  args: UpdateCampArgs;
};


export type MutationUpdateTournamentArgs = {
  args: UpdateTournamentArgs;
};

export type OnboardOrganizationToStripeArgs = {
  id: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getCamp?: Maybe<GraphQlCamp>;
  getCamps: Array<GraphQlCamp>;
  getConnectedAccount?: Maybe<GraphQlConnectedAccount>;
  getOrganization?: Maybe<GraphQlOrganization>;
  getOrganizationCamps: Array<GraphQlCamp>;
  getOrganizationTournaments?: Maybe<Array<GraphQlTournament>>;
  getPaymentIntents: Array<GraphQlDetailedPaymentIntent>;
  getPaymentMethods: Array<GraphQlPaymentMethod>;
  getRegistrations?: Maybe<Array<GraphQlTournamentRegistration>>;
  getTeams: Array<GraphQlTeam>;
  getTournament?: Maybe<GraphQlTournament>;
  getTournamentRegistrations?: Maybe<Array<GraphQlTournamentRegistration>>;
  getTournaments?: Maybe<Array<GraphQlTournament>>;
  me?: Maybe<GraphQlUser>;
};


export type QueryGetCampArgs = {
  args: GetCampArgs;
};


export type QueryGetConnectedAccountArgs = {
  args: GetConnectedAccountArgs;
};


export type QueryGetOrganizationCampsArgs = {
  args: GetOrganizationCampsArgs;
};


export type QueryGetOrganizationTournamentsArgs = {
  args: GetOrganizationTournamentsArgs;
};


export type QueryGetPaymentIntentsArgs = {
  args: GetPaymentIntentsArgs;
};


export type QueryGetRegistrationsArgs = {
  args: GetRegistrationsArgs;
};


export type QueryGetTeamsArgs = {
  args: GetTeamsArgs;
};


export type QueryGetTournamentArgs = {
  args: GetTournamentArgs;
};


export type QueryGetTournamentRegistrationsArgs = {
  args: GetTournamentRegistrationsArgs;
};

export enum RecurrencePattern {
  BiWeekly = 'BI_WEEKLY',
  Monthly = 'MONTHLY',
  OneTime = 'ONE_TIME',
  Weekly = 'WEEKLY'
}

export type RemovePaymentMethodArgs = {
  paymentMethodId: Scalars['String']['input'];
};

export type SetupRegistrationArgs = {
  tournamentId: Scalars['Float']['input'];
};

export type SignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum SportType {
  Baseball = 'BASEBALL',
  Basketball = 'BASKETBALL',
  Soccer = 'SOCCER'
}

export type UpdateCampArgs = {
  ageGroup: Scalars['Float']['input'];
  campAddress: Scalars['String']['input'];
  campName: Scalars['String']['input'];
  cost: Scalars['Float']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  id: Scalars['Float']['input'];
  playerMaximum: Scalars['Float']['input'];
  recurrenceDetail: Scalars['String']['input'];
  recurrencePattern: RecurrencePattern;
  sport: SportType;
  startDate: Scalars['DateTimeISO']['input'];
};

export type UpdateTournamentArgs = {
  ageGroup: Scalars['Float']['input'];
  cost: Scalars['Float']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  gameMinimum: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
  sport: SportType;
  startDate: Scalars['DateTimeISO']['input'];
  teamMaximum: Scalars['Float']['input'];
  tournamentAddress: Scalars['String']['input'];
  tournamentName: Scalars['String']['input'];
};

export enum UserType {
  Organization = 'ORGANIZATION',
  Player = 'PLAYER',
  Team = 'TEAM'
}

export type CampFragment = { __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null };

export type ChargeFragment = { __typename?: 'GraphQLCharge', id: string, amount: number, applicationFeeAmount?: number | null, receiptUrl?: string | null, created: number };

export type DetailedPaymentIntentFragment = { __typename?: 'GraphQLDetailedPaymentIntent', paymentIntentId: string, eventName: string, charge?: { __typename?: 'GraphQLCharge', id: string, amount: number, applicationFeeAmount?: number | null, receiptUrl?: string | null, created: number } | null, paymentMethod?: { __typename?: 'GraphQLPaymentMethod', id: string, card: { __typename?: 'GraphQLCard', brand: string, country?: string | null, expiryMonth: number, expiryYear: number, funding: string, lastFour: string } } | null };

export type OrganizationFragment = { __typename?: 'GraphQLOrganization', id: number, name: string, sport: SportType, isStripeConnectedAccountOnboardingComplete: boolean };

export type PaymentIntentFragment = { __typename?: 'GraphQLPaymentIntent', id: string, clientSecret: string };

export type PaymentMethodFragment = { __typename?: 'GraphQLPaymentMethod', id: string, card: { __typename?: 'GraphQLCard', brand: string, country?: string | null, expiryMonth: number, expiryYear: number, funding: string, lastFour: string } };

export type PlayerFragment = { __typename?: 'GraphQLPlayer', firstName: string, lastName: string, ageGroup: number, playerContactEmail: string, playerContactPhone: string };

export type SetupIntentFragment = { __typename?: 'GraphQLSetupIntent', id: string, clientSecret: string };

export type TeamFragment = { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string };

export type TournamentFragment = { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null };

export type TournamentRegistrationFragment = { __typename?: 'GraphQLTournamentRegistration', id: number, createdAt: any, teamId: number, tournamentId: number, team?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null, tournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null };

export type UserFragment = { __typename?: 'GraphQLUser', id: number, name?: string | null, email: string, type?: UserType | null, isOnboarded: boolean };

export type CreateCampMutationVariables = Exact<{
  args: CreateCampArgs;
}>;


export type CreateCampMutation = { __typename?: 'Mutation', createCamp?: { __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null } | null };

export type CreatePlayerMutationVariables = Exact<{
  args: CreatePlayerArgs;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer?: { __typename?: 'GraphQLPlayer', firstName: string, lastName: string, ageGroup: number, playerContactEmail: string, playerContactPhone: string } | null };

export type CreateRegistrationMutationVariables = Exact<{
  args: CreateRegistrationArgs;
}>;


export type CreateRegistrationMutation = { __typename?: 'Mutation', createRegistration?: { __typename?: 'GraphQLTournamentRegistration', id: number, createdAt: any, teamId: number, tournamentId: number, team?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null, tournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null } | null };

export type CreateSetupIntentMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateSetupIntentMutation = { __typename?: 'Mutation', createSetupIntent?: { __typename?: 'GraphQLSetupIntent', id: string, clientSecret: string } | null };

export type CreateTeamMutationVariables = Exact<{
  args: CreateTeamArgs;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null };

export type CreateTournamentMutationVariables = Exact<{
  args: CreateTournamentArgs;
}>;


export type CreateTournamentMutation = { __typename?: 'Mutation', createTournament?: Array<{ __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null }> | null };

export type LoginMutationVariables = Exact<{
  args: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'GraphQLAuthResponse', token?: string | null, user?: { __typename?: 'GraphQLUser', id: number, name?: string | null, email: string, type?: UserType | null, isOnboarded: boolean } | null } | null };

export type OnboardOrganizationMutationVariables = Exact<{
  args: CreateOrganizationArgs;
}>;


export type OnboardOrganizationMutation = { __typename?: 'Mutation', onboardOrganization?: { __typename?: 'GraphQLOrganization', id: number, name: string, sport: SportType, isStripeConnectedAccountOnboardingComplete: boolean } | null };

export type OnboardOrganizationToStripeMutationVariables = Exact<{
  args: OnboardOrganizationToStripeArgs;
}>;


export type OnboardOrganizationToStripeMutation = { __typename?: 'Mutation', onboardOrganizationToStripe?: { __typename?: 'GraphQLOnboardOrganizationToStripeResponse', url: string } | null };

export type OnboardPlayerMutationVariables = Exact<{
  args: CreatePlayerArgs;
}>;


export type OnboardPlayerMutation = { __typename?: 'Mutation', onboardPlayer?: { __typename?: 'GraphQLPlayer', firstName: string, lastName: string, ageGroup: number, playerContactEmail: string, playerContactPhone: string } | null };

export type OnboardTeamMutationVariables = Exact<{
  args: CreateTeamArgs;
}>;


export type OnboardTeamMutation = { __typename?: 'Mutation', onboardTeam?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null };

export type RemovePaymentMethodMutationVariables = Exact<{
  args: RemovePaymentMethodArgs;
}>;


export type RemovePaymentMethodMutation = { __typename?: 'Mutation', removePaymentMethod?: { __typename?: 'GraphQLPaymentMethod', id: string, card: { __typename?: 'GraphQLCard', brand: string, country?: string | null, expiryMonth: number, expiryYear: number, funding: string, lastFour: string } } | null };

export type SetupRegistrationMutationVariables = Exact<{
  args: SetupRegistrationArgs;
}>;


export type SetupRegistrationMutation = { __typename?: 'Mutation', setupRegistration?: { __typename?: 'GraphQLRegistrationPaymentSetup', setupIntent: { __typename?: 'GraphQLSetupIntent', id: string, clientSecret: string }, paymentIntent: { __typename?: 'GraphQLPaymentIntent', id: string, clientSecret: string } } | null };

export type SignupMutationVariables = Exact<{
  args: SignupArgs;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'GraphQLAuthResponse', token?: string | null, user?: { __typename?: 'GraphQLUser', id: number, name?: string | null, email: string, type?: UserType | null, isOnboarded: boolean } | null } | null };

export type UpdateCampMutationVariables = Exact<{
  args: UpdateCampArgs;
}>;


export type UpdateCampMutation = { __typename?: 'Mutation', updateCamp?: { __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null } | null };

export type UpdateTournamentMutationVariables = Exact<{
  args: UpdateTournamentArgs;
}>;


export type UpdateTournamentMutation = { __typename?: 'Mutation', updateTournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null };

export type GetCampQueryVariables = Exact<{
  args: GetCampArgs;
}>;


export type GetCampQuery = { __typename?: 'Query', getCamp?: { __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null } | null };

export type GetCampsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCampsQuery = { __typename?: 'Query', getCamps: Array<{ __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null }> };

export type GetConnectedAccountQueryVariables = Exact<{
  args: GetConnectedAccountArgs;
}>;


export type GetConnectedAccountQuery = { __typename?: 'Query', getConnectedAccount?: { __typename?: 'GraphQLConnectedAccount', id: string, isEnabled: boolean } | null };

export type GetOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationQuery = { __typename?: 'Query', getOrganization?: { __typename?: 'GraphQLOrganization', id: number, name: string, sport: SportType, isStripeConnectedAccountOnboardingComplete: boolean } | null };

export type GetOrganizationCampsQueryVariables = Exact<{
  args: GetOrganizationCampsArgs;
}>;


export type GetOrganizationCampsQuery = { __typename?: 'Query', getOrganizationCamps: Array<{ __typename?: 'GraphQLCamp', id: number, campName: string, campAddress: string, cost: number, sport: SportType, ageGroup: number, playerMaximum: number, startDate: any, endDate: any, recurrencePattern: RecurrencePattern, recurrenceDetail: string, registrationCount?: number | null }> };

export type GetOrganizationTournamentsQueryVariables = Exact<{
  args: GetOrganizationTournamentsArgs;
}>;


export type GetOrganizationTournamentsQuery = { __typename?: 'Query', getOrganizationTournaments?: Array<{ __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null }> | null };

export type GetPaymentIntentsQueryVariables = Exact<{
  args: GetPaymentIntentsArgs;
}>;


export type GetPaymentIntentsQuery = { __typename?: 'Query', getPaymentIntents: Array<{ __typename?: 'GraphQLDetailedPaymentIntent', paymentIntentId: string, eventName: string, charge?: { __typename?: 'GraphQLCharge', id: string, amount: number, applicationFeeAmount?: number | null, receiptUrl?: string | null, created: number } | null, paymentMethod?: { __typename?: 'GraphQLPaymentMethod', id: string, card: { __typename?: 'GraphQLCard', brand: string, country?: string | null, expiryMonth: number, expiryYear: number, funding: string, lastFour: string } } | null }> };

export type GetPaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentMethodsQuery = { __typename?: 'Query', getPaymentMethods: Array<{ __typename?: 'GraphQLPaymentMethod', id: string, card: { __typename?: 'GraphQLCard', brand: string, country?: string | null, expiryMonth: number, expiryYear: number, funding: string, lastFour: string } }> };

export type GetRegistrationsQueryVariables = Exact<{
  args: GetRegistrationsArgs;
}>;


export type GetRegistrationsQuery = { __typename?: 'Query', getRegistrations?: Array<{ __typename?: 'GraphQLTournamentRegistration', id: number, createdAt: any, teamId: number, tournamentId: number, team?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null, tournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null }> | null };

export type GetTeamsQueryVariables = Exact<{
  args: GetTeamsArgs;
}>;


export type GetTeamsQuery = { __typename?: 'Query', getTeams: Array<{ __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string }> };

export type GetTournamentQueryVariables = Exact<{
  args: GetTournamentArgs;
}>;


export type GetTournamentQuery = { __typename?: 'Query', getTournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null };

export type GetTournamentRegistrationsQueryVariables = Exact<{
  args: GetTournamentRegistrationsArgs;
}>;


export type GetTournamentRegistrationsQuery = { __typename?: 'Query', getTournamentRegistrations?: Array<{ __typename?: 'GraphQLTournamentRegistration', id: number, createdAt: any, teamId: number, tournamentId: number, team?: { __typename?: 'GraphQLTeam', id: number, teamName: string, teamCity: string, teamState: string, teamPrimaryContactEmail: string, teamPrimaryContactName: string, teamPrimaryContactPhone: string } | null, tournament?: { __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null } | null }> | null };

export type GetTournamentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTournamentsQuery = { __typename?: 'Query', getTournaments?: Array<{ __typename?: 'GraphQLTournament', id: number, tournamentName: string, tournamentAddress: string, cost: number, sport: SportType, ageGroup: number, teamMaximum: number, gameMinimum: number, startDate: any, endDate: any, registrationCount?: number | null }> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'GraphQLUser', id: number, name?: string | null, email: string, type?: UserType | null, isOnboarded: boolean } | null };

export const CampFragmentDoc = gql`
    fragment Camp on GraphQLCamp {
  id
  campName
  campAddress
  cost
  sport
  ageGroup
  playerMaximum
  startDate
  endDate
  recurrencePattern
  recurrenceDetail
  registrationCount
}
    `;
export const ChargeFragmentDoc = gql`
    fragment Charge on GraphQLCharge {
  id
  amount
  applicationFeeAmount
  receiptUrl
  created
}
    `;
export const PaymentMethodFragmentDoc = gql`
    fragment PaymentMethod on GraphQLPaymentMethod {
  id
  card {
    brand
    country
    expiryMonth
    expiryYear
    funding
    lastFour
  }
}
    `;
export const DetailedPaymentIntentFragmentDoc = gql`
    fragment DetailedPaymentIntent on GraphQLDetailedPaymentIntent {
  paymentIntentId
  eventName
  charge {
    ...Charge
  }
  paymentMethod {
    ...PaymentMethod
  }
}
    ${ChargeFragmentDoc}
${PaymentMethodFragmentDoc}`;
export const OrganizationFragmentDoc = gql`
    fragment Organization on GraphQLOrganization {
  id
  name
  sport
  isStripeConnectedAccountOnboardingComplete
}
    `;
export const PaymentIntentFragmentDoc = gql`
    fragment PaymentIntent on GraphQLPaymentIntent {
  id
  clientSecret
}
    `;
export const PlayerFragmentDoc = gql`
    fragment Player on GraphQLPlayer {
  firstName
  lastName
  ageGroup
  playerContactEmail
  playerContactPhone
}
    `;
export const SetupIntentFragmentDoc = gql`
    fragment SetupIntent on GraphQLSetupIntent {
  id
  clientSecret
}
    `;
export const TeamFragmentDoc = gql`
    fragment Team on GraphQLTeam {
  id
  teamName
  teamCity
  teamState
  teamPrimaryContactEmail
  teamPrimaryContactName
  teamPrimaryContactPhone
}
    `;
export const TournamentFragmentDoc = gql`
    fragment Tournament on GraphQLTournament {
  id
  tournamentName
  tournamentAddress
  cost
  sport
  ageGroup
  teamMaximum
  gameMinimum
  startDate
  endDate
  registrationCount
}
    `;
export const TournamentRegistrationFragmentDoc = gql`
    fragment TournamentRegistration on GraphQLTournamentRegistration {
  id
  createdAt
  teamId
  tournamentId
  team {
    ...Team
  }
  tournament {
    ...Tournament
  }
}
    ${TeamFragmentDoc}
${TournamentFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on GraphQLUser {
  id
  name
  email
  type
  isOnboarded
}
    `;
export const CreateCampDocument = gql`
    mutation CreateCamp($args: CreateCampArgs!) {
  createCamp(args: $args) {
    ...Camp
  }
}
    ${CampFragmentDoc}`;
export type CreateCampMutationFn = Apollo.MutationFunction<CreateCampMutation, CreateCampMutationVariables>;

/**
 * __useCreateCampMutation__
 *
 * To run a mutation, you first call `useCreateCampMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCampMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCampMutation, { data, loading, error }] = useCreateCampMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateCampMutation(baseOptions?: Apollo.MutationHookOptions<CreateCampMutation, CreateCampMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCampMutation, CreateCampMutationVariables>(CreateCampDocument, options);
      }
export type CreateCampMutationHookResult = ReturnType<typeof useCreateCampMutation>;
export type CreateCampMutationResult = Apollo.MutationResult<CreateCampMutation>;
export type CreateCampMutationOptions = Apollo.BaseMutationOptions<CreateCampMutation, CreateCampMutationVariables>;
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($args: CreatePlayerArgs!) {
  createPlayer(args: $args) {
    ...Player
  }
}
    ${PlayerFragmentDoc}`;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const CreateRegistrationDocument = gql`
    mutation CreateRegistration($args: CreateRegistrationArgs!) {
  createRegistration(args: $args) {
    ...TournamentRegistration
  }
}
    ${TournamentRegistrationFragmentDoc}`;
export type CreateRegistrationMutationFn = Apollo.MutationFunction<CreateRegistrationMutation, CreateRegistrationMutationVariables>;

/**
 * __useCreateRegistrationMutation__
 *
 * To run a mutation, you first call `useCreateRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegistrationMutation, { data, loading, error }] = useCreateRegistrationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegistrationMutation, CreateRegistrationMutationVariables>(CreateRegistrationDocument, options);
      }
export type CreateRegistrationMutationHookResult = ReturnType<typeof useCreateRegistrationMutation>;
export type CreateRegistrationMutationResult = Apollo.MutationResult<CreateRegistrationMutation>;
export type CreateRegistrationMutationOptions = Apollo.BaseMutationOptions<CreateRegistrationMutation, CreateRegistrationMutationVariables>;
export const CreateSetupIntentDocument = gql`
    mutation CreateSetupIntent {
  createSetupIntent {
    ...SetupIntent
  }
}
    ${SetupIntentFragmentDoc}`;
export type CreateSetupIntentMutationFn = Apollo.MutationFunction<CreateSetupIntentMutation, CreateSetupIntentMutationVariables>;

/**
 * __useCreateSetupIntentMutation__
 *
 * To run a mutation, you first call `useCreateSetupIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetupIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetupIntentMutation, { data, loading, error }] = useCreateSetupIntentMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateSetupIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreateSetupIntentMutation, CreateSetupIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSetupIntentMutation, CreateSetupIntentMutationVariables>(CreateSetupIntentDocument, options);
      }
export type CreateSetupIntentMutationHookResult = ReturnType<typeof useCreateSetupIntentMutation>;
export type CreateSetupIntentMutationResult = Apollo.MutationResult<CreateSetupIntentMutation>;
export type CreateSetupIntentMutationOptions = Apollo.BaseMutationOptions<CreateSetupIntentMutation, CreateSetupIntentMutationVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($args: CreateTeamArgs!) {
  createTeam(args: $args) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateTournamentDocument = gql`
    mutation CreateTournament($args: CreateTournamentArgs!) {
  createTournament(args: $args) {
    ...Tournament
  }
}
    ${TournamentFragmentDoc}`;
export type CreateTournamentMutationFn = Apollo.MutationFunction<CreateTournamentMutation, CreateTournamentMutationVariables>;

/**
 * __useCreateTournamentMutation__
 *
 * To run a mutation, you first call `useCreateTournamentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTournamentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTournamentMutation, { data, loading, error }] = useCreateTournamentMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateTournamentMutation(baseOptions?: Apollo.MutationHookOptions<CreateTournamentMutation, CreateTournamentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTournamentMutation, CreateTournamentMutationVariables>(CreateTournamentDocument, options);
      }
export type CreateTournamentMutationHookResult = ReturnType<typeof useCreateTournamentMutation>;
export type CreateTournamentMutationResult = Apollo.MutationResult<CreateTournamentMutation>;
export type CreateTournamentMutationOptions = Apollo.BaseMutationOptions<CreateTournamentMutation, CreateTournamentMutationVariables>;
export const LoginDocument = gql`
    mutation Login($args: LoginArgs!) {
  login(args: $args) {
    token
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const OnboardOrganizationDocument = gql`
    mutation OnboardOrganization($args: CreateOrganizationArgs!) {
  onboardOrganization(args: $args) {
    ...Organization
  }
}
    ${OrganizationFragmentDoc}`;
export type OnboardOrganizationMutationFn = Apollo.MutationFunction<OnboardOrganizationMutation, OnboardOrganizationMutationVariables>;

/**
 * __useOnboardOrganizationMutation__
 *
 * To run a mutation, you first call `useOnboardOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardOrganizationMutation, { data, loading, error }] = useOnboardOrganizationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useOnboardOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<OnboardOrganizationMutation, OnboardOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardOrganizationMutation, OnboardOrganizationMutationVariables>(OnboardOrganizationDocument, options);
      }
export type OnboardOrganizationMutationHookResult = ReturnType<typeof useOnboardOrganizationMutation>;
export type OnboardOrganizationMutationResult = Apollo.MutationResult<OnboardOrganizationMutation>;
export type OnboardOrganizationMutationOptions = Apollo.BaseMutationOptions<OnboardOrganizationMutation, OnboardOrganizationMutationVariables>;
export const OnboardOrganizationToStripeDocument = gql`
    mutation OnboardOrganizationToStripe($args: OnboardOrganizationToStripeArgs!) {
  onboardOrganizationToStripe(args: $args) {
    url
  }
}
    `;
export type OnboardOrganizationToStripeMutationFn = Apollo.MutationFunction<OnboardOrganizationToStripeMutation, OnboardOrganizationToStripeMutationVariables>;

/**
 * __useOnboardOrganizationToStripeMutation__
 *
 * To run a mutation, you first call `useOnboardOrganizationToStripeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardOrganizationToStripeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardOrganizationToStripeMutation, { data, loading, error }] = useOnboardOrganizationToStripeMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useOnboardOrganizationToStripeMutation(baseOptions?: Apollo.MutationHookOptions<OnboardOrganizationToStripeMutation, OnboardOrganizationToStripeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardOrganizationToStripeMutation, OnboardOrganizationToStripeMutationVariables>(OnboardOrganizationToStripeDocument, options);
      }
export type OnboardOrganizationToStripeMutationHookResult = ReturnType<typeof useOnboardOrganizationToStripeMutation>;
export type OnboardOrganizationToStripeMutationResult = Apollo.MutationResult<OnboardOrganizationToStripeMutation>;
export type OnboardOrganizationToStripeMutationOptions = Apollo.BaseMutationOptions<OnboardOrganizationToStripeMutation, OnboardOrganizationToStripeMutationVariables>;
export const OnboardPlayerDocument = gql`
    mutation OnboardPlayer($args: CreatePlayerArgs!) {
  onboardPlayer(args: $args) {
    ...Player
  }
}
    ${PlayerFragmentDoc}`;
export type OnboardPlayerMutationFn = Apollo.MutationFunction<OnboardPlayerMutation, OnboardPlayerMutationVariables>;

/**
 * __useOnboardPlayerMutation__
 *
 * To run a mutation, you first call `useOnboardPlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardPlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardPlayerMutation, { data, loading, error }] = useOnboardPlayerMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useOnboardPlayerMutation(baseOptions?: Apollo.MutationHookOptions<OnboardPlayerMutation, OnboardPlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardPlayerMutation, OnboardPlayerMutationVariables>(OnboardPlayerDocument, options);
      }
export type OnboardPlayerMutationHookResult = ReturnType<typeof useOnboardPlayerMutation>;
export type OnboardPlayerMutationResult = Apollo.MutationResult<OnboardPlayerMutation>;
export type OnboardPlayerMutationOptions = Apollo.BaseMutationOptions<OnboardPlayerMutation, OnboardPlayerMutationVariables>;
export const OnboardTeamDocument = gql`
    mutation OnboardTeam($args: CreateTeamArgs!) {
  onboardTeam(args: $args) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;
export type OnboardTeamMutationFn = Apollo.MutationFunction<OnboardTeamMutation, OnboardTeamMutationVariables>;

/**
 * __useOnboardTeamMutation__
 *
 * To run a mutation, you first call `useOnboardTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardTeamMutation, { data, loading, error }] = useOnboardTeamMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useOnboardTeamMutation(baseOptions?: Apollo.MutationHookOptions<OnboardTeamMutation, OnboardTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardTeamMutation, OnboardTeamMutationVariables>(OnboardTeamDocument, options);
      }
export type OnboardTeamMutationHookResult = ReturnType<typeof useOnboardTeamMutation>;
export type OnboardTeamMutationResult = Apollo.MutationResult<OnboardTeamMutation>;
export type OnboardTeamMutationOptions = Apollo.BaseMutationOptions<OnboardTeamMutation, OnboardTeamMutationVariables>;
export const RemovePaymentMethodDocument = gql`
    mutation RemovePaymentMethod($args: RemovePaymentMethodArgs!) {
  removePaymentMethod(args: $args) {
    ...PaymentMethod
  }
}
    ${PaymentMethodFragmentDoc}`;
export type RemovePaymentMethodMutationFn = Apollo.MutationFunction<RemovePaymentMethodMutation, RemovePaymentMethodMutationVariables>;

/**
 * __useRemovePaymentMethodMutation__
 *
 * To run a mutation, you first call `useRemovePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePaymentMethodMutation, { data, loading, error }] = useRemovePaymentMethodMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useRemovePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<RemovePaymentMethodMutation, RemovePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePaymentMethodMutation, RemovePaymentMethodMutationVariables>(RemovePaymentMethodDocument, options);
      }
export type RemovePaymentMethodMutationHookResult = ReturnType<typeof useRemovePaymentMethodMutation>;
export type RemovePaymentMethodMutationResult = Apollo.MutationResult<RemovePaymentMethodMutation>;
export type RemovePaymentMethodMutationOptions = Apollo.BaseMutationOptions<RemovePaymentMethodMutation, RemovePaymentMethodMutationVariables>;
export const SetupRegistrationDocument = gql`
    mutation SetupRegistration($args: SetupRegistrationArgs!) {
  setupRegistration(args: $args) {
    setupIntent {
      ...SetupIntent
    }
    paymentIntent {
      ...PaymentIntent
    }
  }
}
    ${SetupIntentFragmentDoc}
${PaymentIntentFragmentDoc}`;
export type SetupRegistrationMutationFn = Apollo.MutationFunction<SetupRegistrationMutation, SetupRegistrationMutationVariables>;

/**
 * __useSetupRegistrationMutation__
 *
 * To run a mutation, you first call `useSetupRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupRegistrationMutation, { data, loading, error }] = useSetupRegistrationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useSetupRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<SetupRegistrationMutation, SetupRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetupRegistrationMutation, SetupRegistrationMutationVariables>(SetupRegistrationDocument, options);
      }
export type SetupRegistrationMutationHookResult = ReturnType<typeof useSetupRegistrationMutation>;
export type SetupRegistrationMutationResult = Apollo.MutationResult<SetupRegistrationMutation>;
export type SetupRegistrationMutationOptions = Apollo.BaseMutationOptions<SetupRegistrationMutation, SetupRegistrationMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($args: SignupArgs!) {
  signup(args: $args) {
    token
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdateCampDocument = gql`
    mutation UpdateCamp($args: UpdateCampArgs!) {
  updateCamp(args: $args) {
    ...Camp
  }
}
    ${CampFragmentDoc}`;
export type UpdateCampMutationFn = Apollo.MutationFunction<UpdateCampMutation, UpdateCampMutationVariables>;

/**
 * __useUpdateCampMutation__
 *
 * To run a mutation, you first call `useUpdateCampMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCampMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCampMutation, { data, loading, error }] = useUpdateCampMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateCampMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCampMutation, UpdateCampMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCampMutation, UpdateCampMutationVariables>(UpdateCampDocument, options);
      }
export type UpdateCampMutationHookResult = ReturnType<typeof useUpdateCampMutation>;
export type UpdateCampMutationResult = Apollo.MutationResult<UpdateCampMutation>;
export type UpdateCampMutationOptions = Apollo.BaseMutationOptions<UpdateCampMutation, UpdateCampMutationVariables>;
export const UpdateTournamentDocument = gql`
    mutation UpdateTournament($args: UpdateTournamentArgs!) {
  updateTournament(args: $args) {
    ...Tournament
  }
}
    ${TournamentFragmentDoc}`;
export type UpdateTournamentMutationFn = Apollo.MutationFunction<UpdateTournamentMutation, UpdateTournamentMutationVariables>;

/**
 * __useUpdateTournamentMutation__
 *
 * To run a mutation, you first call `useUpdateTournamentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTournamentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTournamentMutation, { data, loading, error }] = useUpdateTournamentMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateTournamentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTournamentMutation, UpdateTournamentMutationVariables>(UpdateTournamentDocument, options);
      }
export type UpdateTournamentMutationHookResult = ReturnType<typeof useUpdateTournamentMutation>;
export type UpdateTournamentMutationResult = Apollo.MutationResult<UpdateTournamentMutation>;
export type UpdateTournamentMutationOptions = Apollo.BaseMutationOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>;
export const GetCampDocument = gql`
    query GetCamp($args: GetCampArgs!) {
  getCamp(args: $args) {
    ...Camp
  }
}
    ${CampFragmentDoc}`;

/**
 * __useGetCampQuery__
 *
 * To run a query within a React component, call `useGetCampQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCampQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetCampQuery(baseOptions: Apollo.QueryHookOptions<GetCampQuery, GetCampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCampQuery, GetCampQueryVariables>(GetCampDocument, options);
      }
export function useGetCampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCampQuery, GetCampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCampQuery, GetCampQueryVariables>(GetCampDocument, options);
        }
export function useGetCampSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCampQuery, GetCampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCampQuery, GetCampQueryVariables>(GetCampDocument, options);
        }
export type GetCampQueryHookResult = ReturnType<typeof useGetCampQuery>;
export type GetCampLazyQueryHookResult = ReturnType<typeof useGetCampLazyQuery>;
export type GetCampSuspenseQueryHookResult = ReturnType<typeof useGetCampSuspenseQuery>;
export type GetCampQueryResult = Apollo.QueryResult<GetCampQuery, GetCampQueryVariables>;
export const GetCampsDocument = gql`
    query GetCamps {
  getCamps {
    ...Camp
  }
}
    ${CampFragmentDoc}`;

/**
 * __useGetCampsQuery__
 *
 * To run a query within a React component, call `useGetCampsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCampsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCampsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCampsQuery(baseOptions?: Apollo.QueryHookOptions<GetCampsQuery, GetCampsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCampsQuery, GetCampsQueryVariables>(GetCampsDocument, options);
      }
export function useGetCampsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCampsQuery, GetCampsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCampsQuery, GetCampsQueryVariables>(GetCampsDocument, options);
        }
export function useGetCampsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCampsQuery, GetCampsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCampsQuery, GetCampsQueryVariables>(GetCampsDocument, options);
        }
export type GetCampsQueryHookResult = ReturnType<typeof useGetCampsQuery>;
export type GetCampsLazyQueryHookResult = ReturnType<typeof useGetCampsLazyQuery>;
export type GetCampsSuspenseQueryHookResult = ReturnType<typeof useGetCampsSuspenseQuery>;
export type GetCampsQueryResult = Apollo.QueryResult<GetCampsQuery, GetCampsQueryVariables>;
export const GetConnectedAccountDocument = gql`
    query GetConnectedAccount($args: GetConnectedAccountArgs!) {
  getConnectedAccount(args: $args) {
    id
    isEnabled
  }
}
    `;

/**
 * __useGetConnectedAccountQuery__
 *
 * To run a query within a React component, call `useGetConnectedAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConnectedAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConnectedAccountQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetConnectedAccountQuery(baseOptions: Apollo.QueryHookOptions<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>(GetConnectedAccountDocument, options);
      }
export function useGetConnectedAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>(GetConnectedAccountDocument, options);
        }
export function useGetConnectedAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>(GetConnectedAccountDocument, options);
        }
export type GetConnectedAccountQueryHookResult = ReturnType<typeof useGetConnectedAccountQuery>;
export type GetConnectedAccountLazyQueryHookResult = ReturnType<typeof useGetConnectedAccountLazyQuery>;
export type GetConnectedAccountSuspenseQueryHookResult = ReturnType<typeof useGetConnectedAccountSuspenseQuery>;
export type GetConnectedAccountQueryResult = Apollo.QueryResult<GetConnectedAccountQuery, GetConnectedAccountQueryVariables>;
export const GetOrganizationDocument = gql`
    query GetOrganization {
  getOrganization {
    ...Organization
  }
}
    ${OrganizationFragmentDoc}`;

/**
 * __useGetOrganizationQuery__
 *
 * To run a query within a React component, call `useGetOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
      }
export function useGetOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
        }
export function useGetOrganizationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
        }
export type GetOrganizationQueryHookResult = ReturnType<typeof useGetOrganizationQuery>;
export type GetOrganizationLazyQueryHookResult = ReturnType<typeof useGetOrganizationLazyQuery>;
export type GetOrganizationSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationSuspenseQuery>;
export type GetOrganizationQueryResult = Apollo.QueryResult<GetOrganizationQuery, GetOrganizationQueryVariables>;
export const GetOrganizationCampsDocument = gql`
    query GetOrganizationCamps($args: GetOrganizationCampsArgs!) {
  getOrganizationCamps(args: $args) {
    ...Camp
  }
}
    ${CampFragmentDoc}`;

/**
 * __useGetOrganizationCampsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationCampsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationCampsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationCampsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetOrganizationCampsQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>(GetOrganizationCampsDocument, options);
      }
export function useGetOrganizationCampsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>(GetOrganizationCampsDocument, options);
        }
export function useGetOrganizationCampsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>(GetOrganizationCampsDocument, options);
        }
export type GetOrganizationCampsQueryHookResult = ReturnType<typeof useGetOrganizationCampsQuery>;
export type GetOrganizationCampsLazyQueryHookResult = ReturnType<typeof useGetOrganizationCampsLazyQuery>;
export type GetOrganizationCampsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationCampsSuspenseQuery>;
export type GetOrganizationCampsQueryResult = Apollo.QueryResult<GetOrganizationCampsQuery, GetOrganizationCampsQueryVariables>;
export const GetOrganizationTournamentsDocument = gql`
    query GetOrganizationTournaments($args: GetOrganizationTournamentsArgs!) {
  getOrganizationTournaments(args: $args) {
    ...Tournament
  }
}
    ${TournamentFragmentDoc}`;

/**
 * __useGetOrganizationTournamentsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationTournamentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationTournamentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationTournamentsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetOrganizationTournamentsQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>(GetOrganizationTournamentsDocument, options);
      }
export function useGetOrganizationTournamentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>(GetOrganizationTournamentsDocument, options);
        }
export function useGetOrganizationTournamentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>(GetOrganizationTournamentsDocument, options);
        }
export type GetOrganizationTournamentsQueryHookResult = ReturnType<typeof useGetOrganizationTournamentsQuery>;
export type GetOrganizationTournamentsLazyQueryHookResult = ReturnType<typeof useGetOrganizationTournamentsLazyQuery>;
export type GetOrganizationTournamentsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationTournamentsSuspenseQuery>;
export type GetOrganizationTournamentsQueryResult = Apollo.QueryResult<GetOrganizationTournamentsQuery, GetOrganizationTournamentsQueryVariables>;
export const GetPaymentIntentsDocument = gql`
    query GetPaymentIntents($args: GetPaymentIntentsArgs!) {
  getPaymentIntents(args: $args) {
    ...DetailedPaymentIntent
  }
}
    ${DetailedPaymentIntentFragmentDoc}`;

/**
 * __useGetPaymentIntentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentIntentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentIntentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentIntentsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetPaymentIntentsQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>(GetPaymentIntentsDocument, options);
      }
export function useGetPaymentIntentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>(GetPaymentIntentsDocument, options);
        }
export function useGetPaymentIntentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>(GetPaymentIntentsDocument, options);
        }
export type GetPaymentIntentsQueryHookResult = ReturnType<typeof useGetPaymentIntentsQuery>;
export type GetPaymentIntentsLazyQueryHookResult = ReturnType<typeof useGetPaymentIntentsLazyQuery>;
export type GetPaymentIntentsSuspenseQueryHookResult = ReturnType<typeof useGetPaymentIntentsSuspenseQuery>;
export type GetPaymentIntentsQueryResult = Apollo.QueryResult<GetPaymentIntentsQuery, GetPaymentIntentsQueryVariables>;
export const GetPaymentMethodsDocument = gql`
    query GetPaymentMethods {
  getPaymentMethods {
    ...PaymentMethod
  }
}
    ${PaymentMethodFragmentDoc}`;

/**
 * __useGetPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentMethodsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>(GetPaymentMethodsDocument, options);
      }
export function useGetPaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>(GetPaymentMethodsDocument, options);
        }
export function useGetPaymentMethodsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>(GetPaymentMethodsDocument, options);
        }
export type GetPaymentMethodsQueryHookResult = ReturnType<typeof useGetPaymentMethodsQuery>;
export type GetPaymentMethodsLazyQueryHookResult = ReturnType<typeof useGetPaymentMethodsLazyQuery>;
export type GetPaymentMethodsSuspenseQueryHookResult = ReturnType<typeof useGetPaymentMethodsSuspenseQuery>;
export type GetPaymentMethodsQueryResult = Apollo.QueryResult<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>;
export const GetRegistrationsDocument = gql`
    query GetRegistrations($args: GetRegistrationsArgs!) {
  getRegistrations(args: $args) {
    ...TournamentRegistration
  }
}
    ${TournamentRegistrationFragmentDoc}`;

/**
 * __useGetRegistrationsQuery__
 *
 * To run a query within a React component, call `useGetRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegistrationsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetRegistrationsQuery(baseOptions: Apollo.QueryHookOptions<GetRegistrationsQuery, GetRegistrationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegistrationsQuery, GetRegistrationsQueryVariables>(GetRegistrationsDocument, options);
      }
export function useGetRegistrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegistrationsQuery, GetRegistrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegistrationsQuery, GetRegistrationsQueryVariables>(GetRegistrationsDocument, options);
        }
export function useGetRegistrationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegistrationsQuery, GetRegistrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegistrationsQuery, GetRegistrationsQueryVariables>(GetRegistrationsDocument, options);
        }
export type GetRegistrationsQueryHookResult = ReturnType<typeof useGetRegistrationsQuery>;
export type GetRegistrationsLazyQueryHookResult = ReturnType<typeof useGetRegistrationsLazyQuery>;
export type GetRegistrationsSuspenseQueryHookResult = ReturnType<typeof useGetRegistrationsSuspenseQuery>;
export type GetRegistrationsQueryResult = Apollo.QueryResult<GetRegistrationsQuery, GetRegistrationsQueryVariables>;
export const GetTeamsDocument = gql`
    query GetTeams($args: GetTeamsArgs!) {
  getTeams(args: $args) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export function useGetTeamsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsSuspenseQueryHookResult = ReturnType<typeof useGetTeamsSuspenseQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetTournamentDocument = gql`
    query GetTournament($args: GetTournamentArgs!) {
  getTournament(args: $args) {
    ...Tournament
  }
}
    ${TournamentFragmentDoc}`;

/**
 * __useGetTournamentQuery__
 *
 * To run a query within a React component, call `useGetTournamentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTournamentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTournamentQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetTournamentQuery(baseOptions: Apollo.QueryHookOptions<GetTournamentQuery, GetTournamentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTournamentQuery, GetTournamentQueryVariables>(GetTournamentDocument, options);
      }
export function useGetTournamentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTournamentQuery, GetTournamentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTournamentQuery, GetTournamentQueryVariables>(GetTournamentDocument, options);
        }
export function useGetTournamentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTournamentQuery, GetTournamentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTournamentQuery, GetTournamentQueryVariables>(GetTournamentDocument, options);
        }
export type GetTournamentQueryHookResult = ReturnType<typeof useGetTournamentQuery>;
export type GetTournamentLazyQueryHookResult = ReturnType<typeof useGetTournamentLazyQuery>;
export type GetTournamentSuspenseQueryHookResult = ReturnType<typeof useGetTournamentSuspenseQuery>;
export type GetTournamentQueryResult = Apollo.QueryResult<GetTournamentQuery, GetTournamentQueryVariables>;
export const GetTournamentRegistrationsDocument = gql`
    query GetTournamentRegistrations($args: GetTournamentRegistrationsArgs!) {
  getTournamentRegistrations(args: $args) {
    ...TournamentRegistration
  }
}
    ${TournamentRegistrationFragmentDoc}`;

/**
 * __useGetTournamentRegistrationsQuery__
 *
 * To run a query within a React component, call `useGetTournamentRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTournamentRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTournamentRegistrationsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetTournamentRegistrationsQuery(baseOptions: Apollo.QueryHookOptions<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>(GetTournamentRegistrationsDocument, options);
      }
export function useGetTournamentRegistrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>(GetTournamentRegistrationsDocument, options);
        }
export function useGetTournamentRegistrationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>(GetTournamentRegistrationsDocument, options);
        }
export type GetTournamentRegistrationsQueryHookResult = ReturnType<typeof useGetTournamentRegistrationsQuery>;
export type GetTournamentRegistrationsLazyQueryHookResult = ReturnType<typeof useGetTournamentRegistrationsLazyQuery>;
export type GetTournamentRegistrationsSuspenseQueryHookResult = ReturnType<typeof useGetTournamentRegistrationsSuspenseQuery>;
export type GetTournamentRegistrationsQueryResult = Apollo.QueryResult<GetTournamentRegistrationsQuery, GetTournamentRegistrationsQueryVariables>;
export const GetTournamentsDocument = gql`
    query GetTournaments {
  getTournaments {
    ...Tournament
  }
}
    ${TournamentFragmentDoc}`;

/**
 * __useGetTournamentsQuery__
 *
 * To run a query within a React component, call `useGetTournamentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTournamentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTournamentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTournamentsQuery(baseOptions?: Apollo.QueryHookOptions<GetTournamentsQuery, GetTournamentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTournamentsQuery, GetTournamentsQueryVariables>(GetTournamentsDocument, options);
      }
export function useGetTournamentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTournamentsQuery, GetTournamentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTournamentsQuery, GetTournamentsQueryVariables>(GetTournamentsDocument, options);
        }
export function useGetTournamentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTournamentsQuery, GetTournamentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTournamentsQuery, GetTournamentsQueryVariables>(GetTournamentsDocument, options);
        }
export type GetTournamentsQueryHookResult = ReturnType<typeof useGetTournamentsQuery>;
export type GetTournamentsLazyQueryHookResult = ReturnType<typeof useGetTournamentsLazyQuery>;
export type GetTournamentsSuspenseQueryHookResult = ReturnType<typeof useGetTournamentsSuspenseQuery>;
export type GetTournamentsQueryResult = Apollo.QueryResult<GetTournamentsQuery, GetTournamentsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;