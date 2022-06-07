/**
 * 判断一个变量是否为 Function
 * @param {*} v
 * @return {boolean}
 */
function isFunction(v: any): boolean {
    return typeof v === 'function';
}

export default isFunction;