/**
 * 深拷贝一个对象或数组
 * @param  obj 要拷贝的对象或数组
 * @returns {any} 拷贝后的对象或数组
 * @example
 * const obj = { str: 'string', obj: {}, arr: [] };
 * const obj2 = deepCopy(obj);  // { str: 'string', obj: {}, arr: [] }
 */
function deepCopy(obj: any): any {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }
    const newObj = obj.constructor ? new obj.constructor() : {};
    for (const key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
}

export default deepCopy;