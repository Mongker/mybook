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
import createActionNoAppID from 'src/base/createActionNoAppID';

export const getListSlider= (payload) => createActionNoAppID(SLIDER.GET_LIST, payload);
export const callDeleteSlider= (payload) => createActionNoAppID(SLIDER.CALL_DELETE, payload);
export const postSlider= (payload) => createActionNoAppID(SLIDER.CALL_POST_SLIDER, payload);
export const deleteSliderAction= (payload) => createActionNoAppID(SLIDER.DELETE, payload);
export const updateSliderAction= (payload) => createActionNoAppID(SLIDER.CALL_PUT, payload);