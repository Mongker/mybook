/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Button, Input, Modal, Select, Form, Row, Col} from "antd";
import PropTypes from 'prop-types';

// const
const layout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

function ModalAdd(props) {
    const [form] = Form.useForm();
    const {visible, handleChangeSelect, handleText, cancelModal, title, children, TYPE_TEXT} = props;
    // TODO by MongV: xử dụng From để bao các input lại để reset text
    const onFinish = (values) => {
        handleText(values);
        onReset();
        values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        cancelModal();
    };

    return (
        <Modal
            visible={visible}
            closable
            footer={null}
            closeIcon
            title={title}
            centered
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={(value) => onFinish(value, TYPE_TEXT.ADD)}>

                <Form.Item
                    name="name"
                    label="Tên"
                    rules={[
                        {
                            required: true,
                            message: 'Tên không được để trống'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="image_link"
                    label="Link Ảnh"
                    rules={[
                        {
                            required: true,
                            message: 'Link không được để trống'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="index"
                    label="Vị trí"
                    rules={[
                        {
                            required: true,
                            message: 'Vị trí không được để trống'
                        }
                    ]}
                >
                    <Select
                        defaultValue={'NULL'}
                        // style={{ width: "30px" }}
                        onChange={handleChangeSelect}
                        allowClear
                    >
                        {children}
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Row>
                        <Col span={18} style={{paddingLeft: '50%'}}>
                            <Button type="primary" htmlType="submit">
                                Thêm
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Button onClick={onReset}>
                                Đóng
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
    );
}

ModalAdd.propsTypes = {
    visible: PropTypes.bool,

    children: PropTypes.array,

    // func
    handleChangeSelect: PropTypes.func,
    handleText: PropTypes.func,
    cancelModal: PropTypes.func,
    handleOk: PropTypes.func,
    // object
    styleRow: PropTypes.object,
    styleCol: PropTypes.object,
    TYPE_TEXT: PropTypes.object,

    // string
    title: PropTypes.string,
};
export default React.memo(ModalAdd);
