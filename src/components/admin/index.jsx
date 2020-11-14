/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Layout, Drawer, Form, Input, InputNumber, Upload, Select, Button, Col, Row, message} from 'antd';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import md5 from 'md5';

// components
import MenuAmin from "./menu/index.jsx";
import SliderContainer from "./content/slider/SliderContainer";
import AdminContainer from "./content/admin/AdminContainer";
import CatalogView from './content/catalog/CatalogView';
import HomeAdmin from "./content/home/Home.View.jsx";

// util
import {KEY_MENU} from "src/components/util/keyMenu";

// styles
import './styles/index.css';
import {URL_API} from "src/api/config";
import getIdRandom from "src/components/util/getIdRandom";
import AddAdmin from "src/components/admin/content/admin/Modal/AddAdmin";

// const
const {Sider} = Layout;
const {Option} = Select;
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 15
    }
};

function Admin(props) {
    const {useAdmin, getUseAdmin, putAdmin} = props;
    debugger;
    // useHook
    const [form] = Form.useForm();

    // state
    const [collapsed, setCollapsed] = useState(false);
    const [titleHeader, setTitleHeader] = useState("ADCBook");
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [arrayImg, setArrayImg] = useState([]);

    // const or let
    let match = useRouteMatch();
    let history = useHistory();
    form.setFieldsValue({
        name: useAdmin && useAdmin['name'] || '',
        email: useAdmin && useAdmin['email'] || '',
        phone: useAdmin && useAdmin['phone'] && useAdmin['phone'].slice(3) || '',
    });
    const onShowDrawer = () => {
        setVisibleDrawer(true)
    };
    const onCloseDrawer = () => {
        setVisibleDrawer(false)
    };

    // func
    function handleLogin() {
        history.push('/admin-login');
    }

    function onCollapse(collapsed) {
        setCollapsed(collapsed);
    }

    function onReset() {
        form.setFieldsValue({
            name: useAdmin['name'] || '',
            email: useAdmin['email'] || '',
            phone: useAdmin['phone'] && useAdmin['phone'].slice(3) || '',
        });
        imageUpload();
    }

    function onFinish(values) {
        const data = {};
        if ((values.passwordOld && md5(values.passwordOld)) === localStorage.getItem('token_admin')) {
            data['password'] = md5(values.password);
        }
        arrayImg && arrayImg[0] && (data['avatar'] = arrayImg[0]);
        data['phone'] = values.code_phone + values.phone;
        data['email'] = values.email;
        data['name'] = values.name;
        data['_id'] = useAdmin['_id'];
        console.log(data);
        putAdmin(data);
        setVisibleDrawer(false);
    }

    function handleChange({fileList}) {
        let arrayImg = [];
        if (fileList.length > 0) {
            fileList.map((item) => {
                item.response && arrayImg.push(`${item.response.fileNameInServer}`);
                item.url && arrayImg.push(`${item.url.slice(31)}`);
            });
        }
        setArrayImg(arrayImg);
        setFileList(fileList);
    }

    function imageUpload() {
        const data = [];
        useAdmin && useAdmin['avatar'] && data.push({
            uid: getIdRandom(),
            name: useAdmin && useAdmin['avatar'].slice(8),
            status: 'done',
            url: `${URL_API.local}file/${useAdmin['avatar']}`
        });
        useAdmin && useAdmin['avatar'] && setFileList([...data])
    }

    // logic
    React.useEffect(() => {
        imageUpload();
    }, [useAdmin]);
    (useAdmin && Object.keys(useAdmin).length === 0) && getUseAdmin(localStorage.getItem('id_admin'));
    if (titleHeader === KEY_MENU.LOGOUT) {
        localStorage.removeItem('token_admin');
        localStorage.removeItem('email_admin');
        localStorage.removeItem('id_admin');
        handleLogin();
    }
    // Nếu không có token thì sẽ chuyển qua kênh khác
    if (!localStorage.getItem('token_admin')) {
        handleLogin()
    }

    // JSX
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
    const Title = (
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <h2><span>Chỉnh sửa tài khoản</span> <b>{useAdmin && useAdmin['name']}</b></h2>
        </div>
    );
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Drawer
                title={Title}
                width={"35%"}
                placement="right"
                closable={false}
                onClose={onCloseDrawer}
                visible={visibleDrawer}
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
                        name="avatar"
                        label="Avatar"
                    >
                        <Upload
                            action={`${URL_API.local}file/upload`}
                            listType={'picture-card'}
                            // onPreview={handlePreview}
                            fileList={fileList}
                            onChange={handleChange}
                        >
                            {fileList.length >= 1 ? null : (
                                <div>
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
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
                        label="Phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '80%',
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="passwordOld"
                        label="Mật khẩu cũ:"
                    >
                        <Input style={{width: '80%'}} allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu mới:"
                    >
                        <Input style={{width: '80%'}} allowClear/>
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
                                <Button
                                    onClick={onReset}
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Drawer>
            <Helmet title={`Quản trị: ${titleHeader}`}/>
            <div style={{borderRight: '14px solid #bbbbbb', background: '#001529'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <MenuAmin collapsed={collapsed} setTitleHeader={setTitleHeader} onShowDrawer={onShowDrawer}/>
                </Sider>
            </div>
            <Switch>
                <Route
                    path={`${match.url}/home`}
                    render={() => <HomeAdmin titleHeader={titleHeader}/>}
                />
                <Route
                    path={`${match.url}/slider`}
                    render={() => <SliderContainer titleHeader={titleHeader}/>}
                />
                <Route
                    exact
                    path={`${match.url}/admin`}
                    render={() => <AdminContainer titleHeader={titleHeader}/>}
                />
                <Route
                    path={`${match.url}/catalog`}
                    render={() => <CatalogView titleHeader={titleHeader}/>}
                />
                <Route
                    path={`${match.url}/product`}
                    render={() => <CatalogView titleHeader={titleHeader}/>}
                />
            </Switch>
        </Layout>
    );
}

Admin.propTypes = {
    useAdmin: PropTypes.object,
    getUseAdmin: PropTypes.func,
    putAdmin: PropTypes.func,
};

export default React.memo(Admin);
