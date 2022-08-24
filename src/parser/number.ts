//This Function get a persian @number and change it to english @number and return it.
export const ChangePersianNumberToEnglish =(number : string) : string | undefined =>{
    if(!number) return;
    const res =  number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    return res;
}