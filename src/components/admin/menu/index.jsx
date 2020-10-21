/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from "react";
import PropTypes from "prop-types";

// styles
import {Menu} from "antd";
import "../styles/index.css";
import {
    BarsOutlined,
    HomeOutlined,
    TeamOutlined,
    SettingOutlined,
    ShoppingOutlined,
    PictureOutlined,
    FileDoneOutlined,
} from "@ant-design/icons";
import {Route, Link, useRouteMatch} from "react-router-dom";

// util
import {KEY_MENU} from "src/components/util/keyMenu";

// const
const {SubMenu} = Menu;

function LogoAdmin() {
    return (
        <div className={"logo"}>
            <img
                src="https://adcbook.net.vn/images/config/logo_1531458031.png"
                alt="ADCBook - hotline 090419577 - Sách Văn phòng phẩm Dụng cụ học tập"
            />
        </div>
    );
}

function MenuAmin(props) {
    const {collapsed, setTitleHeader} = props;
    const match = useRouteMatch();

    /**
     * @description: Là một hàm callback gọi về hàm setTitleHeader để thay đổi title Header của web
     * @author MongLV
     * @param: event
     */
    function handleClick(event) {
        setTitleHeader(event.key);
    }

    return (
        <Route>
            <Menu
                theme="dark"
                defaultSelectedKeys={[KEY_MENU.HOME]}
                mode="inline"
                onClick={handleClick}
            >
                {!collapsed && <LogoAdmin/>}
                <Menu.Item key={KEY_MENU.HOME} icon={<HomeOutlined/>}>
                    <Link to={`${match.url}/home`}> Trang Chủ</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.CATALOG} icon={<BarsOutlined/>}>
                    Danh mục (Thể loại)
                </Menu.Item>
                <Menu.Item key={KEY_MENU.PRODUCT} icon={<ShoppingOutlined/>}>
                    Sản phẩm
                </Menu.Item>
                <Menu.Item key={KEY_MENU.TRANSACTION} icon={<FileDoneOutlined/>}>
                    Đơn đặt hàng
                </Menu.Item>
                <Menu.Item key={KEY_MENU.ODER} icon={<FileDoneOutlined/>}>
                    Hóa đơn bán
                </Menu.Item>
                <Menu.Item key={KEY_MENU.USER} icon={<TeamOutlined/>}>
                    Khách hàng
                </Menu.Item>
                <Menu.Item key={KEY_MENU.ADMIN} icon={<TeamOutlined/>}>
                    <Link to={`${match.url}/admin`}>Nhân viên</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.SLIDER} icon={<PictureOutlined/>}>
                    <Link to={`${match.url}/slider`}>Slider</Link>
                </Menu.Item>
                <SubMenu
                    key={KEY_MENU.SETTING}
                    icon={<SettingOutlined/>}
                    title="Cài đặt"
                >
                    <Menu.Item key="3">Đăng Xuất</Menu.Item>
                    <Menu.Item key="4">Cài đặt hiễn thị</Menu.Item>
                    <Menu.Item key="5">Cấu hình góc nhìn</Menu.Item>
                </SubMenu>
            </Menu>
        </Route>
    );
}

MenuAmin.propTypes = {
    collapsed: PropTypes.bool,
    setTitleHeader: PropTypes.func,
};

MenuAmin.defaultProps = {
    collapsed: false,
    setTitleHeader: () => null,
};

export default React.memo(MenuAmin);
