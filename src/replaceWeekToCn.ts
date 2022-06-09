/**
 * 返回今天是周几
 * @returns {string} 周几
 * @example
 * replaceWeekToCn() // '一'
 */
function replaceWeekToCn(): string {
    let week = new Date().getDay();
    let weekCn = "";
    switch (week) {
        case 0:
            weekCn = "日";
            break;
        case 1:
            weekCn = "一";
            break;
        case 2:
            weekCn = "二";
            break;
        case 3:
            weekCn = "三";
            break;
        case 4:
            weekCn = "四";
            break;
        case 5:
            weekCn = "五";
            break;
        case 6:
            weekCn = "六";
            break;
        default:
            weekCn = "日";
            break;
    }

    return weekCn;
}

export default replaceWeekToCn;