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
 * @author MongLV on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import {USER} from './actionTypes';
import createActionNoAppID from 'src/base/createActionNoAppID';

export const getListAdmin = (payload) => createActionNoAppID(USER.GET_LIST, payload);
export const callDeleteAdminAction = (payload) => createActionNoAppID(USER.CALL_DELETE, payload);
export const callPostAdminAction = (payload) => createActionNoAppID(USER.CALL_POST_ADMIN, payload);
export const callPutAdminAction = (payload) => createActionNoAppID(USER.CALL_PUT, payload);
export const deleteAdminAction = (payload) => createActionNoAppID(USER.DELETE, payload);
export const loginAdminAction = (payload) => createActionNoAppID(USER.LOGIN, payload);
export const getAdminIdAction = (payload) => createActionNoAppID(USER.GET_ADMIN, payload);
