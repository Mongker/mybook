/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 04/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {getLoginAdmin} from "src/api/admin/login";
// import PropTypes from 'prop-types';

async function checkLoginAdmin(Component) {
    return <Component />;
}

checkLoginAdmin.propTypes = {};

checkLoginAdmin.defaultProps = {};

export default checkLoginAdmin;
