import dayjs from "dayjs";

/**
 * 获取当前时间戳
 */
export function getCurrentTimestamp(): number {
    return getTimestamp();
}
export function getTimestamp(ts?: string): number {

    return (ts ? dayjs(ts) : dayjs()).toDate().getTime()
}
/**
 * 将时间戳转换为YYYY-MM-DD HH:mm:ss格式
 * @param value
 * @returns 
 */
export function formatDate(value: string | number, template = 'YYYY-MM-DD HH:mm:ss'): string {
    return dayjs(value).format(template)
}

/**
 * 
 * @returns 星期几
 */
export function getDay() {
    return '星期' + '天一二三四五六'.charAt(new Date().getDay())
}
export const DEFAULT_DAY_TEMPLATE = "YYYY-MM-DD"
/**
 * 昨天
 * @param 格式
 * @returns 
 */
export function yestoday(format = DEFAULT_DAY_TEMPLATE) {

    return dayjs().subtract(1, 'days').format(format)
}

/**
 * 明天
 * @param p 格式
 * @returns 
 */
export function tomorrow(format: string = DEFAULT_DAY_TEMPLATE) {
    return dayjs().add(1, 'days').format(format)
}


/**
 * 获取当前时间
 */
export function getDateString(format: string = DEFAULT_DAY_TEMPLATE): string {
    return dayjs().format(format)
}

/**
 * 上一个工作日 
 * @param format 
 */
export function getLastWorkDate(time?: number, format: string = DEFAULT_DAY_TEMPLATE): string {
    var now = time ? dayjs(time) : dayjs()
    var d = now.day()
    var sub = 1
    // 周日
    if (d == 0) {
        sub = 2
    } else if (d == 1) {
        sub = 3
    }
    return now.subtract(sub, 'day').format(format)
}

/**
 * 
 * @param format 格式化
 * @returns 
 */
export function getNextWordDay(time?: number, format: string = DEFAULT_DAY_TEMPLATE): string {
    var now = time ? dayjs(time) : dayjs()
    var d = now.day()
    var sub = 1
    // 周五
    if (d == 5) {
        sub = 3
    } else if (d == 6) {
        // 周六
        sub = 2
    }
    
    return now.add(sub, 'day').format(format)
}




