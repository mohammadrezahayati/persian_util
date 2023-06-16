/**
 * Defines the structure of the response object from the IP API.
 * @interface IpApiType
 * @property {string} status - The status of the API request.
 * @property {string} country - The country of the IP address.
 * @property {string} countryCode - The country code of the IP address.
 * @property {string} region - The region of the IP address.
 * @property {string} regionName - The name of the region of the IP address.
 * @property {string} city - The city of the IP address.
 * @property {string} zip - The zip code of the IP address.
 * @property {number} lat - The latitude of the IP address.
 * @property
 */
export interface IpApiType {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
