/**
 * 格式化金钱文本，隔三位加逗号
 * @param amount 金钱数字
 * @param digit 小数位数
 * @returns {string} 格式化后的金钱文本
 * @example
 * formatMoney();   // '0.00'
 * formatMoney(99, 1);  // '99.0'
 * formatMoney(1999);   // '1,999.00'
 * formatMoney(100000000);  // '100,000,000.00'
 */
function formatMoney(amount: number, digit?: number): string {
    amount = amount || 0;
    if (digit === undefined) digit = 2;
    const amountArr = String(amount.toFixed(digit)).split('.');
    const int = amountArr[0];
    const decimal = amountArr[1] || '';
    const spNum = Math.floor(int.length / 3);
    let spIdx = int.length % 3;
    let spStr = int.substr(0, spIdx);
    let i = -1;
    while (++i < spNum) {
        spStr += i === 0 && (spStr === '-' || !spStr) ? int.substr(spIdx, 3) : `,${int.substr(spIdx, 3)}`;
        spIdx += 3;
    }
    return decimal ? `${spStr}.${decimal}` : spStr;
}

export default formatMoney;