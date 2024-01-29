import { Field, ObjectType } from "type-graphql";
import { UserType as UserTypeEnum } from "../enums/enums";
import { UserType } from "@prisma/client";

@ObjectType()
export class GraphQLUser {
  @Field(() => Number)
  id: number;

  @Field(() => String, { nullable: true })
  name: string | null;

  @Field(() => String)
  email: string;

  @Field(() => UserTypeEnum, { nullable: true })
  type: UserType | null;

  @Field(() => Boolean)
  isOnboarded: boolean;
}
