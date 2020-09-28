/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
// import PropTypes from 'prop-types';

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

function EditAdmin(props) {
    const [form] = Form.useForm();
    const {visible, disabledModal} = props;

    const onFinish = (values) => {
        // handleText(values);
        onReset();
        values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        disabledModal();
    };
    return(
        <Modal
            visible={visible}
            closable
            footer={null}
            closeIcon
            // title={title}
            title={'Edit'}
            centered
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="image_link"
                    label="avatar"
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
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Email không được để trống'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Email không được để trống'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                {/*<Form.Item*/}
                {/*    name="index"*/}
                {/*    label="Vị trí"*/}
                {/*    rules={[*/}
                {/*        {*/}
                {/*            required: true,*/}
                {/*            message: 'Vị trí không được để trống'*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*>*/}
                {/*    <Select*/}
                {/*        defaultValue={index}*/}
                {/*        allowClear*/}
                {/*    >*/}
                {/*        {children}*/}
                {/*    </Select>*/}
                {/*</Form.Item>*/}

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

EditAdmin.propTypes = {};

EditAdmin.defaultProps = {};

export default EditAdmin;
