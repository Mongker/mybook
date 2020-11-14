import React, {useState} from 'react';
import './style/style.css';
import {
    Menu,
    Row,
    Col,
    Drawer,
    Dropdown,
    message,
    BackTop,
    Badge,
    Modal,
    Image,
    Popover,
    InputNumber,
    Popconfirm
} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Input, Button, Form} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {Carousel} from 'antd';
import PropTypes from 'prop-types';
import {URL_API} from "src/api/config";
import {
    LoginOutlined,
    QuestionCircleOutlined,
    AppstoreTwoTone,
    DeleteTwoTone,
    CloudUploadOutlined
} from '@ant-design/icons';
import {KEY_MENU} from "src/components/util/keyMenu";

//styles
const adcbook = require('./img/book.PNG');
//const backgroundpink = require('../img/background-pink.jpg');
const ferbuarybook = require('./img/ferbuary-book.png');
const shoppingcart = require('./img/shopping-cart.png');
const _witdh = (window.innerWidth * 0.8).toString() + 'px';
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.32).toString() + "px";
const COL_SPAN = {
    img: 3,
    name: 4,
    price: 3,
    amount: 3,
    vote_user: 5,
    view_user: 3,
    event: 3,
};
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
//search
const {Search} = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

//const

function Header(props) {
    const {listCatalog, setSearchLocal, showDrawer, user, titleHeader = '', logOut, listProduct = {}, cart = {}, deleteCart, putCart, setTitleHeader, datMua} = props;
    const [visible, setVisible] = React.useState(false);
    const [visibleDonHang, setVisibleDonHang] = React.useState(false);
    const [newListProduct, setNewListProduct] = React.useState(listProduct);
    const [newListCart, setNewListCart] = React.useState(cart);
    const [listIdProduct, setListIdProduct] = React.useState([]);
    const [form] = Form.useForm();
    const onSearch = value => {
        setSearchLocal(value)
    };
    const name_user = localStorage.getItem('name_user') || '';
    React.useEffect(() => {
        setNewListProduct(listProduct)
    }, [listProduct]);
    form.getFieldsValue({
        config: {
            name: user && user.name || '',
            email: user && user.email || '',
            phone: user && user.name || '',
            address: user && user.address || '',
        },
    });
    function LogOut() {
        localStorage.removeItem('token_user');
        localStorage.removeItem('id_user');
        localStorage.removeItem('name_user');
        message.success('Đăng xuất thành công');
        logOut();
    }

    React.useEffect(() => {
        let arrayData = [];
        Object.keys(cart).length > 0 && Object.keys(cart).map((item, index) => arrayData.push(cart[item].product_id));
        setListIdProduct(arrayData);
        setNewListCart(cart);
    }, [cart]);

    function onInputNumber(value, index) {
        console.log('changed', value);
        console.log('index', index);
        const id = Object.keys(cart)[index];
        const data = {...newListCart};
        data[id].amount = value;
        console.log(data);
        setNewListCart(data);
    }

    function handlePutCart(index, check) {
        const id = Object.keys(cart)[index];
        const data = {...newListCart[id]};
        data.status = !check;
        putCart(id, data);
        // handleOkDonHang(id, data);
    }

    async function handleDatMua() {
        if(Object.keys(newListCart).length > 0 ){
            await Object.keys(newListCart).map((item, index)=> {
                const dataObj = {...newListCart};
                dataObj[item].status = true;
                putCart(item, dataObj[item]);
            });
            // datMua(newListCart);
        }
    }

    function handleDeleteCart(index) {
        const id = Object.keys(cart)[index];
        deleteCart(id)
    }

    function handleOk() {
        setVisible(true);
    }
    function handleOkDonHang(id, data) {
        setVisibleDonHang(true);
    }
    function onFinish(values) {
        console.log(values)
    }

    function handleCancel() {
        setVisible(false);
    }
    function handleCancelDonHang() {
        setVisibleDonHang(false);
    }

    const handleClick = e => {
        if (e.key === 'LOGOUT_USER_VIEW') {
            LogOut();
        }
    };
    const handleMenu = e => {
        setTitleHeader(e.key);
    };
    // JSX
    const menu = (
        <Menu onClick={handleClick}>
            <Menu.Item style={{fontSize: 14}} icon={<LogoutOutlined style={{fontSize: 14, color: 'red'}}/>}
                       key={'LOGOUT_USER_VIEW'}>Đăng Xuất</Menu.Item>
        </Menu>
    );
    return (
        <div className={'header'}>
            <Row>
                {/*[kJoPF]-logo.png*/}
                <Col span={4}><img src={adcbook} alt="" className={'book-logo'} href='#'/></Col>
                <Col span={15}><Search size="large" style={{paddingLeft: '27%', paddingTop: '30px', width: '90%'}}
                                       placeholder="input search text" onSearch={onSearch} enterButton/></Col>
                <Col span={2} style={{paddingTop: '23px'}}>
                    <div className={'img-shopping'} onClick={handleOk}>
                        <Badge count={Object.keys(cart).length}>
                            <img src={shoppingcart} alt=""/>
                        </Badge>
                    </div>
                </Col>
                {
                    (Object.keys(user).length > 0 && user['name'] || name_user) ? (
                        <Col span={2} style={{paddingTop: '23px'}}>
                            <Dropdown overlay={menu}>
                                <b className={'img-user'}>
                                    Chào {name_user}
                                </b>
                            </Dropdown>
                        </Col>
                    ) : (<Col span={2} style={{paddingTop: '23px'}}>
                        <div className={'img-login'} onClick={showDrawer}><LoginOutlined
                            style={{fontSize: '20px', paddingLeft: '7px'}}/><a href="#">Đăng nhập</a></div>
                    </Col>)
                }

            </Row>
            {/*<div className={'up-menu'}>*/}
            {/*    /!*<img src={adcbook} alt="" className={'book-logo'} href='#'/>*!/*/}
            {/*    <Search placeholder="input search text" onSearch={onSearch} style={{width: 600}} className={'search'}/>*/}
            {/*    <a href="#" className={'img-shopping'}>*/}
            {/*        <img src={shoppingcart} alt=""/>*/}
            {/*        <p className={'text-shopping'}>Giỏ hàng của bạn</p>*/}
            {/*        <span className={'number-shopping'}>0</span>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <Menu
                onClick={handleMenu}
                selectedKeys={[titleHeader]}
                style={{backgroundColor: '#db1321'}}
                theme={'light '}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <b> Trang chủ</b>
                </Menu.Item>
                {
                    Object.keys(listCatalog).length > 0 && Object.keys(listCatalog).map((item, index) => (
                        <Menu.Item key={item}>
                            <b> {listCatalog[item].name}</b>
                        </Menu.Item>
                    ))
                }
            </Menu>
            <Modal
                // title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={_witdh}
                heigth={500}
            >
                <Row className={'table-header-catalog'}>
                    <Col className={'table-row-catalog'} span={COL_SPAN.img}>
                        Hình ảnh
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.name}>
                        Tên sách
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.price}>
                        Giá tiền
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.amount}>
                        Hàng còn
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.view_user}>
                        Số lượng đặt mua
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                        Tổng tiền
                    </Col>
                    <Col className={'table-row-catalog'} span={COL_SPAN.event}>
                        Hành động
                    </Col>
                </Row>
                <div style={{overflow: 'auto', height: heightWindow, width: 'auto'}}>
                    {Object.keys(cart).length > 0 ? (
                        Object.keys(cart).map((item, index) => (
                            <Row className={'table-tr-catalog'} key={index}>
                                <Col className={'table-row-catalog'} span={COL_SPAN.img}>
                                    <Image
                                        width={60}
                                        height={80}
                                        // src={list[item].image_link[0]}
                                        src={URL_API.local + 'file/' + (listProduct[cart[item].product_id]).image_link[0]}
                                        fallback={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
                                    />
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.name}>
                                    <Row>
                                        <b>{listProduct[cart[item].product_id].name}</b>
                                    </Row>
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.price}>
                                    {`${listProduct[cart[item].product_id].price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.amount}>
                                    {listProduct[cart[item].product_id].amount}
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.view_user}>
                                    <InputNumber min={1} max={10000} defaultValue={cart[item].amount}
                                                 onChange={(value) => onInputNumber(value, index)}/>
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                                    {/*{newListProduct[item].sumMoney ? newListProduct[item].sumMoney : (newListProduct[item].price*cart.listIdProduct[index].amount)}*/}
                                    {/*<CatalogText id={listProduct[item].catalog_id}/>*/}
                                    {`${cart && cart[item].amount * listProduct[cart[item].product_id].price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ
                                </Col>
                                <Col className={'table-row-catalog'} span={COL_SPAN.event}>
                                    <Row justify="space-between">
                                        <Col flex={1}>
                                            <Button
                                                className={'editTwoTone'}
                                                onClick={() => handlePutCart(index, cart[Object.keys(cart)[index]].status)}
                                                type={cart[Object.keys(cart)[index]].status ? 'dashed': 'primary'}
                                                style={{width: 95, height: 32}}
                                                // disabled={}
                                            >
                                                {cart[Object.keys(cart)[index]].status ? 'Hủy mua' : 'Đặt mua' }
                                            </Button>
                                        </Col>
                                        <Col flex={1}>
                                            <Popconfirm
                                                title="Bạn muốn xóa ra khỏi giỏ hàng？"
                                                okText="Phải"
                                                cancelText="Không"
                                                onConfirm={() => handleDeleteCart(index)}
                                                icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                                            >
                                                <Button
                                                    danger
                                                    type={'primary'}
                                                    className={'editTwoTone'}
                                                    style={{width: 95, height: 32}}
                                                >
                                                    Xóa
                                                </Button>
                                            </Popconfirm>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>)
                        )
                    ) : null
                    }
                </div>
                {/*<Row>*/}
                {/*    <Col span={8} />*/}
                {/*    <Col span={8} style={{*/}
                {/*        textAlign: 'center',*/}
                {/*        alignItems: 'center',*/}
                {/*    }}>*/}
                {/*        <div type={'primary'} className={'thanh-toan'} style={{*/}
                {/*            fontSize: '30px',*/}
                {/*            color: '#fff',*/}
                {/*            border: '1px solid #ccc!important',*/}
                {/*            backgroundColor: '#3532d6',*/}
                {/*            borderRadius: '16px'*/}
                {/*        }}*/}
                {/*             onClick={handleDatMua}*/}
                {/*        >Đặt mua*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col span={8} />*/}
                {/*</Row>*/}
            </Modal>
            <Modal
                title="Xác nhận đơn hàng"
                visible={visibleDonHang}
                onOk={handleOkDonHang}
                onCancel={handleCancelDonHang}
                footer={null}
            >
                <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['config', 'name']} label="Họ Tên" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['config', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name={['config', 'phone']} label="Số điện thoại" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['config', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['message']} label="Tin nhắn" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <BackTop/>
        </div>

    );

}

Header.propsType = {
    listCatalog: PropTypes.object,
    user: PropTypes.object,
    showDrawer: PropTypes.func,
};
Header.defaultProps = {
    listCatalog: {},
    user: {}
};
export default Header;
