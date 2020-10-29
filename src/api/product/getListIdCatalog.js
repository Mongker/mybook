/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 29/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';
import {URL_API} from '../config';

export function getListProduct_IDCatalog(id) {
    return axios.get(`${URL_API.local}product/${id}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}
// http://localhost:1999/api/admin
