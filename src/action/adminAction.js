/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {ADMIN} from './actionTypes';

export const getListAdmin = (payload) => {
    return {
        type: ADMIN.GET_LIST,
        payload,
        timestamp: Date.now()
    }
};