/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 17/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Modal} from "antd";
import PropTypes from 'prop-types';

function ModelView(props) {
    const {handShowCancel, handleOk, visible} = props;
    return(
        <>
            <Modal
                visible={visible}
                closable
                onOk={handleOk}
                onCancel={handShowCancel}
                // footer={null}
                closeIcon
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}

ModelView.propTypes = {
    handleOk: PropTypes.func,
    handShowCancel: PropTypes.func
};

ModelView.defaultProps = {
    handleOk: () => null,
    handShowCancel: () => null,
};

export default ModelView;
