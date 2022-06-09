import isNumber from "./isNumber";
import {RE_DB_CHAR} from "./consts";

/**
 * 裁切字符串，超出部分用超出符代替
 * @param {string} string 待裁切的字符串
 * @param {number} length 裁切长度
 * @param {string} omission 裁切后的字符串
 * @example
 * cutString('测试字符串裁切函数，过长溢出显示省略', 20);    // '测试字符串裁切函数，...'
 */
export function cutString(string: string, length: number, omission?: string): string {
    if (omission === undefined) omission = '...';
    if (!isNumber(length)) return string;
    let tmpChar;
    let tmpStr = '';
    let count = 0;
    let hasRest = false;
    let i = -1;
    while (++i < string.length) {
        if (count >= length) {
            hasRest = true;
            break;
        }
        tmpChar = string.substr(i, 1);
        tmpStr += tmpChar;
        count += RE_DB_CHAR.test(tmpChar) ? 2 : 1;
    }
    return tmpStr + (hasRest ? omission : '');
}

export default cutString;