import { Field, ObjectType } from "type-graphql";

@ObjectType()
class GraphQLCard {
  @Field(() => String)
  brand: string;

  @Field(() => String, { nullable: true })
  country: string | null;

  @Field(() => Number)
  expiryMonth: number;

  @Field(() => Number)
  expiryYear: number;

  @Field(() => String)
  funding: string;

  @Field(() => String)
  lastFour: string;
}

@ObjectType()
export class GraphQLPaymentMethod {
  @Field(() => String)
  id: string;

  @Field(() => GraphQLCard)
  card: GraphQLCard;
}
