/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 30/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */


import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Switch, message, Modal, Input, Row, Select, InputNumber } from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import md5 from 'md5';
import {CopyTwoTone} from '@ant-design/icons';
// import PropTypes from 'prop-types';

// util
import {OptionPosition} from './config';

const layout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};
const {Option} = Select;
const PassDefault = 'Nhom9@2020';

function AddAdmin(props) {
    const [form] = Form.useForm();
    const {visible, disabledModal, post} = props;
    // const {name, _id, status, position, avatar, email, info, phone} = data;

    const [visibleCopy, setVisibleCopy] = useState(false);
    const onFinish = (values) => {
        const {avatar, email, name,code_phone, phone, position, status} = values;
        const newData = {
            avatar: avatar,
            email: email,
            // info: info,
            name: name,
            phone: `${code_phone}${phone}`,
            position: position,
            password: md5(PassDefault),
            status: true,
         };
        post({...newData});
        console.log(newData);
        onReset();
        values.preventDefault();
    };

    form.setFieldsValue({
        password: PassDefault
    });

    const onReset = () => {
        form.resetFields();
        disabledModal();
        setVisibleCopy(false);
    };

    const handleResetPass = () => {
        form.setFieldsValue({
            password: md5(PassDefault)
        });
        setVisibleCopy(!visibleCopy);
        message.success('Đã Reset');
    };
    const handleSwitch = (checked) => {
        form.setFieldsValue({
            status: checked
        });
    };

    const handleSelect = (value) => {
        console.log(`selected ${value}`);
        form.setFieldsValue({
            position: value
        });
    };

    const prefixSelector = (
        <Form.Item name="code_phone" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="+86">+86</Option>
                <Option value="+87">+87</Option>
                <Option value="+84">+84</Option>
            </Select>
        </Form.Item>
    );

    const onChangePhone = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        console.log(value.replace(/0*(\d+)/, '$1'));
        form.setFieldsValue({
            phone: value.replace(/0*(\d+)/, '$1')
        })
    };

    return (
        <Modal
            visible={visible}
            closable
            footer={null}
            closeIcon
            // title={title}
            title={"Thêm nhân viên mới"}
            centered
        >
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                initialValues={{
                    code_phone: '+84',
            }}>
                <Form.Item
                    name="name"
                    label="Họ và tên"
                    rules={[
                        {
                            required: true,
                            message: 'Họ và tên phải được nhập ký tự'
                        },
                        {
                            type: "string",
                            message: "Đây phải là một string!"
                        }
                    ]}
                >
                    <Input style={{width: '80%'}} allowClear/>
                </Form.Item>
                <Form.Item
                    name="avatar"
                    label="Link Avatar"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống'
                        },
                        {
                            type: "url",
                            message: "Đây phải là một đường dẫn !"
                        }
                    ]}
                >
                    <Input style={{width: '80%'}} allowClear />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống'
                        },
                        {
                            type: "email",
                            message: "Đây phải là một định dạng E-mail!"
                        }
                    ]}
                >
                    <Input style={{width: '80%'}} allowClear/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        // onChange={onChangePhone}
                        addonBefore={prefixSelector}
                        style={{
                            width: '80%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Mật khẩu:"
                >
                    <div style={{width: '80%'}}>
                        <Input value={PassDefault} allowClear disabled style={{width: '80%'}} />
                        <CopyToClipboard text={PassDefault} style={{width: '20%'}}>
                            <Button type={'large'} onClick={() => message.success(`Copy thành công: ${PassDefault}`, 1)}>
                                <CopyTwoTone/>
                            </Button>
                        </CopyToClipboard>
                    </div>
                </Form.Item>
                <Form.Item
                    name="position"
                    label="Phân quyền"
                    rules={[
                        {
                            required: true,
                            message: 'Không được phép để trống'
                        }
                    ]}
                >
                    <Select defaultValue={'-----------Chọn-----------'} style={{width: '60%'}} onChange={handleSelect}>
                        <Option value={OptionPosition.ADMIN}>{OptionPosition.ADMIN}</Option>
                        <Option value={OptionPosition.EXCEL}>{OptionPosition.EXCEL}</Option>
                        <Option value={OptionPosition.USER}>{OptionPosition.USER}</Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Row style={{
                        alignItems: 'center',
                    }}>
                        <Col style={{paddingRight: '20px'}}>
                            <Button type="primary" htmlType="submit">
                                Thêm
                            </Button>
                        </Col>
                        <Col style={{paddingLeft: '20px'}}>
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

AddAdmin.propTypes = {};

AddAdmin.defaultProps = {};

export default AddAdmin;
