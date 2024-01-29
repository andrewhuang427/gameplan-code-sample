import { Field, InputType } from "type-graphql";

@InputType()
export class RemovePaymentMethodArgs {
  @Field(() => String)
  paymentMethodId: string;
}

@InputType()
export class GetPaymentIntentsArgs {
  @Field(() => Number)
  teamId: number;
}
