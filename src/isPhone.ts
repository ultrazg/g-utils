import {RE_PHONE} from "./consts";

/**
 * 校验手机号是否合法
 * @param {string} value 常规手机号
 * @returns {boolean} 是否是手机号
 * @example
 * isPhone("13888888888"); // true
 * isPhone("88888888"); // false
 */
function isPhone(value: string): boolean {
    return RE_PHONE.test(value);
}

export default isPhone;