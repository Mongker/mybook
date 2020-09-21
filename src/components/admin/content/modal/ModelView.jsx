/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 17/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import {Modal, message} from "antd";
import PropTypes from 'prop-types';

// const
const dataDefault = {};
function ModelView(props) {
    const [data, setData] = useState(dataDefault);
    const {handShowCancel, handleOk, visible, ContentModal, title, postSlider} = props;
    const onChangeOK = () => {
        const {name, image_link, index} = data;
        if(name && image_link && index) {
            postSlider(data);
            handleOk()
        } else message.warning('Cần điền đầy đủ thông tin Tên, Link và vị trí');
    };
    return(
        <>
            <Modal
                visible={visible}
                closable
                onOk={onChangeOK}
                onCancel={handShowCancel}
                // footer={null}
                closeIcon
                title={title}
                centered
            >
                <ContentModal data={data} setData={setData} />
            </Modal>
        </>
    );
}

ModelView.propTypes = {
    handleOk: PropTypes.func,
    handShowCancel: PropTypes.func,
    ContentModal: PropTypes.func
};

ModelView.defaultProps = {
    handleOk: () => null,
    handShowCancel: () => null,
};

export default React.memo(ModelView);
