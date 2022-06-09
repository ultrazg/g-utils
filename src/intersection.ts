/**
 * 返回两个数组的交集
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns 交集数组
 * @example
 * intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
 * intersection(['a', 'b', 'c'], ['b', 'c', 'd']); // ['b', 'c']
 */
function intersection(arr1: any[], arr2: any[]): any[] {
    return arr1.filter(item => arr2.includes(item));
}

export default intersection;