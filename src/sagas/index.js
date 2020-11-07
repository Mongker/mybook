/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { all } from "redux-saga/effects";
import {watcherCallListSlider, watcherCallPost, watcherCallDelete, watcherCallUpdate} from "./sliderSaga";
import {watcherCallPostUser, watcherLoginUser, watcherGetUserId} from "./userSaga";
import {watcherCallListAdmin, watcherCallDeleteAdmin, watcherCallUpdateAdmin, watcherCallPostAdmin, watcherLoginAdmin, watcherGetAdminId} from "./adminSaga";
import {watcherCallListCatalog, watcherCallDeleteCatalog, watcherCallPostCatalog, watcherCallPutCatalog} from './catalogSaga';
import {watcherCallListIDCatalog, watcherGetListIDCatalog, watcherCallPostProduct, watcherCallDeleteProduct, watcherPutProduct, watcherGetListProduct} from "./productSaga";
import {
    watcherCallDeleteCart,
    watcherCallUpdateCart,
    watcherDatMua,
    watcherPostCart,
    watchListCartUser
} from "src/sagas/cartSaga";
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
        watcherCallListIDCatalog(),
        watcherGetListIDCatalog(),
        watcherCallPostProduct(),
        watcherCallDeleteProduct(),
        watcherPutProduct(),
        watcherGetListProduct(),
        watcherLoginAdmin(),
        watcherGetAdminId(),
        watcherCallPostUser(),
        watcherLoginUser(),
        watcherPostCart(),
        watchListCartUser(),
        watcherCallDeleteCart(),
        watcherCallUpdateCart(),
        watcherDatMua(),
        watcherGetUserId(),
    ]);
}
