/**
 * Defines the type for an object that contains the ID number range for a city within a province.
 * @typedef {Object} idNumberByCityType
 * @property {string} province - The name of the province that the city is located in.
 * @property {string} city - The name of the city.
 * @property {string} from - The starting ID number for the city.
 * @property {string | undefined} to - The ending ID number for the city, if applicable.
 */
export type idNumberByCityType = {
  province: string;
  city: string;
  from: string;
  to: string | undefined;
};
