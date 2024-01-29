import { Field, ObjectType } from "type-graphql";
import { GraphQLUser } from "./GraphQLUser";

@ObjectType()
export class GraphQLAuthResponse {
  @Field(() => String, { nullable: true })
  token: string | null;

  @Field(() => GraphQLUser, { nullable: true })
  user: GraphQLUser | null;
}
