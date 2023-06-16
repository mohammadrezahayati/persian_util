/**
 * Interface representing a MAC address type.
 * @property {string} startHex - The starting hexadecimal value of the MAC address.
 * @property {string} endHex - The ending hexadecimal value of the MAC address.
 * @property {string} startDec - The starting decimal value of the MAC address.
 * @property {string} endDec - The ending decimal value of the MAC address.
 * @property {string} company - The name of the company associated with the MAC address.
 * @property {string} addressL1 - The first line of the address associated with the MAC address.
 * @property {string} addressL2 - The second line of the address associated with the MAC address.
 * @property {string}
 */
export interface MacType {
  startHex: string;
  endHex: string;
  startDec: string;
  endDec: string;
  company: string;
  addressL1: string;
  addressL2: string;
  addressL3: string;
  country: string;
  type: string;
}
