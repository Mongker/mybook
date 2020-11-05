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
import {CATALOG} from "src/action/actionTypes";
import * as productAction from 'src/action/productAction';

const mapStateToProps = state => {
    const listCatalog = state.Catalog;
    const listProduct = state.Product;
    return {
        listCatalog,
        listProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getListCatalog: () => dispatch({type: CATALOG.CALL_GET_LIST}),
        getListProduct: () => dispatch(productAction.getList()),
        getListSlider: () => dispatch({}),
    };
};

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;
