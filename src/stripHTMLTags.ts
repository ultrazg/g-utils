/**
 * 删除字符串中的 HTML 标签
 * @param {string} str 待处理字符串
 * @returns {string} 处理后的字符串
 * @example
 * stripHTMLTags('<a href="http://www.baidu.com">百度</a>'); // 百度
 */
function stripHTMLTags(str: string): string {
    return str.replace(/<[^>]+>/g, '');
}

export default stripHTMLTags;