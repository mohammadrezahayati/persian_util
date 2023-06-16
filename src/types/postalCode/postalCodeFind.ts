/**
 * Interface representing the result of a postal code lookup.
 * @interface PostalCodeFindType
 * @property {string} province - The province associated with the postal code.
 * @property {string} city - The city associated with the postal code.
 */
export interface PostalCodeFindType {
  province: string;
  city: string;
}
