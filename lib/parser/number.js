"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.En_To_Fa = exports.Fa_To_En = void 0;
//This Function get a persian @number and change it to english @number and return it.
const Fa_To_En = (number) => {
    if (!number)
        return;
    const res = number.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    return res;
};
exports.Fa_To_En = Fa_To_En;
const En_To_Fa = (number) => {
    if (!number)
        return;
    const res = number.replace(/[0-9]/g, (d) => '0123456789'.indexOf(d).toString());
    return res;
};
exports.En_To_Fa = En_To_Fa;
