import debounce from "./debounce";

/**
 * 节流函数，目标函数在一个时间段之内只能被调用一次
 * @param {Function} func 目标函数
 * @param {number} wait 节流时间
 * @param {boolean} immediate 是否立即调用，默认：true
 * @param {boolean} lastcall 结束后是否需要调用，默认：true
 * @returns {Function}
 */
function throttle(func: Function, wait: number, immediate: boolean = true, lastcall: boolean = true): Function {
    return debounce(func, wait, immediate, lastcall, true);
}

export default throttle;
