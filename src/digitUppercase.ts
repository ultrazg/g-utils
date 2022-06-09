import {fraction, digit, unit} from "./consts";

/**
 * 数字转化为大写金额
 * @param {number} n 待处理数值
 * @returns {string} 处理后的字符串
 * @example
 * digitUppercase(123456789); // 壹佰贰拾叁万肆仟伍佰陆拾柒元整
 * digitUppercase(123.12);   // 壹佰贰拾叁元壹角贰分
 */
function digitUppercase(n: number): string {
    let num = Math.abs(n);
    let s = '';
    fraction.forEach((item, index) => {
        s += (digit[Math.floor(num * 10 * (10 ** index)) % 10] + item).replace(/零./, '');
    });
    s = s || '整';
    num = Math.floor(num);
    for (let i = 0; i < unit[0].length && num > 0; i += 1) {
        let p = '';
        for (let j = 0; j < unit[1].length && num > 0; j += 1) {
            p = digit[num % 10] + unit[1][j] + p;
            num = Math.floor(num / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

export default digitUppercase;