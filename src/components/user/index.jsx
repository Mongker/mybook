/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Header from './header.jsx'
import Content from './content.jsx';
import Footer from './footer.jsx';
import PropTypes from 'prop-types';
// import AddAdmin from "src/components/admin/content/admin/Modal/AddAdmin";
import md5 from 'md5';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import DetailProduct from './detailproduct.jsx';
import {Button, Checkbox, Drawer, Form, Input, message} from "antd";
// const
const {TextArea} = Input;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
        offset: 4
    },
};
const tailLayout = {
    // wrapperCol: {
    //     offset: 9,
    //     span: 17,
    // },
};

function User(props) {
    const {getListCatalog, getListProduct, listProduct, listCatalog, getListSlider, listSlider, postUser, loginUser, user, logOut, postCart, cartUsr, cart = {}, deleteCart, putCart, datMua, getUser} = props;
    const [visible, setVisible] = React.useState(false);
    const [switchBtn, setSwitchBtn] = React.useState(true);
    const [titleHeader, setTitleHeader] = React.useState('home');
    const [searchLocal, setSearchLocal] = React.useState('');
    const [arrayProduct, setArrayProduct] = React.useState([]);
    const [form] = Form.useForm();
    const [form2] = Form.useForm();

    React.useEffect(() => {
        setArrayProduct(Object.keys(listProduct));
    }, [listCatalog]);

    function switchLoginVsRe() {
        setSwitchBtn(!switchBtn);
    }
    let newList = [];
    if(titleHeader !== 'home') {
        newList = Object.keys(listProduct).filter((item) => (listProduct[item].catalog_id.toLowerCase().indexOf(titleHeader.toLowerCase()) !== -1))
    } else newList = Object.keys(listProduct);

    // setArrayProduct(newList);

    // React.useEffect(() => {
    //
    // }, [titleHeader]);

    function showDrawer() {
        setVisible(true);
    }

    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        form.getFieldsValue({
            email: localStorage.getItem('email'),
            password: localStorage.getItem('email'),
        });
        // loginUser({
        //     email: localStorage.getItem('email'),
        //     password: localStorage.getItem('40bcf17672af256346ad0d5e80b007a4'),
        // })
    }

    function onClose() {
        setVisible(false);
        form.resetFields();
        form2.resetFields();
    }

    function onFinish(values) {
        values.password = md5(values.password);
        if (values.remember) {
            localStorage.setItem('password', values.password);
            localStorage.setItem('email', values.email);
        }
        debugger; // MongLV
        values && loginUser(values, onClose);
        form.resetFields();
        form2.resetFields();
    }

    function onFinishSignUp(values) {
        if (values.password === values.passwordCheck) {
            values.password = md5(values.password);
            debugger; // MongLV
            postUser(values);
        } else if (values.password !== values.passwordCheck) {
            message.error('Mật khẩu không khớp nhau');
            debugger; // MongLV
        }
    }


    React.useEffect(() => {
        getListCatalog();
        getListProduct();
        getListSlider();
        cartUsr();
        getUser();
        setArrayProduct(Object.keys(listProduct));
    }, []);

    return (
        <div className="App">
            <Header listCatalog={listCatalog} listProduct={listProduct} showDrawer={showDrawer} user={user}
                    logOut={logOut} cart={cart} deleteCart={deleteCart} putCart={putCart} datMua={datMua}
                    setSearchLocal={setSearchLocal} setTitleHeader={setTitleHeader} user={user}
                    titleHeader={titleHeader}
            />
            <Content arrayProduct={newList} listProduct={listProduct} listSlider={listSlider} postCart={postCart}/>
            {/*<DetailProduct />*/}
            <Footer/>
            <Drawer
                // title="Basic Drawer"
                width={"30%"}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                style={{position: 'absolute'}}
            >
                <div style={{
                    textAlign: 'center',
                    alignItems: 'center',
                }}><h1><b style={{color: 'red'}}>{switchBtn ? 'Đăng nhập' : 'Đăng Ký'}</b></h1></div>
                {
                    switchBtn ? (
                        <Form
                            {...layout}
                            name="basic"
                            form={form}
                            initialValues={{
                                remember: true,
                                // email: _email || '',
                                // password: _password || '',
                            }}
                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                // label="Email:"
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
                                <Input prefix={<UserOutlined/>} placeholder={'Email người dùng'}/>
                            </Form.Item>

                            <Form.Item
                                // label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Phải nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined/>} placeholder={'Mật khẩu người dùng'}/>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                                <Button type="primary" danger htmlType="button" style={{
                                    marginLeft: '65px',
                                    width: '100px'
                                }}
                                        onClick={switchLoginVsRe}
                                >
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    ) : (
                        <Form
                            {...layout}
                            name="basic"
                            form={form2}
                            initialValues={{
                                remember: true,
                                // email: _email || '',
                                // password: _password || '',
                            }}
                            onFinish={onFinishSignUp}
                            // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                // label="Email:"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống tên người dùng',
                                    },
                                ]}
                            >
                                <Input placeholder={'Tên người dùng'}/>
                            </Form.Item>
                            <Form.Item
                                // label="Email:"
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
                                <Input placeholder={'Email người dùng'}/>
                            </Form.Item>

                            <Form.Item
                                // label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Phải nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder={'Mật khẩu người dùng'}/>
                            </Form.Item>
                            <Form.Item
                                // label="Password"
                                name="passwordCheck"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Phải xác nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder={'Xác nhận mật khẩu người dùng'}/>
                            </Form.Item>
                            <Form.Item
                                // label="Email:"
                                name="phone"
                                rules={[
                                    // {
                                    //     type: 'number',
                                    //     message: 'Đây phải là số',
                                    // },
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống số điện thoại',
                                    },
                                ]}
                            >
                                <Input placeholder={'Số điện thoại'}/>
                            </Form.Item>
                            <Form.Item
                                // label="Email:"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống địa chỉ',
                                    }
                                ]}
                            >
                                <TextArea placeholder={'Địa chỉ nơi bạn ở'}/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" style={{width: '100px'}} htmlType="submit">
                                    Tạo
                                </Button>
                                <Button type="primary" danger htmlType="button" style={{
                                    marginLeft: '65px',
                                    width: '100px'
                                }}
                                        onClick={switchLoginVsRe}
                                >
                                    Quay lại
                                </Button>
                            </Form.Item>
                        </Form>
                    )
                }
            </Drawer>
        </div>
    );
}

User.propTypes = {
    getListCatalog: PropTypes.func,
    getListProduct: PropTypes.func,
    getListSlider: PropTypes.func,
    postCart: PropTypes.func,
    logOut: PropTypes.func,
    postUser: PropTypes.func,
    loginUser: PropTypes.func,
    cartUsr: PropTypes.func,
    putCart: PropTypes.func,
    datMua: PropTypes.func,
    deleteCart: PropTypes.func,
    listProduct: PropTypes.object,
    listCatalog: PropTypes.object,
    listSlider: PropTypes.object,
};

User.defaultProps = {
    getListCatalog: () => null,
    getListProduct: () => null,
    getListSlider: () => null,
    postUser: () => null,
    loginUser: () => null,
    cartUsr: () => null,
    listProduct: {},
    listSlider: {},
    listCatalog: {},
    user: {},
};

export default User;
