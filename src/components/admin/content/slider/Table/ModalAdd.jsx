/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Col, Input, Modal, Row, Select} from "antd";
// import PropTypes from 'prop-types';

function ModalAdd(props) {
    const {visible, handleChangeSelect, handleText, cancelModal, handleOk, styleRow, styleCol , title, children, TYPE_TEXT} = props;
    return(
        <Modal
            visible={visible}
            closable
            onOk={handleOk}
            onCancel={cancelModal}
            // footer={null}
            closeIcon
            title={title}
            centered
        >
            <div>
                <Row style={styleRow}>
                    <Col span={3} style={styleCol}>
                        Tên:
                    </Col>
                    <Col span={21}>
                        <Input defaultValue={''} onChange={(e) => handleText(e, TYPE_TEXT.NAME)}/>
                    </Col>
                </Row>
                <Row style={styleRow}>
                    <Col span={3} style={styleCol}>
                        Link:
                    </Col>
                    <Col span={21}>
                        <Input defaultValue={''} onChange={(e) => handleText(e, TYPE_TEXT.LINK)}/>
                    </Col>
                </Row>
                <Row style={styleRow}>
                    <Col span={3} style={styleCol}>
                        Vị trí:
                    </Col>
                    <Col span={21}>
                        <Select
                            defaultValue={'NULL'}
                            // style={{ width: "30px" }}
                            onChange={handleChangeSelect}
                        >
                            {children}
                        </Select>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
}

export default React.memo(ModalAdd);
