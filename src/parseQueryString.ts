/**
 * 获取 url 中的查询参数
 * @param {string} url 要获取的 url
 * @returns {object} 查询参数对象
 * @example
 * getQueryString('http://www.baidu.com?a=1&b=2')  // {a: '1', b: '2'}
 */
function parseQueryString(url: string): object {
    const query = url.split('?')[1];
    const queryObj = {};
    if (query) {
        const queryArr = query.split('&');
        queryArr.forEach(item => {
            const [key, value] = item.split('=');
            // @ts-ignore
            queryObj[key] = value;
        });
    }
    return queryObj;
}

export default parseQueryString;