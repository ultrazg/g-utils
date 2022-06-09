/**
 * 清除 localStorage
 * @param {string} key 键
 */
function rmLocalStorage(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log(err);
    }
}

export default rmLocalStorage;