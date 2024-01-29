import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLSetupIntent {
  @Field(() => String)
  id: string;

  @Field(() => String)
  clientSecret: string;
}
