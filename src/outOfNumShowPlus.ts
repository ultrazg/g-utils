/**
 * 超出最大值显示加号
 * @param {number} num 待处理的数字
 * @param {number} max 最大值
 * @returns {string} 处理后的字符串
 */
function outOfNumShowPlus(num: number, max: number = 99): string {
    return num > max ? `${max}+` : String(num);
}

export default outOfNumShowPlus;