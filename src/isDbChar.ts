import {RE_DB_CHAR} from "./consts";

/**
 * 校验双字节字符是否合法
 * @param {string} value 双字节字符
 * @returns {boolean} 是否是双字节字符
 * @example
 * isDbChar("中文"); // true
 * isDbChar("abc"); // false
 */
function isDbChar(value: string): boolean {
    return RE_DB_CHAR.test(value);
}

export default isDbChar;