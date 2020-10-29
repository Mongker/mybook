/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 29/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {call, put, take} from 'redux-saga/effects';

// action types
import {CATALOG, PRODUCT} from 'src/action/actionTypes';

// api
import {getListProduct_IDCatalog} from 'src/api/product/getListIdCatalog';
import {getListCatalog_API} from "src/api/catalog/getList";

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListIDCatalog() {
    while (true) {
        const takeAction = yield take(PRODUCT.CALL_GET_LIST_ID_CATALOG);
        debugger; // MongLV
        const {payload} = takeAction;
        const {id} = payload;
        debugger; // MongLV
        if(id) {
            const product = yield getListCatalog_API(id);
            yield put({type: PRODUCT.GET_LIST_ID_CATALOG, product});
        }
    }
}

