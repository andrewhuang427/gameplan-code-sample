import { SportType as SportTypeEnum } from "../enums/enums";
import { Field, Float, InputType } from "type-graphql";

@InputType()
export class CreateTournamentArgs {
  @Field(() => String)
  tournamentName: string;

  @Field(() => String)
  tournamentAddress: string;

  @Field(() => Float)
  cost: number;

  @Field(() => SportTypeEnum)
  sport: SportTypeEnum;

  @Field(() => [Float])
  ageGroups: number[];

  @Field(() => Float)
  teamMaximum: number;

  @Field(() => Float)
  gameMinimum: number;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Number)
  organizationId: number;
}

@InputType()
export class UpdateTournamentArgs {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  tournamentName: string;

  @Field(() => String)
  tournamentAddress: string;

  @Field(() => Float)
  cost: number;

  @Field(() => SportTypeEnum)
  sport: SportTypeEnum;

  @Field(() => Float)
  ageGroup: number;

  @Field(() => Float)
  teamMaximum: number;

  @Field(() => Float)
  gameMinimum: number;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;
}

@InputType()
export class GetTournamentArgs {
  @Field(() => Number)
  id: number;
}

@InputType()
export class GetOrganizationTournamentsArgs {
  @Field(() => Number)
  organizationId: number;
}
