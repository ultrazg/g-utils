/**
 * 获取 cookie，如果传入 key，则返回 key 对应的 cookie，否则返回所有 cookie
 * @param {string} key cookie key
 * @returns {string} cookie value
 */
function getCookie(key?: string): string | object {
    const cookie = document.cookie;
    if (key) {
        const cookieArr = cookie.split('; ');
        for (let i = 0; i < cookieArr.length; i++) {
            const [k, v] = cookieArr[i].split('=');
            if (k === key) {
                return v;
            }
        }
        return '';
    }
    const cookieObj = {};
    const cookieArr = cookie.split('; ');
    for (let i = 0; i < cookieArr.length; i++) {
        const [k, v] = cookieArr[i].split('=');
        // @ts-ignore
        cookieObj[k] = v;
    }
    return cookieObj;
}

export default getCookie;