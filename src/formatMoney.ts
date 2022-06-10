/**
 * 格式化金钱文本，隔三位加逗号
 * @param {number} amount 金钱数字
 * @param {number} digit 小数位数
 * @param {string} symbol 币种符号
 * @returns {string} 格式化后的金钱文本
 * @example
 * formatMoney(100, 2, '$'); // $100.00
 */
function formatMoney(amount: number = 0, digit: number = 2, symbol?: string): string {
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
    return decimal ? `${symbol ? symbol : ''}${spStr}.${decimal}` : `${symbol ? symbol : ''}${spStr}`;
}

export default formatMoney;