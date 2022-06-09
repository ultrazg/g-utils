/**
 * 获取 localStorage
 * @param key 键
 * @returns {string} 值
 */
function getLocalStorage(key: string): any {
    try {
        const obj = JSON.parse(String(localStorage.getItem(key)));
        return obj[key];
    } catch (e) {
        console.log(e);
    }
}

export default getLocalStorage;