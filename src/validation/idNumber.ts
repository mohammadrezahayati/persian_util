import { idNumberFindType } from './../types/idNumber';
import { idNumbersByCity } from "../constants/idNumber"
import { Fa_To_En } from "../parser";

export const IdNumberFind = (id: string): idNumberFindType | undefined => {
    id = Fa_To_En(id.slice(0, 3))
    const findCity = idNumbersByCity.find(item => item.from === id || item.to === id);
    if (findCity) {
        return { province: findCity.province, city: findCity.city };
    }
    return;
}


export const CheckIdNumber = (id: string): boolean => {
    const regex = /^\d{10}$/g
    return regex.test(Fa_To_En(id));
}