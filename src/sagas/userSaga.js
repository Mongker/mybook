/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
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
import {ADMIN, USER} from "src/action/actionTypes";

// api
import {getListAdmin_API} from 'src/api/admin/getList';
import {deleteAdmin} from 'src/api/admin/delete';
import {putAdmin} from 'src/api/admin/put';
import {postAdmin} from 'src/api/admin/post';
import {getAdminID} from 'src/api/admin/getAdminID';

// api user
import {postUser} from 'src/api/user/post';
import {getLoginUser} from 'src/api/user/login';
import {getUserID} from 'src/api/user/getAdminID'
import {message} from "antd";


// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListAdmin() {
    while (true) {
        yield take(ADMIN.CALL_GET_LIST);
        debugger; // MongLV
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
export function* watcherCallPostUser() {
    while (true) {
        debugger; // MongLV
        const takeAction = yield take(USER.CALL_POST_ADMIN);
        debugger; // MongLV
        const {payload} = takeAction;
        yield postUser(payload);
        // yield call(doCallListAdmin);
    }
}

export function* watcherCallUpdateAdmin() {
    while (true) {
        const takeAction = yield take(ADMIN.CALL_PUT);
        debugger; // MongLV
        const {payload} = takeAction;
        debugger; // MongLV
        yield putAdmin(payload._id, payload);
        yield call(doCallListAdmin);
    }
}
export function* watcherLoginUser() {
    while (true) {
        const takeAction = yield take(USER.CALL_LOGIN);
        debugger; // MongLV

        const {payload} = takeAction;
        debugger; // MongLV
        const dataLogin = yield getLoginUser(payload.data);
        // dataLogin = {...} => Object.keys(dataLogin) biến thành 1 mảng để đồ dài của mảng
        debugger; // MongLV
        if(dataLogin && Object.keys(dataLogin).length > 1) {
            payload.funcBack();
            localStorage.setItem('token_user', dataLogin.password);
            localStorage.setItem('id_user', dataLogin._id);
            localStorage.setItem('name_user', dataLogin.name);
            message.success(`Chào ${dataLogin.name}`)
        }
        yield put({type: USER.LOGIN, dataLogin});
    }
}
export function* watcherGetUserId() {
    while (true) {
        yield take(USER.GET_ADMIN);
        const id = localStorage.getItem('id_user')
        const dataLogin = yield getUserID(id);
        debugger; // MongLV
        yield put({type: USER.LOGIN, dataLogin});
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListAdmin() {
    const admin = yield getListAdmin_API();
    yield put({type: ADMIN.GET_LIST, admin});
}
