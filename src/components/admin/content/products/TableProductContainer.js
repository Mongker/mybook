/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
// Redux
import { connect } from 'react-redux';

// components
import TableCatalog from './TableProduct.jsx';

// action
import * as ProductAction from 'src/action/productAction';
import {CATALOG} from "src/action/actionTypes";

const mapStateToProps = (state) => {
  const listProduct = state.Product;
  const listCatalog = state.Catalog;
  return {
    listProduct,
    listCatalog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postProduct: (data) => dispatch(ProductAction.postProduct({data})),
    getListIdCatalog: (id) => dispatch(ProductAction.getList_IdCatalog({id})),
    deleteProduct: (id) => dispatch(ProductAction.deleteProduct({id})),
    puProduct: (id, data) => dispatch(ProductAction.putProduct({id, data})),
    getListProduct: () => dispatch(ProductAction.getList()),
    getListCatalog: () => dispatch({type: CATALOG.CALL_GET_LIST}),
  };
};

const TableProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableCatalog);

export default React.memo(TableProductContainer);
