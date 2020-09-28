/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import {ADMIN} from "../../action/actionTypes";
import {call, put, take, select} from "redux-saga/effects";

// api
import {getListAdmin_API} from "../../api/admin/getList";
import {deleteAdmin} from "../../api/admin/delete";

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListAdmin() {
    while (true) {
        yield take(ADMIN.CALL_GET_LIST);
        yield call(doCallListAdmin);
    }
}

export function* watcherCallDeleteAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteAdmin(payload);
        yield call(doCallListAdmin);
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListAdmin() {
    const admin = yield getListAdmin_API();
    yield put({type: ADMIN.GET_LIST, admin});
}
