import isNumber from "./isNumber";
import isUndefined from "./isUndefined";

/**
 * 给字符串指定位置打码
 * @param {string} string 待打码的字符串
 * @param {number} start 开始位置
 * @param {number} length 打码长度
 * @param {string} mask 打码字符
 * @example
 * maskString('123456789', 3, 4, '*');  // '123****89'
 * maskString('大家好我今天吃了很多蛋糕', 3, 4, 'x');  // '大家好xxxxxxxx了很多蛋糕'
 */
function maskString(string: string, start: number, length: number, mask: string) {
    const str = String(string);
    if (!isNumber(start)) return str;
    const maskStr = str
        .substr(start, length)
        .replace(/[^\u4e00-\u9fa5]/gm, mask ? mask : '*')
        .replace(/[\u4e00-\u9fa5]/gm, mask + mask);
    const prefix = str.substr(0, start);
    const suffix = isUndefined(length) ? '' : str.substr(start + length);
    return prefix + maskStr + suffix;
}

export default maskString;