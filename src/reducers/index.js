/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { combineReducers } from "redux";
import Slider from "./admin/slider/sliderReducers";
import Admin from "./admin/admin/adminReducers";
import Catalog from "./admin/catalog/catalogReducers";
const allReducers = combineReducers({
    Slider,
    Admin,
    Catalog,
});
export default allReducers;
