import { Box, Flex, Text } from "@mantine/core";
import { IconCreditCard } from "@tabler/icons-react";
import { PaymentMethodFragment } from "../../__generated__/graphql";
import { getPaymentMethodIcon } from "../../utils/PaymentMethodUtils";
import Image from "next/image";

type Props = {
  paymentMethod: PaymentMethodFragment;
  shouldShowExpiry?: boolean;
};

const formatCardBrand = (brandString: string) => {
  const words = brandString.split(" ");
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return capitalizedWords.join(" ");
};

export default function PaymentMethodDisplay({
  paymentMethod: { card },
  shouldShowExpiry = true,
}: Props) {
  const paymentMethodIcon = getPaymentMethodIcon(card.brand);

  return (
    <Flex align="center" gap={10}>
      <Box w={60}>
        {paymentMethodIcon != null ? (
          <Image src={paymentMethodIcon} height={35} alt="card logo" />
        ) : (
          <IconCreditCard color="#d8d8d8" size={50} />
        )}
      </Box>
      <div className="grow">
        <Text fw={500} size="sm">{`${formatCardBrand(card.brand)} ending in ${
          card.lastFour
        }`}</Text>
        {shouldShowExpiry && (
          <Text
            size="sm"
            c="dimmed"
          >{`Expiry: ${card.expiryMonth}/${card.expiryYear}`}</Text>
        )}
      </div>
    </Flex>
  );
}
