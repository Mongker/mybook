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
import {PRODUCT} from 'src/action/actionTypes';

// api
import {getListProduct_IDCatalog} from 'src/api/product/getListIdCatalog';
import {postProduct} from 'src/api/product/post';
import {deleteProduct} from 'src/api/product/delete';
import {putProduct} from 'src/api/product/put';
import {getListProduct_API} from 'src/api/product/getList';

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListIDCatalog() {
    while (true) {
        const takeAction = yield take(PRODUCT.CALL_GET_LIST_ID_CATALOG);
        const {payload} = takeAction;
        const {id} = payload;
        if(id) {
            localStorage.setItem('id_click_catalog', id);
            yield put({type: 'RUN_ListIDCatalog', id});
        }
    }
}
export function * watcherGetListIDCatalog() {
   while (true) {
       const takeAction = yield take('RUN_ListIDCatalog');
       const {id} = takeAction;
       const product = yield getListProduct_IDCatalog(id || localStorage.getItem('id_click_catalog'));
       console.log(localStorage.getItem('id_click_catalog'));
       yield put({type: PRODUCT.GET_LIST_ID_CATALOG, product});
   }
}

export function* watcherCallPostProduct() {
    while (true) {
        const takeAction = yield take(PRODUCT.POST);
        const {payload} = takeAction;
        yield postProduct(payload.data);
        yield put({type: 'RUN_ListIDCatalog'})
    }
}
export function * watcherCallDeleteProduct() {
    while (true) {
        const takeAction = yield take(PRODUCT.DELETE);
        const {payload} = takeAction;
        yield deleteProduct(payload.id);
        yield put({type: 'RUN_ListIDCatalog'})
    }
}

export function* watcherPutProduct() {
    while (true) {
        const takeAction = yield take(PRODUCT.PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putProduct(id, data);
        yield put({type: 'RUN_ListIDCatalog'});
    }
}

export function* watcherGetListProduct() {
    while (true) {
        yield take(PRODUCT.CALL_GET_LIST);
        yield call(doCallListProduct);
    }
}

// -------------------------------------- do Saga ---------------------------------------/

export function* doCallListProduct() {
    const product = yield getListProduct_API();
    yield put({type: PRODUCT.GET_LIST, product});
}
