"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPersianPhone = void 0;
//This function get a persian @number and check it if valid or not and return boolean
const CheckPersianPhone = (number) => {
    if (!number)
        return;
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/;
    const res = numberRegex.test(number);
    return res;
};
exports.CheckPersianPhone = CheckPersianPhone;
