/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 04/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';
import LoginAdmin from 'src/components/admin/content/login/LoginAdmin';

// api
import * as adminAction  from 'src/action/adminAction'
import Reload from "src/components/admin/content/login/Reload";

// components

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getUseAdmin: (id) => dispatch(adminAction.getAdminIdAction({id})),
  };
};

const ReloadContainer = connect(
  null,
  mapDispatchToProps
)(Reload);

export default ReloadContainer;
