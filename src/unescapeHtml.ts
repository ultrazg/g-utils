import {HTML_UNESCAPES} from "./consts";

/**
 * 反转义 HTML 字符串
 * @param {string} string 要反转义的字符串
 * @returns {string} 反转义后的字符串
 * @example
 * unescapeHtml('&lt;a href=&quot;&quot;&gt;点我&lt;/a&gt;')  // <a href="">点我</a>
 */
function unescapeHtml(string: string): string{
    // @ts-ignore
    return string.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#96;/g, tag => HTML_UNESCAPES[tag] || tag);
}

export default unescapeHtml;