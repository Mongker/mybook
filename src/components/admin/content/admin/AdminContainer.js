/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import AdminView from "./AdminView";

// action type
import {ADMIN} from "src/action/actionTypes";

const mapStateToProps = state => {
  const listAdmin = state.Admin;
  return {
    listAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch({type: ADMIN.CALL_GET_LIST})
  };
};

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);

export default AdminContainer;
