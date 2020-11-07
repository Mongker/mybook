/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { combineReducers } from "redux";
import Slider from "./admin/slider/sliderReducer";
import Admin from "./admin/admin/adminReducer";
import UseAdmin from "./admin/admin/useAdminReducer";
import Catalog from "./admin/catalog/catalogReducer";
import Product from './admin/product/productReducer';
import User from './admin/user/loginUserReducer';
import Cart from './admin/cart/cartReducer';
const allReducers = combineReducers({
    Slider,
    Admin,
    Catalog,
    Product,
    UseAdmin,
    User,
    Cart,
});
export default allReducers;
