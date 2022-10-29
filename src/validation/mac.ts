import { AxiosInstance } from 'axios';
import { MacType } from '../types/mac';
import MacApi from '../webService/api/Mac';

/**
 * This Class Create Instance of MacApi and has getMacInfo Function
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
    }
} 