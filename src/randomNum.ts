/**
 * 随机生成指定范围的数字
 * @param {number} start 起始值（包含）
 * @param {number} end 结束值（不包含）
 * @param {boolean} isFloat 是否为浮点数
 */
function randomNum(start: number, end: number, isFloat: boolean = false): number {
    if (isFloat) {
        return Math.random() * (end - start) + start;
    }
    return Math.floor(Math.random() * (end - start) + start);
}

export default randomNum;