import { AxiosInstance } from 'axios';
import { MacType } from '../../types/mac/macApi';
import { MacApi } from '../../webService/api/mac/Mac';

/**
 * A class representing a MAC address and providing methods to retrieve information about it.
 */
export class MAC {
  private MacInstance: Promise<AxiosInstance>;
  constructor(private mac?: string) {
    this.MacInstance = new MacApi().MacCreate();
  }
  getMacInfo = async (mac: string): Promise<MacType> => {
    const apiCall = (await this.MacInstance).get<MacType>(`${mac || this.mac}`);
    const res = (await apiCall).data;
    return res;
  };
}
