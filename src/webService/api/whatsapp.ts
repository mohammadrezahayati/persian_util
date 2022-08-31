import axios, { AxiosInstance } from "axios";

export class WhatsappApi {
    WhatsappSendMessage = async (fromPhoneNumber: string, password: string, toPhoneNumber: string, message: string, line?: string[]): Promise<AxiosInstance> => axios.create({
        baseURL: `https://wp.jarin.ir/Api/`,
        method: "POST",
        timeout: 20000,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            phoneNumber: `${fromPhoneNumber}`,
            passWord: `${password}`,
            destPhoneNumbers: `${toPhoneNumber}`,
            text: `${message}`,
            lines: `${line ?? null}`,
        }
    });
    WhatsappStatus = async (phoneNumber: string, password: string, messageId: string): Promise<AxiosInstance> => axios.create({
        baseURL: `https://whatspanel.ir/Api/`,
        method: "POST",
        timeout: 20000,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            phoneNumber: `${phoneNumber}`,     // phonenumber of panel
            passWord: `${password}`,           // password of panel
            messageId: `${messageId}`         // id of message
        },
    });
}