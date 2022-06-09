/**
 * 随机生成十六进制颜色
 * @returns {string} 颜色代码
 * @example
 * randomHexColor(); // '#f0f0f0'
 */
function randomHexColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default randomHexColor;