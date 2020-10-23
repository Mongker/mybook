/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 13/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {CATALOG} from './actionTypes';
import createActionNoAppID from 'src/base/createActionNoAppID';

export const getList = (payload) => createActionNoAppID(CATALOG.GET_LIST, payload);
export const deleteCatalog = (payload) => createActionNoAppID(CATALOG.CALL_DELETE, payload);
export const postCatalog = (payload) => createActionNoAppID(CATALOG.CALL_POST, payload);
export const putCatalog = (payload) => createActionNoAppID(CATALOG.CALL_PUT, payload);