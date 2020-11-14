/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 05/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import {connect} from 'react-redux';

// action
import * as catalogAction from 'src/action/catalogAction';
import * as ProductAction from 'src/action/productAction';

// components
import User from 'src/components/user/index';
import {CART, CATALOG, SLIDER, USER} from "src/action/actionTypes";
import * as productAction from 'src/action/productAction';

const mapStateToProps = state => {
    const listCatalog = state.Catalog;
    const listProduct = state.Product;
    const listSlider = state.Slider;
    const user = state.User;
    const cart = state.Cart;
    return {
        listCatalog,
        listProduct,
        listSlider,
        user,
        cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getListCatalog: () => dispatch({type: CATALOG.CALL_GET_LIST}),
        getListProduct: () => dispatch(productAction.getList()),
        getListSlider: () => dispatch({type: SLIDER.CALL_GET_LIST}),
        postUser: (data) => {
            return dispatch({type: USER.CALL_POST_ADMIN, payload: data});
        },
        getUser: () => dispatch({type: USER.GET_ADMIN}),
        loginUser: (data, funcBack) => dispatch({type: USER.CALL_LOGIN, payload: {data, funcBack}}),
        logOut: () => dispatch({type: 'LOG_OUT_USER'}),
        cartUsr: () => dispatch({type: 'watchListCartUser'}),
        postCart: (data) => dispatch({type: CART.CALL_POST, payload: {data}}),
        deleteCart: (id) => dispatch({type: CART.CALL_DELETE, payload: {id}}),
        putCart: (id, data) => dispatch({type: CART.CALL_PUT, payload: {id, data}}),
        datMua: (dataObj) => dispatch({type: 'DAT_MUA', payload: {dataObj}}),
    };
};

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;
