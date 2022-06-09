/**
 * 获取 sessionStorage
 * @param {string} key 存储的 key
 * @returns {string} 存储的值
 */
function getSessionStorage(key: string) {
    try {
        const value: string = JSON.parse(String(sessionStorage.getItem(key)));
        return value;
    } catch (e) {
        console.log(e);
    }
}

export default getSessionStorage;