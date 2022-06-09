/**
 * 设置 sessionStorage
 * @param {string} key 键
 * @param {string} value 值
 */
function setSessionStorage(key: string, value: string) {
    try {
        const obj = {};
        // @ts-ignore
        obj[key] = value;
        sessionStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
        console.log(e);
    }
}

export default setSessionStorage;