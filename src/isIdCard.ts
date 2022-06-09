import {RE_ID_CARD} from "./consts";

/**
 * 校验身份证号是否合法
 * @param {string} value 身份证号
 * @returns {boolean} 是否是身份证号
 * @example
 * isIdCard("440301199001011234"); // true
 * isIdCard("44030119900101123"); // false
 */
function isIdCard(value: string): boolean {
    return RE_ID_CARD.test(value);
}

export default isIdCard;