/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
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

function ModalEdit(props) {
    const [form] = Form.useForm();
    const {visible,
        handleChangeSelect,
        handleText,
        cancelModal,
        title,
        children,
        data
    } = props;
    const [_data, setData] = useState(data);

    const name = data.name ? data.name : '';
    const img = data.image_link ? data.image_link : '';
    const index = data.index ? data.index : '';

    // const [img, setImg] = useState('');
    // const [index, setIndex] = useState('NULL');
    // const [name, setName] = useState('');

    // if(_data !== data) {
    //     form.setFieldsValue({
    //         name: name,
    //         image_link: img,
    //         index: index,
    //     });
    //     setData(data);
    // }

    form.setFieldsValue({
        'name': name,
        'image_link': img,
        'index': index
    });

    const onFinish = (values) => {
        debugger; // MongLV
        handleText(values);
        onReset();
        values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        cancelModal();
    };
    console.log(index);
    console.log(img);
    console.log(index);
    console.log('---------------------------------------------------------------');
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
                    <Input />
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
export default ModalEdit;
