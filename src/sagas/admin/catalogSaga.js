/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 13/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import {CATALOG, SLIDER} from "../../action/actionTypes";
import {call, put, take, select} from "redux-saga/effects";


// api
import {getListCatalog_API} from "../../api/catalog/getList";
import {postCatalog} from "../../api/catalog/post";
import {putCatalog} from "../../api/catalog/put";
import {deleteCatalog} from "../../api/catalog/delete";

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListCatalog() {
    while (true) {
        yield take(CATALOG.CALL_GET_LIST);
        yield call(doCallListCatalog);
    }
}

export function * watcherCallDeleteCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteCatalog(payload);
        yield call(doCallListCatalog);
    }
}

export function* watcherCallPostCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_POST);
        debugger;
        const {payload} = takeAction;
        const {data} = payload;
        yield postCatalog(data);
        yield call(doCallListCatalog);
    }
}
export function* watcherCallPutCatalog() {
    while (true) {
        const takeAction = yield take(CATALOG.CALL_PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putCatalog(id, data);
        yield call(doCallListCatalog);
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListCatalog() {
    const catalog = yield getListCatalog_API();
    yield put({type: CATALOG.GET_LIST, catalog});
}
