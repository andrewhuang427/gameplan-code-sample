import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GraphQLCharge {
  @Field(() => String)
  id: string;

  @Field(() => Number)
  amount: number;

  @Field(() => Number, { nullable: true })
  applicationFeeAmount: number | null;

  @Field(() => String, { nullable: true })
  receiptUrl: string | null;

  @Field(() => Number)
  created: number;
}
