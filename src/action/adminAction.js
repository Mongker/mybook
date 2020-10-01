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

export const callDeleteAdminAction= (payload) => {
    return {
        type: ADMIN.CALL_DELETE,
        payload,
        timestamp: Date.now()
    }
};

export const callPostAdminAction = (payload) => {
    return {
        type: ADMIN.CALL_POST_ADMIN,
        payload,
        timestamp: Date.now()
    }
};

export const callPutAdminAction = (payload) => {
    return {
        type: ADMIN.CALL_PUT,
        payload,
        timestamp: Date.now()
    }
};

export const deleteAdminAction= (payload) => {
    return {
        type: ADMIN.DELETE,
        payload,
        timestamp: Date.now()
    }
};
