import { useGetPaymentMethodsQuery } from "../../../__generated__/graphql";
import { PaymentAddPaymentMethodFormContainer } from "../../shared/PaymentAddPaymentMethodFormContainer";
import RegisterTournamentPaymentMethods from "./RegisterTournamentPaymentMethods";

function RegisterTournamentPaymentMethodContainer() {
  const { data, loading, refetch } = useGetPaymentMethodsQuery();

  const paymentMethods = data?.getPaymentMethods;

  const refetchPaymentMethods = () => {
    refetch();
  };

  if (loading) {
    return <></>;
  }

  return paymentMethods != null && paymentMethods.length > 0 ? (
    <RegisterTournamentPaymentMethods
      paymentMethods={paymentMethods ?? []}
      refetchPaymentMethods={refetchPaymentMethods}
    />
  ) : (
    <PaymentAddPaymentMethodFormContainer onComplete={refetchPaymentMethods} />
  );
}

export default RegisterTournamentPaymentMethodContainer;
