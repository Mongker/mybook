/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import {CATALOG} from 'src/action/actionTypes.js';

const Catalog = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case CATALOG.GET_LIST:
            return action.catalog;
        case CATALOG.DELETE:
            return action.catalog;
        default:
            return state;
    }
};

export default Catalog;
