import setCookie from "./setCookie";
import getCookie from "./getCookie";

/**
 * 清除指定 key 的 cookie，如果不传 key，则清除所有 cookie
 * @param {string} key cookie key
 */
function rmCookie(key?: string): void {
    if (key) {
        setCookie(key, '', '', -1);
    } else {
        const cookieObj = getCookie();
        Object.keys(cookieObj).forEach(key => {
            setCookie(key, '', '', -1);
        });
    }
}

export default rmCookie;