"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePersianNumberToEnglish = void 0;
//This Function get a persian @number and change it to english @number and return it.
const ChangePersianNumberToEnglish = (number) => {
    if (!number)
        return;
    const res = number.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    return res;
};
exports.ChangePersianNumberToEnglish = ChangePersianNumberToEnglish;
