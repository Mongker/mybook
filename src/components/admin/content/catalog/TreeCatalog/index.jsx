/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Menu, Button, Popover, Row, Col} from 'antd';
import {PlusCircleOutlined, ReadOutlined, SettingOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

// const
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.32).toString() + "px";

function TreeCatalog(props) {
    const {list} = props;
    const handleClick = e => {
        console.log('click ', e);
    };
    const content = (
        <Row justify="space-between" >
            <Col flex={1}><EditOutlined onClick={()=> {}} /></Col>
            &nbsp; &nbsp; &nbsp;
            <Col flex={1}><DeleteOutlined onClick={()=> {}} /></Col>
        </Row>
    );

    return (
        <Menu
            onClick={handleClick}
            style={{width: 256}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1" style={{backgroundColor: '#33c6d6'}}>
                        <span style={{color: '#fff'}}>
                            <PlusCircleOutlined/>
                            <span>Thêm</span>
                        </span>
            </Menu.Item>
            {Object.keys(list).map((id) => (
                <Menu.Item key={id}>
                        <Row justify="space-between">
                            <Col span={4}><ReadOutlined/></Col>
                            <Col span={16}><span>{list[id].name}</span></Col>
                            <Col>
                                <Popover content={content} placement="right" trigger="click" >
                                    <SettingOutlined />
                                </Popover>
                            </Col>
                        </Row>
                </Menu.Item>
            ))}
        </Menu>
    );
}

TreeCatalog.propTypes = {
    list: PropTypes.object,
};

TreeCatalog.defaultProps = {
    list: {}
};

export default TreeCatalog;
