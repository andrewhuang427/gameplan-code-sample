import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLPaymentIntent {
  @Field(() => String)
  id: string;

  @Field(() => String)
  clientSecret: string;
}
