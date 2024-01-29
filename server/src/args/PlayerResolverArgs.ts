import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePlayerArgs {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Number)
  ageGroup: number;

  @Field(() => String)
  playerContactEmail: string;

  @Field(() => String)
  playerContactPhone: string;
}
