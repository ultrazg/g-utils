import isArray from './isArray';

/**
 * 扁平化数组
 * @param arr 数组
 * @param deep 深度扁平化层级
 * @returns {Array} 扁平化后的数组
 * @example
 * const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

 * flatten(array, 0);   // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
 * flatten(array,3);    // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
 */
function flatten(arr: any[], deep: number): any[] {
    if (!isArray(arr)) {
        return [];
    }
    if (deep === 0) {
        return arr;
    }
    return arr.reduce((prev, cur) => {
        return prev.concat(isArray(cur) ? flatten(cur, deep - 1) : cur);
    }, []);
}

export default flatten;