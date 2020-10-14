/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 13/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {CATALOG} from './actionTypes';

export const getList = (payload) => {
    return {
        type: CATALOG.GET_LIST,
        payload,
        timestamp: Date.now()
    }
};

export const deleteCatalog= (payload) => {
    debugger;
    return {
        type: CATALOG.CALL_DELETE,
        payload,
        timestamp: Date.now()
    }
};

