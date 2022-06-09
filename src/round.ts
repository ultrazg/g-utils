/**
 * 四舍五入到指定位数
 * @param {number} value 待处理数值
 * @param {number} precision 精度
 * @returns {number} 处理后的数值
 * @example
 * round(1.2345, 2); // 1.23
 */
function round(value: number, precision: number): number {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

export default round;
