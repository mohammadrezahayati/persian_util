/* The line `import { Fa_To_En } from '../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module located in the `../../parser/number` directory. This function is
used to convert Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/**
 * take number and check it if from MCI Hamrah Aval Operator or not
 * @param number
 * @returns boolean
 */
export const isMCI = (number: string): boolean => {
  const numberRegex =
      /^(\+98|0098|98|0)?(990|991|992|993|994|995|996|910|911|912|913|914|915|916|917|918|919)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
  return numberRegex.test(parseFaToEn);
};
