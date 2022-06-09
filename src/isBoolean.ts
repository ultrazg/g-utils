/**
 * 判断一个值是否为 boolean 类型
 * @param {*} v 待判断的值
 * @return {boolean} 判断结果
 */
function isBoolean(v: any): boolean {
    return typeof v === 'boolean';
}

export default isBoolean;