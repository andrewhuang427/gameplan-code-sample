import { Field, ObjectType } from "type-graphql";
import { GraphQLSetupIntent } from "./stripe/GraphQLSetupIntent";
import { GraphQLPaymentIntent } from "./stripe/GraphQLPaymentIntent";

@ObjectType()
export class GraphQLRegistrationPaymentSetup {
  @Field(() => GraphQLSetupIntent)
  setupIntent: GraphQLSetupIntent;

  @Field(() => GraphQLPaymentIntent)
  paymentIntent: GraphQLPaymentIntent;
}
