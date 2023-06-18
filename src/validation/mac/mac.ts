import { AxiosInstance } from 'axios';
import { MacType } from '../../types/mac/macApi';
import { MacApi } from '../../webService/api/mac/Mac';

/**
 * A class representing a MAC address and providing methods to retrieve information about it.
 */
export class MAC {
  /**
   * A Promise that resolves to an AxiosInstance for making HTTP requests on a Mac.
   * @returns A Promise that resolves to an AxiosInstance.
   */
  private MacInstance: Promise<AxiosInstance>;
  /**
   * Creates a new instance of the class, with an optional Mac address.
   * @param {string} [mac] - The Mac address to use for the instance.
   * @returns An instance of the class.
   */
  constructor(private mac?: string) {
    this.MacInstance = new MacApi().MacCreate();
  }
  /**
   * Retrieves information about a given MAC address using an external API.
   * @param {string} mac - The MAC address to retrieve information for.
   * @returns {Promise<MacType>} - A promise that resolves to an object containing information about the MAC address.
   */
  getMacInfo = async (mac: string): Promise<MacType> => {
    const apiCall = (await this.MacInstance).get<MacType>(`${mac || this.mac}`);
    const res = (await apiCall).data;
    return res;
  };
}
