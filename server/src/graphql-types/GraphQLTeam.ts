import { SportType } from "@prisma/client";
import { SportType as SportTypeEnum } from "../enums/enums";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphQLTeam {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  teamName: string;

  @Field(() => String)
  teamCity: string;

  @Field(() => String)
  teamState: string;

  @Field(() => SportTypeEnum)
  sport: SportType;

  @Field(() => String)
  teamPrimaryContactName: string;

  @Field(() => String)
  teamPrimaryContactPhone: string;

  @Field(() => String)
  teamPrimaryContactEmail: string;

  @Field(() => String, { nullable: true })
  teamSecondaryContactName?: string | null;

  @Field(() => String, { nullable: true })
  teamSecondaryContactPhone?: string | null;

  @Field(() => String, { nullable: true })
  teamSecondaryContactEmail?: string | null;

  @Field(() => Number)
  userId: number;
}
