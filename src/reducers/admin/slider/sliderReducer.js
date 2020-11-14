/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import {SLIDER} from 'src/action/actionTypes.js';

const Slider = (state = {}, action) => {
    debugger; // MongLV
    switch (action.type) {
        case SLIDER.GET_LIST:
            return action.sliders;
        case SLIDER.DELETE:
            return action.slider;
        default:
            return state;
    }
};

export default Slider;
