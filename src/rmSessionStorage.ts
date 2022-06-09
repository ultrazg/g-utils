/**
 * 移除 sessionStorage
 * @param {string} key 键
 */
function rmSessionStorage(key: string): void {
    try {
        sessionStorage.removeItem(key);
    } catch (e) {
        console.log(e);
    }
}

export default rmSessionStorage;