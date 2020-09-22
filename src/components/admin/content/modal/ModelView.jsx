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
    const {handShowCancel, handleOk, visible, ContentModal, title, postSlider, dataEdit} = props;
    const onChangeOK = () => {
        const {name, image_link, index} = data;
        if(name && image_link && index) {
            postSlider(data);
            handleOk();
            setData({});
        } else {
            message.warning('Cần điền đầy đủ thông tin Tên, Link và vị trí');
            setData({})
        }
    };
    const onShowCancel = () => {
        handShowCancel();
        setData({});
    };
    return(
        <>
            <Modal
                visible={visible}
                closable
                onOk={onChangeOK}
                onCancel={onShowCancel}
                // footer={null}
                closeIcon
                title={title}
                centered
            >
                <ContentModal data={data} setData={setData} dataEdit={dataEdit} />
            </Modal>
        </>
    );
}

ModelView.propTypes = {
    handleOk: PropTypes.func,
    handShowCancel: PropTypes.func,
    ContentModal: PropTypes.func,
    dataEdit: PropTypes.object
};

ModelView.defaultProps = {
    handleOk: () => null,
    handShowCancel: () => null,
    dataEdit: {},
};

export default React.memo(ModelView);
