/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import {USER} from 'src/action/actionTypes.js';

const User = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case USER.LOGIN:
            return action.dataLogin;
        case 'LOG_OUT_USER':
            return {};
        default:
            return state;
    }
};

export default User;
