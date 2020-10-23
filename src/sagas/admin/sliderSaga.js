/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {call, put, take, select} from 'redux-saga/effects';

// action types
import {SLIDER} from 'src/action/actionTypes';

// api
import {getListSlider_API} from 'src/api/slider/getList';
import {postSlider} from 'src/api/slider/post';
import {deleteSlider} from 'src/api/slider/delete';
import {putSlider} from 'src/api/slider/put';

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListSlider() {
    while (true) {
        yield take(SLIDER.CALL_GET_LIST);
        yield call(doCallListSlider);
    }
}

export function* watcherCallPost() {
    while (true) {
        const takeAction = yield take(SLIDER.CALL_POST_SLIDER);
        const {payload} = takeAction;
        const {data} = payload;
        yield postSlider(data);
        yield call(doCallListSlider);
    }
}

export function* watcherCallDelete() {
    while (true) {
        const takeAction = yield take(SLIDER.CALL_DELETE);
        const {payload} = takeAction;
        yield deleteSlider(payload);
        yield call(doDeleteSlider, payload);
    }
}

export function* watcherCallUpdate() {
    while (true) {
        const takeAction = yield take(SLIDER.CALL_PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putSlider(id, data);
        yield call(doCallListSlider);
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListSlider() {
    const sliders = yield getListSlider_API();
    yield put({type: SLIDER.GET_LIST, sliders});
}

export function* doDeleteSlider(id) {
    const {Slider} = yield select();
    delete Slider[id];
    const slider = {...Slider};
    yield put({type: SLIDER.DELETE, slider})
}
