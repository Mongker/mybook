/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { all } from "redux-saga/effects";
import {watcherCallListSlider, watcherCallPost, watcherCallDelete, watcherCallUpdate} from "./admin/sliderSaga";
import {watcherCallListAdmin, watcherCallDeleteAdmin, watcherCallUpdateAdmin, watcherCallPostAdmin} from "./admin/adminSaga";
import {watcherCallListCatalog, watcherCallDeleteCatalog, watcherCallPostCatalog, watcherCallPutCatalog} from './admin/catalogSaga';
// saga
export default function* rootSaga() {
    yield all([
        watcherCallListSlider(),
        watcherCallPost(),
        watcherCallDelete(),
        watcherCallUpdate(),
        watcherCallListAdmin(),
        watcherCallDeleteAdmin(),
        watcherCallUpdateAdmin(),
        watcherCallPostAdmin(),
        watcherCallListCatalog(),
        watcherCallDeleteCatalog(),
        watcherCallPostCatalog(),
        watcherCallPutCatalog(),
    ]);
}
