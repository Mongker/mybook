import React from 'react';
import './style/style.css';
import {Menu, Dropdown, Col, Card, Image} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {Carousel} from 'antd';
import PropTypes from 'prop-types';
import {URL_API} from "src/api/config";

//styles
const adcbook = require('./img/book.PNG');
//const backgroundpink = require('../img/background-pink.jpg');
const ferbuarybook = require('./img/ferbuary-book.png');
const shoppingcart = require('./img/shopping-cart.png');

//search
const {Search} = Input;
const onSearch = value => console.log(value);
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
//const
const {SubMenu} = Menu;
const home = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Home v1
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Home v2
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Home v3
            </a>
        </Menu.Item>

    </Menu>
);
const shop = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Shop list

            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Single Product
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Shop cart
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Shop my account
            </a>
        </Menu.Item>

    </Menu>
);
const page = (
    <div className={'page-antd'}>

        <Menu>
            <Menu.ItemGroup title="Home">
                <Menu.Item>Home v1</Menu.Item>
                <Menu.Item>Home v2</Menu.Item>
            </Menu.ItemGroup>


            <Menu.ItemGroup title="Single Product">
                <Menu.Item>Home v1</Menu.Item>
                <Menu.Item>Home v2</Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup title="Shop List">
                <Menu.Item>Home v1</Menu.Item>
                <Menu.Item>Home v2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Others">
                <Menu.Item>Home v1</Menu.Item>
                <Menu.Item>Home v2</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    </div>
);

const blog = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                blog
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Blog single
            </a>
        </Menu.Item>


    </Menu>
);
const others = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                About us
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Author List
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Contact us
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                FAQ
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Terms and Services
            </a>
        </Menu.Item>

    </Menu>
);
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Header(props) {
    const {listCatalog} = props;
    return (
        <div className={'header'}>
            <div className={'class-list-menu'}>
                <ul className={'list-ul-up-menu'} >
                    <li className={'after-text-list'}><a href="#">Tin tức </a></li>
                    <li className={'after-text-list'}><a href="#">Hỏi đáp </a></li>
                    <li className={'after-text-list'}><a href="#">Hệ thống cửa hàng </a></li>
                    <li className={'after-text-list'}><a href="#">Đăng ký </a></li>
                    <li ><a href="#">Đăng nhập </a></li>
                </ul>
            </div>

            <div className={'up-menu'}>
                <img src={adcbook} alt="" className={'book-logo'} href='#'/>
                <Search placeholder="input search text" onSearch={onSearch} style={{width: 600}} className={'search'}/>
                <a href="#" className={'img-shopping'}>
                    <img src={shoppingcart} alt=""/>
                    <p className={'text-shopping'}>Giỏ hàng của bạn</p>
                    <span className={'number-shopping'}>0</span>
                </a>
            </div>
            <Menu
                // onClick={this.handleClick}
                // selectedKeys={[current]}
                theme={'dark'}
                mode="horizontal"
            >
                <Menu.Item key="home" >
                    Trang chủ
                </Menu.Item>
                {
                    Object.keys(listCatalog).length > 0 && Object.keys(listCatalog).map((item, index) => (
                        <Menu.Item key={listCatalog[item].name} >
                            {listCatalog[item].name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </div>

    );

}

Header.propsType = {
    listCatalog: PropTypes.object,
};
Header.defaultProps = {
    listCatalog: {}
};
export default Header;
