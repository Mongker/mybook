/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

// import {BarsOutlined} from "@ant-design/icons";

function HeaderAdmin(props) {
    const {title} = props;
    return (
        <Row className={'header-content'}>
            <Col span={6} style={{paddingLeft: '10px'}}><h1>{title}</h1></Col>
        </Row>
    );
}

HeaderAdmin.propTypes = {
    title: PropTypes.string,
};

HeaderAdmin.defaultProps = {
    title: 'Trang Chủ'
}

export default HeaderAdmin;
