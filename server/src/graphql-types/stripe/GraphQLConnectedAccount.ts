import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLConnectedAccount {
  @Field(() => String)
  id: string;

  @Field(() => Boolean)
  isEnabled: boolean;
}
