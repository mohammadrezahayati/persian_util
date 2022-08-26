
/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
export const CheckCardNumber = (CardNumber: string): boolean => {
    const CardNumberRegex = /^\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}$/g;
    return CardNumberRegex.test(CardNumber)
}

/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
const banks = [
    { name: "ملت", id: 610433 },
    { name: "آینده", id: 636214 },
    { name: "سامان", id: 621986 },
    { name: "پاسارگاد", id: 502229 },
    { name: "ملی ایران", id: 603799 },
    { name: "صادرات ", id: 603769 },
    { name: "تجارت", id: 627353 },
    { name: "سپه", id: 589210 },
    { name: "کشاورزی", id: 603770 },
    { name: "توسعه تعاون", id: 502908 },
    { name: "اقتصاد نوین", id: 627412 },
    { name: "شهر", id: 502806 },
    { name: "مسکن", id: 628023 },
    { name: "قرض الحسنه رسالت", id: 504172 },
    { name: "انصار", id: 627381 },
    { name: "قوامین", id: 639599 },
    { name: "کارآفرین", id: 627488 },
    { name: "گردشگری", id: 505416 },
    { name: "موسسه اعتباری کوثر", id: 505801 },
    { name: "سینا", id: 639346 },
    { name: "پارسیان", id: 622106 },
    { name: "پست بانک ایران", id: 627760 },
    { name: "توسعه صادرات ایران", id: 627648 },
    { name: "حکمت ایرانیان", id: 636949 },
    { name: "دی", id: 502938 },
    { name: "رفاه کارگران", id: 589463 },
    { name: "سرمایه", id: 639607 },
    { name: "صنعت و معدن", id: 627961 },
    { name: "قرض الحسنه مهر ایران", id: 606373 },
    { name: "مرکزی", id: 636795 },
    { name: "موسسه اعتباری عسکریه(ملل)", id: 606256 },
    { name: "ایران زمین", id: 505785 },
];
export const CardBank = (CardNumber: string): string | undefined => {
    if (CheckCardNumber(CardNumber)) {
        const card = CardNumber.slice(0, 6),
            bankName = banks.find((item) => item.id === +card);
        return bankName?.name
    }
}