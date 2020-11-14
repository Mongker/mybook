/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';
import {URL_API} from '../config';

export function getListUserIDCart(id) {
    console.log('mong'+id);
    return axios.get(`${URL_API.local}cart-user/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}
