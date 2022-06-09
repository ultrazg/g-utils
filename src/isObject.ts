/**
 * 判断一个变量是否为 Object
 * @param {*} v
 * @return {boolean}
 */
function isObject(v: any): boolean {
    return v.constructor === Object;
}

export default isObject;