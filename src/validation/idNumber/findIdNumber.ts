import { idNumbersByCity } from '../../constants/idNumber';
import { Fa_To_En } from '../../parser/number/FaToEn';
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
