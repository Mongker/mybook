/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 21/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function postCart(data) {
    try {
        return axios.post(`${URL_API.local}cart`, data)
            .then(res => res.data).then((result) => {
                console.log(result);
                if (result.message === 'SUCCESS') {
                    message.success('Thêm thành công')
                } else if(result.message === 'Đã tồn tại'){
                    message.warn('Đã có trong giỏ hàng')
                } else {
                    message.error('Lỗi truyền');
                }
            })
            .catch(error => message.error('Lỗi: '+ error));
    } catch (e) {
        message.error(e);
    }
}
