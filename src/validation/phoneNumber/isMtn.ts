/* The line `import { Fa_To_En } from '../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module located in the `../../parser/number` directory. This function is
used to convert Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/**
 * take number and check it if from MTN Irancell Operator or not
 * @param number
 * @returns boolean
 */
export const isMTN = (number: string): boolean => {
  const numberRegex =
      /^(\+98|0098|98|0)?(930|933|935|936|937|938|900|901|902|903|904|905|941)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
  return numberRegex.test(parseFaToEn);
};
