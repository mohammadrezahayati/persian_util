/* The `import { Fa_To_En } from '../../parser/number/FaToEn';` statement is importing the `Fa_To_En`
function from the `FaToEn` module located in the `../../parser/number` directory. This function is
used to convert Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/**
 * Checks if the given ID number is valid according to the Iranian national ID number format.
 * @param {string} id - the ID number to check
 * @returns {boolean} - true if the ID number is valid, false otherwise
 */
export const CheckIdNumber = (id: string): boolean => {
  const regex = /^\d{10}$/g;
  if (regex.test(Fa_To_En(id))) {
    let nationId = id?.toString();
    const idLength = nationId.length;
    const notAllowedDigits = {
      '0000000000': true,
      '2222222222': true,
      '3333333333': true,
      '4444444444': true,
      '5555555555': true,
      '6666666666': true,
      '7777777777': true,
      '8888888888': true,
      '9999999999': true,
    };
    if (nationId in notAllowedDigits) return false;
    if (idLength < 8 || idLength > 10) return false;
    nationId = ('00' + nationId).substring(idLength + 2 - 10);
    if (+nationId.substring(3, 9) === 0) return false;
    const lastNumber = +nationId.substring(9);
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += +nationId.substring(i, i + 1) * (10 - i);
    }
    sum = sum % 11;
    return (
      (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
    );
  }
  return false;
};
