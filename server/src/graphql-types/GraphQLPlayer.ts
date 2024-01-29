import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLPlayer {
  @Field(() => Number)
  id: number;

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

  @Field(() => Number)
  userId: number;
}
