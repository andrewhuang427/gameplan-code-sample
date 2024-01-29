"use client";

import { useEffect, useState } from "react";
import { PaymentMethodFragment } from "../../../__generated__/graphql";
import { FormWrapper } from "../../shared/FormWrapper";
import { useRegisterTournamentContext } from "./RegisterTournamentContext";
import { Button, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import RegisterTournamentPaymentMethodCard from "./RegisterTournamentPaymentMethodCard";
import { useDisclosure } from "@mantine/hooks";
import AddPaymentMethodModal from "../../shared/AddPaymentMethodModal";

type Props = {
  paymentMethods: PaymentMethodFragment[];
  refetchPaymentMethods: () => void;
};

function RegisterTournamentPaymentMethods({
  paymentMethods,
  refetchPaymentMethods,
}: Props) {
  const [selected, setSelected] = useState<number>(0);
  const { handleAdvanceToNextFormStep, setSelectedPaymentMethod } =
    useRegisterTournamentContext();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const selectedPaymentMethod = paymentMethods[selected];
    if (selectedPaymentMethod != null) {
      setSelectedPaymentMethod(selectedPaymentMethod);
    }
  }, [selected]);

  return (
    <>
      <FormWrapper
        title="Select Payment Method"
        onSubmit={handleAdvanceToNextFormStep}
        cta="Continue"
        secondaryAction={
          <Button onClick={open} leftSection={<IconPlus />} variant="light">
            Add Payment Method
          </Button>
        }
      >
        <Stack>
          {paymentMethods.map((p, index) => {
            return (
              <RegisterTournamentPaymentMethodCard
                key={p.id}
                paymentMethod={p}
                isSelected={selected === index}
                refetchPaymentMethods={refetchPaymentMethods}
                onSelect={() => {
                  setSelected(index);
                }}
              />
            );
          })}
        </Stack>
      </FormWrapper>
      <AddPaymentMethodModal
        opened={opened}
        close={close}
        onComplete={() => {
          refetchPaymentMethods();
          close();
        }}
      />
    </>
  );
}

export default RegisterTournamentPaymentMethods;
