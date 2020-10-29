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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    // deleteAdmin: (id) => dispatch(ProductAction.callDeleteAdminAction(id)),
    getListIdCatalog: (id) => {
      debugger; // MongLV
      return dispatch(ProductAction.getList_IdCatalog({id}))
    },
  };
};

const TableCatalogContainer = connect(
  null,
    mapDispatchToProps
)(TableCatalog);

export default React.memo(TableCatalogContainer);
