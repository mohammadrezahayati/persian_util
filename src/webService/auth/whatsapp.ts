import { AxiosInstance, } from 'axios';
import { WhatsappApi } from '../api/whatsapp';
import { WhatsAppRequest } from "../../types"
export class Whatsapp {
    private WhatsappMessageInstance: Promise<AxiosInstance> | undefined;
    private WhatsappStatusInstance: Promise<AxiosInstance> | undefined;
    sendMessage = async (fromPhoneNumber: string, password: string, toPhoneNumber: string, message: string, line?: string[]) => {
        this.WhatsappMessageInstance = new WhatsappApi().WhatsappSendMessage(fromPhoneNumber, password, toPhoneNumber, message, line);
        const apiCall = (await this.WhatsappMessageInstance).post(`SendMessage.php`);
        const res = (await apiCall).data
        return res;
    }
    statusMessage = async (phoneNumber: string, password: string, messageId: string) => {
        this.WhatsappStatusInstance = new WhatsappApi().WhatsappStatus(phoneNumber, password, messageId);
        const apiCall = (await this.WhatsappStatusInstance).post(`MessageStatus.php`);
        const res = (await apiCall).data
        return res;
    }
}