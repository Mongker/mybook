/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import AdminView from "./AdminView";

// action type
import { ADMIN } from "../../../../action/actionTypes";

const mapStateToProps = state => {
  return {};
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
