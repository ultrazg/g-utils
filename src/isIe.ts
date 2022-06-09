/**
 * 判断是否为 IE 浏览器
 * @returns {boolean} 是否为 IE 浏览器
 * @example
 * isIe(); // false
 */
function isIe(): boolean {
    return !!window.ActiveXObject || "ActiveXObject" in window;
}

export default isIe;