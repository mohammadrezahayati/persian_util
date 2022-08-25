//This Function get a persian @number and change it to english @number and return it.
export const Fa_To_En =(number : string) : string | undefined =>{
    if(!number) return;
    const res =  number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    return res;
}

export const En_To_Fa =(number : string) : string | undefined =>{
    if(!number) return;
    const res =  number.replace(/[0-9]/g, (d: string) => '0123456789'.indexOf(d).toString())
    return res;
}