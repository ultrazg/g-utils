import {RE_IPV4} from "./consts";

/**
 * 校验 ipv4 是否合法
 * @param {string} value ipv4
 * @returns {boolean} 是否是 ipv4
 * @example
 * isIPV4("127.0.0.1"); // true
 * isIPV4("::1/128"); // false
 */
function isIPV4(value: string): boolean {
    return RE_IPV4.test(value);
}

export default isIPV4;