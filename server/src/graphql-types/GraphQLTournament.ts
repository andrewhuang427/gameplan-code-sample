import { Field, ObjectType } from "type-graphql";
import { GraphQLEventBase } from "./GraphQLEventBase";

@ObjectType()
export class GraphQLTournament extends GraphQLEventBase {
  @Field(() => String)
  tournamentName: string;

  @Field(() => String)
  tournamentAddress: string;

  @Field(() => Number)
  teamMaximum: number;

  @Field(() => Number)
  gameMinimum: number;

  @Field(() => Number, { nullable: true })
  registrationCount?: number | null;
}
