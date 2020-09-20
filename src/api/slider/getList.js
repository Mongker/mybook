/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';

export function getListSlider_API() {
	return axios.get('http://localhost:1999/api/slider')
	.then(res => res.data)
	.catch(error => console.log(error));
}