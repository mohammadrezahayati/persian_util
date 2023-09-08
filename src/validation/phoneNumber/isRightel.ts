/* The `import { Fa_To_En } from '../../parser/number/FaToEn';` statement is importing the `Fa_To_En`
function from the `FaToEn` module located in the `../../parser/number` directory. This function is
then used in the `isRightel` function to parse a Persian number to its English equivalent before
checking if it matches a specific pattern. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/**
 * take number and check it if from Rightel Operator or not
 * @param number
 * @returns boolean
 */
export const isRightel = (number: string): boolean => {
  const numberRegex = /^(\+98|0098|98|0)?(920|921|922|923)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
  return numberRegex.test(parseFaToEn);
};
