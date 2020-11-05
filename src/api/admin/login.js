/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 04/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import axios from 'axios';
import {URL_API} from '../config';
import {message} from "antd";

export function getLoginAdmin(data) {
    try {
        return axios.post(`${URL_API.local}admin/login`, data)
            .then(res => res.data)
            .catch(error => message.error('Tài khoản hoặc mật khẩu không đúng'));
    } catch (e) {
        message.error(e);
    }
}
