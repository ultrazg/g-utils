/**
 * 数字转化为中文
 * @param n 待处理数值
 * @returns 处理后的字符串
 * @example
 * intToCn(123456789); // 一亿二千三百四十五万六千七百八十九
 */
function intToCn(n: number): string {
    const str: string = String(n);
    const len: number = str.length - 1;
    const idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
    const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
        let pos = 0;
        if ($1[0] !== '0') {
            pos = len - idx;
            if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
                return idxs[len - idx];
            }
            return num[$1[0]] + idxs[len - idx];
        } else {
            let left = len - idx;
            let right = len - idx + $1.length;
            if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
                pos = left - left % 4;
            }
            if (pos) {
                return idxs[pos] + num[$1[0]];
            } else if (idx + $1.length >= len) {
                return '';
            } else {
                return num[$1[0]]
            }
        }
    });
}

export default intToCn;