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
import { Avatar, Menu } from "antd";
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

// const
const { SubMenu } = Menu;
const KEY_MENU = {
    HOME: "Trang Chủ",
    CATALOG: "Danh Mục",
    PRODUCT: "Sản Phẩm",
    SLIDER: "SLIDER",
    TRANSACTION: "Đơn Đặt Hàng",
    ODER: "Hóa Đơn Bán",
    ANDMIN: "Nhân Viên",
    USER: "Khách Hàng",
    SETTING: "Cài Đặt",
};
function LogoAdmin(){
    return (
        <div className="logo">
            <img
              src="https://adcbook.net.vn/images/config/logo_1531458031.png"
              alt="ADCBook - hotline 090419577 - Sách Văn phòng phẩm Dụng cụ học tập"
            />
          </div>
    );
};

function MenuAmin(props) {
  const { collapsed, setTitleHeader } = props;
  const handleClick = e => {
    console.log('click ', e);
    setTitleHeader(e.key)
  };
  return (
    <React.Fragment>
      <Menu theme="dark" defaultSelectedKeys={[KEY_MENU.HOME]} mode="inline" onClick={handleClick}>
        {!collapsed && (<LogoAdmin />)}
        <Menu.Item key={KEY_MENU.HOME} icon={<HomeOutlined />}>
          Trang Chủ
        </Menu.Item>
        <Menu.Item key={KEY_MENU.CATALOG} icon={<BarsOutlined />}>
          Danh mục (Thể loại)
        </Menu.Item>
        <Menu.Item key={KEY_MENU.PRODUCT} icon={<ShoppingOutlined />}>
          Sản phẩm
        </Menu.Item>
        <Menu.Item key={KEY_MENU.TRANSACTION} icon={<FileDoneOutlined />}>
          Đơn đặt hàng
        </Menu.Item>
        <Menu.Item key={KEY_MENU.ODER} icon={<FileDoneOutlined />}>
          Hóa đơn bán
        </Menu.Item>
        <Menu.Item key={KEY_MENU.USER} icon={<TeamOutlined />}>
          Khách hàng
        </Menu.Item>
        <Menu.Item key={KEY_MENU.ANDMIN} icon={<TeamOutlined />}>
          Nhân viên
        </Menu.Item>
        <Menu.Item key={KEY_MENU.SLIDER} icon={<PictureOutlined />}>
          Slider
        </Menu.Item>
        <SubMenu key={KEY_MENU.SETTING} icon={<SettingOutlined />} title="Cài đặt">
          <Menu.Item key="3">Đăng Xuất</Menu.Item>
          <Menu.Item key="4">Cài đặt hiễn thị</Menu.Item>
          <Menu.Item key="5">Cấu hình góc nhìn</Menu.Item>
        </SubMenu>
      </Menu>
    </React.Fragment>
  );
}

MenuAmin.propTypes = {
  collapsed: PropTypes.bool,
  setTitleHeader: PropTypes.func
};

MenuAmin.defaultProps = {
  collapsed: false,
  setTitleHeader: () => null
};

export default React.memo(MenuAmin);
