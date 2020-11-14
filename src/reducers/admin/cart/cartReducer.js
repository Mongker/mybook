/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */


// action types
import {CART} from "src/action/actionTypes";

const Cart = (state = {}, action) => {
    switch (action.type) {
        case CART.GET_LIST:
            return action.cart;
        default:
            return state;
    }
};

export default Cart;
