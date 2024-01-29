import { Field, ObjectType } from "type-graphql";
import { GraphQLTournament } from "./GraphQLTournament";
import { GraphQLTeam } from "./GraphQLTeam";

@ObjectType()
export class GraphQLTournamentRegistration {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  teamId: number;

  @Field(() => Number)
  tournamentId: number;

  @Field(() => GraphQLTournament, { nullable: true })
  tournament?: GraphQLTournament;

  @Field(() => GraphQLTeam, { nullable: true })
  team?: GraphQLTeam;

  @Field(() => Date)
  createdAt: Date;
}
