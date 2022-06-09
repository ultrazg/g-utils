/**
 * 将对象转换为查询字符串
 * @param {object} data 要转换的对象
 * @param {string} url url
 * @return {string} 转换后的查询字符串
 * @example
 * const data = { a: 1, b: 2 };
 * stringifyQueryString(data) // '?a=1&b=2'
 */
function stringifyQueryString(data: object, url?: string): string {
    // @ts-ignore
    const query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
    return `${url ? url : ''}?${query}`;
}

export default stringifyQueryString;