/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongler 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

 // action Type
 import {SLIDER} from './actionTypes';

 export const getListSlider = (payload) => {
     return {
         type: SLIDER.GET_LIST,
         payload,
         timestamp: Date.now()
     }
 };