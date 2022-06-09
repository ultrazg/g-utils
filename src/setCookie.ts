/**
 * 设置 cookie
 * @param {string} key cookie key
 * @param {string} value cookie value
 * @param {number} seconds 过期时间，单位：秒
 * @param {string} domain 域名
 */
function setCookie(key: string, value: string, domain?: string, seconds?: number): void {
    const expires = new Date(+new Date() + (seconds || 0) * 1000);
    document.cookie = `${key}=${value};expires=${expires.toUTCString()};domain=${domain || ''}`;
}

export default setCookie;