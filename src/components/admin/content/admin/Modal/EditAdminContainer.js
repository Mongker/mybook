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
import EditAdmin from './EditAdmin';

// action
import * as Admin from 'src/action/adminAction';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    update: (data) => dispatch(Admin.callPutAdminAction(data))
  };
};

const EditAdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAdmin);

export default EditAdminContainer;
