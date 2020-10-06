/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Button, Input, Modal, Select, Form, Row, Col, Image} from "antd";
import PropTypes from 'prop-types';
import useFile from "./useFile";

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

function ModalEdit(props) {
    const [form] = Form.useForm();
    const {visible,
        handleText,
        cancelModal,
        title,
        children,
        data
    } = props;
    const {file, setFile, linkFile, setLinkFile, postFile} = useFile();

    const name = data.name ? data.name : '';
    const img = data.image_link ? data.image_link : '';
    const index = data.index ? data.index : '';

    form.setFieldsValue({
        'name': name,
        'image_link': img,
        'index': index
    });

    const onFinish = (values) => {
        handleText(values);
        onReset();
        values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        cancelModal();
    };

    const handleFile = async (evt) => {
        evt.preventDefault();
        const fileData = evt.target.files[0];
        setFile(fileData);
        postFile(fileData);
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
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
                    <Input />
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
                    <Input
                        // type="file"
                        // name="avatar"
                        // id="avatar"
                        placeholder="chọn file"
                        onChange={handleFile}
                    />
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
                        defaultValue={index}
                        allowClear
                    >
                        {children}
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Row>
                        <Col span={18} style={{paddingLeft: '50%'}}>
                            <Button type="primary" htmlType="submit">
                                Lưu
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

ModalEdit.propsTypes = {
    visible: PropTypes.bool,

    children: PropTypes.array,

    // func
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
export default ModalEdit;
