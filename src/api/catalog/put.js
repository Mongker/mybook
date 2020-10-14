/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 21/09/2020.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function putCatalog(id, data) {
    try {
        return axios.put(`${URL_API.local}catalog/${id}`, data)
            .then(res => res.data).then((result) => {
                if (result.message === 'SUCCESS') {
                    message.success('Cập nhật thành công')
                } else {
                    message.error('Lỗi rồi !');
                }
            })
            .catch(error => message.error(error));
    } catch (e) {
        message.error(e);
    }
}
