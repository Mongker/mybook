import {render} from '@testing-library/react';
import React, {Component} from 'react';
import './style.css';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {Carousel} from 'antd';
//styles
const adcbook = require('./book.PNG');
const backgroundpink = require('./background-pink.jpg');
const ferbuarybook = require('./ferbuary-book.png');

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

function Header() {
    return (
        <div className={'header'}>
            <div className={'list-menu-item'}>
                <img src={adcbook} alt="" className={'book-logo'} href='#'/>
                <ul className={'menu'}>
                    <li>
                        <Dropdown overlay={home}>
                            <a className={"home-menu"} onClick={e => e.preventDefault()}>
                                Home <DownOutlined/>
                            </a>
                        </Dropdown>
                    </li>
                    <li><a href="#" className={'categories-menu'}>Categories</a></li>
                    <li>
                        <Dropdown overlay={shop}>
                            <a className={"shop-menu"} onClick={e => e.preventDefault()}>
                                Shop <DownOutlined/>
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={page}>
                            <a className="pages-menu" onClick={e => e.preventDefault()}>
                                Pages <DownOutlined/>
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={blog}>
                            <a className={"blog-menu"} onClick={e => e.preventDefault()}>
                                Blog <DownOutlined/>
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={others}>
                            <a className={"others-menu"} onClick={e => e.preventDefault()}>
                                Others <DownOutlined/>
                            </a>
                        </Dropdown>
                    </li>
                </ul>
                <Search placeholder="input search text" onSearch={onSearch} style={{width: 600}} className={'search'}/>
            </div>

            <Carousel autoplay>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    );

}

Header.propsType = {}
export default Header;
