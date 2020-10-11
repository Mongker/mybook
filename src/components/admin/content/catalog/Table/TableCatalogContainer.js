/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import TableCatalog from './TableCatalog';

// action
import * as AdminAction from '../../../../../action/adminAction';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAdmin: (id) => dispatch(AdminAction.callDeleteAdminAction(id))
  };
};

const TableCatalogContainer = connect(
  null,
  null
)(TableCatalog);

export default TableCatalogContainer;
