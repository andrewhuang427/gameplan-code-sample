import { amex, mastercard, visa } from "../assets";

export const getPaymentMethodIcon = (brand: string) => {
  switch (brand) {
    case "visa":
      return visa;
    case "mastercard":
      return mastercard;
    case "amex":
      return amex;
    default:
      return null;
  }
};
