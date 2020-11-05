/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 04/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Form, Input, Button, Checkbox, Row, Col} from 'antd';
import {URL_API} from "src/api/config";
import md5 from 'md5';
import {useHistory} from "react-router-dom";

import PropTypes from 'prop-types';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const heightWindow = window.innerHeight + 50 + "px";

function LoginAdmin(props) {
    const {login} = props;

    const [form] = Form.useForm();
    let history = useHistory();
    const _email = localStorage.getItem('email') || null;
    const _password = localStorage.getItem('password') || null;

    function handleJoin() {
        history.push('/reload');
    }

    const onFinish = (values) => {
        console.log('Success:', values);

        if (values.remember) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }

        const data = {
            'email': values.email,
            'password': md5(values.password),
        };
        login(data);
        handleJoin();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{
            paddingTop: '10%',
            backgroundImage: `url("${URL_API.local}file/login2..jpg")`,
            height: heightWindow
        }}>
            <Row>
                <Col span={10} offset={6}>
                    <div style={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc ',
                        borderRadius: '5em',
                        paddingRight: '15%',
                        marginLeft: '20%'
                    }}>
                        <div style={{paddingLeft: '20%', fontSize: '30px', color: 'red', textAlign: 'center'}}>
                            <h1>Login</h1></div>
                        <Form
                            {...layout}
                            name="basic"
                            form={form}
                            initialValues={{
                                remember: true,
                                email: _email || '',
                                password: _password || '',
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Đây không phải là một email!',
                                    },
                                    {
                                        required: true,
                                        message: 'Đây phải là một email!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Phải nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

LoginAdmin.propTypes = {
    login: PropTypes.func,
};

LoginAdmin.defaultProps = {};

export default LoginAdmin;
