/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

function TreeCatalog(props) {
    const handleClick = e => {
        console.log('click ', e);
    };
    return(
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1">
                        <span>
                            <MailOutlined/>
                            <span>Navigation One</span>
                        </span>
            </Menu.Item>
        </Menu>
    );
}

TreeCatalog.propTypes = {};

TreeCatalog.defaultProps = {};

export default TreeCatalog;
