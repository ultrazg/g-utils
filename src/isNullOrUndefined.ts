/**
 * 判断一个变量是否为 null 或 undefined
 * @param {*} v
 * @return {boolean}
 */
function isNullOrUndefined(v: any): boolean{
    return v === null || v === undefined;
}

export default isNullOrUndefined;