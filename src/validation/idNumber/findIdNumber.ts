/* The statement `import { idNumbersByCity } from '../../constants/idNumber';` is importing the
`idNumbersByCity` variable from the `idNumber` module in the `constants` directory. This variable is
likely an array or object that contains information about ID numbers and their associated cities. */
import { idNumbersByCity } from '../../constants/idNumber';

/* The statement `import { Fa_To_En } from '../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module in the `parser/number` directory. This function is used to convert
Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/* The `import { idNumberFindType, idNumberByCityType } from '../../types/idNumber';` statement is
importing two types from the `idNumber` module in the `types` directory. These types are used in the
function `IdNumberFind` to define the return type and the type of the `findCity` variable. */
import { idNumberFindType, idNumberByCityType } from '../../types/idNumber';

/**
 * Finds the province and city associated with the given ID number.
 * @param {string} id - The ID number to search for.
 * @returns {idNumberFindType | undefined | boolean} - An object containing the province and city if found, false if not found, or undefined if the input is invalid.
 */
export const IdNumberFind = (
  id: string
): idNumberFindType | undefined | boolean => {
  id = Fa_To_En(id.slice(0, 3));
  const findCity = idNumbersByCity.find(
    (item: idNumberByCityType) => item.from === id || item.to === id
  );
  if (findCity) {
    return { province: findCity.province, city: findCity.city };
  }
  return false;
};
