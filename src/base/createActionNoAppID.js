/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author MongLV 23/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
/**
 * createActionNoAppID: Tạo một action không có API
 * @param {*} type
 * @param {*} payload
 * @param {*} original
 * @param {*} condition
 */
export default function createActionNoAppID(type, payload = {}, original = {}, condition = {}) {
    return {type, payload, original, condition, timestamp: Date.now()};
}