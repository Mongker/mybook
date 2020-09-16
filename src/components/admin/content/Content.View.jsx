/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import {Row, Col, Card} from 'antd';
//  import PropTypes from 'prop-types';
import EditableTable from './table/Table.View.jsx'

function ContentAdmin() {
    return (
        <div className={'content'}>
            <EditableTable />
        </div>
    );
}

ContentAdmin.propTypes = {};

ContentAdmin.defaultProps = {};

export default ContentAdmin;
