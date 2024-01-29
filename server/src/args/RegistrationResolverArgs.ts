import { Field, InputType } from "type-graphql";

@InputType()
export class CreateRegistrationArgs {
  @Field(() => Number)
  teamId: number;

  @Field(() => Number)
  tournamentId: number;

  @Field(() => String)
  paymentIntentId: string;
}

@InputType()
export class GetRegistrationsArgs {
  @Field(() => Number)
  teamId: number;
}

@InputType()
export class CreateRegistrationPaymentIntentArgs {
  @Field(() => Number)
  tournamentId: number;
}

@InputType()
export class SetupRegistrationArgs {
  @Field(() => Number)
  tournamentId: number;
}

@InputType()
export class GetTournamentRegistrationsArgs {
  @Field(() => Number)
  tournamentId: number;
}
