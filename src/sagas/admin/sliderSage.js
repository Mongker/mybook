/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import { SLIDER } from "../../action/actionTypes";
import { call, put, take } from "redux-saga/effects";

// api
import { getListSlider_API } from "../../api/slider/getList";

// watcher
export function* watcherCallListSlider() {
  while (true) {
    const fetchResult = yield take(SLIDER.CALL_GET_LIST);
    yield call(doCallListSlider);
  }
}
// do Saga

export function* doCallListSlider() {
  const sliders = yield getListSlider_API();
  yield put({ type: SLIDER.GET_LIST, sliders });
}
