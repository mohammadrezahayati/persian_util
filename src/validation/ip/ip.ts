import { AxiosInstance } from 'axios';
import { IpApiType } from '../../types/ip/ipApi';
import { IpApi } from '../../webService/api/ip/Ip';

/**
 * Represents an IP address and provides methods to retrieve information about it.
 */
export class IP {
  /**
   * A Promise that resolves to an Axios instance for making HTTP requests.
   * The Axios instance can be used to make HTTP requests to a server.
   */
  private IpInstance: Promise<AxiosInstance>;
  /**
   * Creates an instance of the class with an optional IP address.
   * @param {string} [ip] - The IP address to use for the instance.
   * @returns An instance of the class.
   */
  constructor(private ip?: string) {
    this.IpInstance = new IpApi().IpCreate();
  }
  /**
   * Retrieves information about an IP address using the IpApi service.
   * @param {string} ip - The IP address to retrieve information about.
   * @returns {Promise<IpApiType>} - A promise that resolves to an object containing information about the IP address.
   */
  getIpInfo = async (ip: string): Promise<IpApiType> => {
    const apiCall = (await this.IpInstance).get<IpApiType>(`${ip || this.ip}`);
    const res = (await apiCall).data;
    return res;
  };
  /**
   * Determines if the given IP address is from Iran by calling an external API to retrieve
   * information about the IP address.
   * @param {string} ip - The IP address to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the IP address is from Iran, false otherwise.
   */
  IsIpFromIran = async (ip: string): Promise<boolean> => {
    const resApi = await this.getIpInfo(ip);
    if (resApi && resApi.country === 'Iran') return true;
    return false;
  };
}
