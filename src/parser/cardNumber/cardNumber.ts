import { Fa_To_En } from "../number";

export const CardNumberParse = (cardNumber: string): string => Fa_To_En(cardNumber).replace(/[\s.-]/g, "");