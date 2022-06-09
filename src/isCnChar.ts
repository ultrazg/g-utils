import {RE_CN_CHAR} from "./consts";

/**
 * 校验中文字符是否合法
 * @param {string} value 中文字符
 * @returns {boolean} 是否是中文字符
 * @example
 * isCnChar("中文"); // true
 * isCnChar("abc"); // false
 */
function isCnChar(value: string): boolean {
    return RE_CN_CHAR.test(value);
}

export default isCnChar;