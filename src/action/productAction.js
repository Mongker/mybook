/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 29/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action Type
import {PRODUCT} from './actionTypes';

import createActionNoAppID from 'src/base/createActionNoAppID';

export const getList_IdCatalog = (payload) => createActionNoAppID(PRODUCT.CALL_GET_LIST_ID_CATALOG, payload);
export const getList = (payload) => createActionNoAppID(PRODUCT.CALL_GET_LIST, payload);
export const postProduct = (payload) => createActionNoAppID(PRODUCT.POST, payload);
export const deleteProduct = (payload) => createActionNoAppID(PRODUCT.DELETE, payload);
export const putProduct = (payload) => createActionNoAppID(PRODUCT.PUT, payload);
