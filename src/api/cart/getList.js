/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';
import {URL_API} from '../config';

export function getListCart() {
	return axios.get(`${URL_API.local}cart`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
