/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 30/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import AddAdmin from './AddAdmin';

// action
import * as Admin from 'src/action/adminAction';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        post: (data) => dispatch(Admin.callPostAdminAction(data))
    };
};

const AddAdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAdmin);

export default AddAdminContainer;
