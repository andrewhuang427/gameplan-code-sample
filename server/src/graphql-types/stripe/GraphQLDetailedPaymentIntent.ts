import { Field, ObjectType } from "type-graphql";
import { GraphQLPaymentMethod } from "./GraphQLPaymentMethod";
import { GraphQLCharge } from "./GraphQLCharge";

@ObjectType()
export class GraphQLDetailedPaymentIntent {
  @Field(() => String)
  paymentIntentId: string;

  @Field(() => String)
  eventName: string;

  @Field(() => GraphQLCharge, { nullable: true })
  charge: GraphQLCharge | null;

  @Field(() => GraphQLPaymentMethod, { nullable: true })
  paymentMethod: GraphQLPaymentMethod | null;
}
