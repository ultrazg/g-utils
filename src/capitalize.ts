/**
 * 单词首字母大写
 * @param {string} string 待处理的字符串
 * @returns {string} 处理后的字符串
 * @example
 * capitalize('hello world')  // Hello world
 */
function capitalize(string: string): string{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;