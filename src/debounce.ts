/**
 * 防抖函数，在一定时间内只执行一次
 * @param {Function} func 目标函数
 * @param {number} wait 防抖时间
 * @param {boolean} immediate 是否立即调用，默认：true
 * @param {boolean} lastcall 结束后是否需要调用，默认：true
 * @param {boolean} leakcall 一定时间内也能调用，默认：false
 * @returns {Function}
 */
export function debounce(func: Function, wait: number, immediate: boolean = true, lastcall: boolean = true, leakcall: boolean = false): Function {
    let timeout: number | undefined;
    return function (...args: any[]) {
        // @ts-ignore
        let context = this;
        let later = function () {
            if (!leakcall) {
                timeout = undefined;
            }
            if (lastcall) {
                func.apply(context, args);
            }
        };
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            func.apply(context, args);
        }
        timeout = setTimeout(later, wait);
    };
}

export default debounce;