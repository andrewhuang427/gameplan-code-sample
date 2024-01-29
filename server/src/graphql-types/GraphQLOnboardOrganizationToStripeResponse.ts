import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLOnboardOrganizationToStripeResponse {
  @Field(() => String)
  url: string;
}
