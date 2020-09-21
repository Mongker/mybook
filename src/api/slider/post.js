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
import {HTTP} from "../config";
import {message} from "antd";

export function postSlider(data, successCallback) {
    try {
        return axios.post(`${HTTP.local}slider`, data)
            .then(res => res.data).then(message.success('Thêm Thành công'))
            .catch(error => console.log(error));
    } catch (e) {
        console.log('postSlider: ' + e );
    }
}
