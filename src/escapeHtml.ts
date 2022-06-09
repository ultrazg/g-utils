import {HTML_ESCAPES} from "./consts";

/**
 * 转义 HTML 字符串
 * @param {string} html 要转义的字符串
 * @returns {string} 转义后的字符串
 * @example
 * escapeHtml('<a href="">点我</a>')  // &lt;a href=&quot;&quot;&gt;点我&lt;/a&gt;
 */
function escapeHtml(html: string): string {
    // @ts-ignore
    return html.replace(/[&<>"'``]/g, tag => HTML_ESCAPES[tag] || tag);
}

export default escapeHtml;