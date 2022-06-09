/**
 * 获取当前时间，并根据时间段来对应输出提示文案
 * @returns {string} 当前时间段的提示语
 */
function getTimeToSayhello(): string {
    const hour: number = new Date().getHours();
    let text: string;
    if (hour < 6) {
        text = '凌晨好';
    } else if (hour < 9) {
        text = '早上好';
    } else if (hour < 12) {
        text = '中午好';
    } else if (hour < 18) {
        text = '下午好';
    } else if (hour < 21) {
        text = '晚上好';
    } else {
        text = '夜深了';
    }

    return text;
}

export default getTimeToSayhello;