/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import {call, put, take, select} from "redux-saga/effects";

// action types
import {ADMIN, SLIDER} from "src/action/actionTypes";

// api
import {getListAdmin_API} from 'src/api/admin/getList';
import {deleteAdmin} from 'src/api/admin/delete';
import {putAdmin} from 'src/api/admin/put';
import {postAdmin} from 'src/api/admin/post';
import {getLoginAdmin} from 'src/api/admin/login';
import {getAdminID} from 'src/api/admin/getAdminID';

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
export function* watcherCallPostAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_POST_ADMIN);
        const {payload} = takeAction;
        yield postAdmin(payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherCallUpdateAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_PUT);
        const {payload} = takeAction;
        yield putAdmin(payload._id, payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherLoginAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.LOGIN);
        const {payload} = takeAction;
        // const payload = takeAction.payload,
        // payload.data = { email : '?', passwold: '?'}
        const dataLogin = yield getLoginAdmin(payload.data);
        // dataLogin = {...} => Object.keys(dataLogin) biến thành 1 mảng để đồ dài của mảng
        if(dataLogin && Object.keys(dataLogin).length > 1) {
            localStorage.setItem('token_admin', dataLogin.password);
            localStorage.setItem('id_admin', dataLogin.id_admin);
            localStorage.setItem('email_admin', dataLogin.email);
        }
    }
}
export function* watcherGetAdminId() {
    while (true) {
        const takeAction = yield take(ADMIN.GET_ADMIN);
        const {payload} = takeAction;
        const use_admin = yield getAdminID(payload.id);
        yield put({type: ADMIN.GET_ADMIN_DATA, use_admin});
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListAdmin() {
    const admin = yield getListAdmin_API();
    yield put({type: ADMIN.GET_LIST, admin});
}
