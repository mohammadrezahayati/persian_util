//This function get a persian @number and check it if valid or not and return boolean
export const CheckPersianPhone =(number:string): boolean | undefined =>{
    if(!number) return;
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/;
    const res = numberRegex.test(number);
    return res;
}