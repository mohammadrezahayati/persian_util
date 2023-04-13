import { MacType } from "@Types";
import { MacApi } from "@WebService";
import { AxiosInstance } from "axios";

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