import { SportType } from "../enums/enums";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateOrganizationArgs {
  @Field(() => String)
  name: string;

  @Field(() => SportType)
  sport: SportType;

  @Field(() => String, { nullable: true })
  address?: string;
}

@InputType()
export class OnboardOrganizationToStripeArgs {
  @Field(() => Number)
  id: number;
}

@InputType()
export class GetConnectedAccountArgs {
  @Field(() => Number)
  id: number;
}
