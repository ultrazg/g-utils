/**
 * 判断一个变量是否为 number 类型
 * @param {*} v 待判断的变量
 * @return {boolean} 判断结果
 */
function isNumber(v: any): boolean {
    return typeof v === 'number';
}

export default isNumber;