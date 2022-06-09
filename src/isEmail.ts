import {RE_EMAIL} from "./consts";

/**
 * 校验邮箱是否合法
 * @param {string} value 邮箱
 * @returns {boolean} 是否是邮箱
 * @example
 * isEmail("test@163.com"); // true
 * isEmail("test@163com"); // false
 */
function isEmail(value: string): boolean {
    return RE_EMAIL.test(value);
}

export default isEmail;