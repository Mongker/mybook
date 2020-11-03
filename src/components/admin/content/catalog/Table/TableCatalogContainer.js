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
import TableCatalog from './TableCatalog.jsx';

// action
import * as ProductAction from 'src/action/productAction';

const mapStateToProps = (state) => {
  const listProduct = state.Product;
  return {
    listProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postProduct: (data) => dispatch(ProductAction.postProduct({data})),
    getListIdCatalog: (id) => dispatch(ProductAction.getList_IdCatalog({id})),
    deleteProduct: (id) => dispatch(ProductAction.deleteProduct({id})),
    puProduct: (id, data) => dispatch(ProductAction.putProduct({id, data})),
  };
};

const TableCatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableCatalog);

export default React.memo(TableCatalogContainer);
