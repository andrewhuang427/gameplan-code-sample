import { Field, InputType } from "type-graphql";

@InputType()
export class SignupArgs {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class LoginArgs {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
