/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 29/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import {PRODUCT} from 'src/action/actionTypes.js';

const Product = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT.GET_LIST_ID_CATALOG:
            return action.product;
        case PRODUCT.GET_LIST:
            return action.product;
        default:
            return state;
    }
};

export default Product;
