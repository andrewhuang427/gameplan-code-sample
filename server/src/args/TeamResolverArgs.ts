import { SportType } from "../enums/enums";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTeamArgs {
  @Field(() => String)
  teamName: string;

  @Field(() => String)
  teamCity: string;

  @Field(() => String)
  teamState: string;

  @Field(() => SportType)
  sport: SportType;

  @Field(() => String)
  teamPrimaryContactName: string;

  @Field(() => String)
  teamPrimaryContactPhone: string;

  @Field(() => String)
  teamPrimaryContactEmail: string;

  @Field(() => String, { nullable: true })
  teamSecondaryContactName?: string | null;

  @Field(() => String, { nullable: true })
  teamSecondaryContactPhone?: string | null;

  @Field(() => String, { nullable: true })
  teamSecondaryContactEmail?: string | null;
}

@InputType()
export class GetTeamsArgs {
  @Field(() => Number)
  userId: number;
}
