import {RE_URL} from "./consts";

/**
 * 校验 url 是否合法
 * @param {string} value
 * @returns {boolean}
 * @example
 * isUrl("http://www.baidu.com"); // true
 * isUrl("www.baidu.com"); // false
 */
function isUrl(value: string): boolean {
    return RE_URL.test(value);
}

export default isUrl;