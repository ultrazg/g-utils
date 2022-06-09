/**
 * 设置 localStorage
 * @param {string} key 键
 * @param {string} value 值
 */
function setLocalStorage(key: string, value: string): void {
    try {
        const obj = {};
        // @ts-ignore
        obj[key] = value;
        localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
        console.log(err);
    }
}

export default setLocalStorage;