/**
 * An interface representing a postal code range.
 * @property {string} province - The province or territory of the postal code range.
 * @property {string} city - The city of the postal code range.
 * @property {string} from - The starting postal code of the range.
 * @property {string} to - The ending postal code of the range.
 */
export interface postalCodeType {
  province: string;
  city: string;
  from: string;
  to: string;
}
