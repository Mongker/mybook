/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "antd";

// components
import MenuAmin from "./menu/index.jsx";
import HeaderAdmin from "./header/index.jsx";
import FooterAdmin from "./footer/index.jsx";
import ContentAdmin from "./content/index.jsx";

// styles
import "./styles/index.css";

// const
const { Header, Content, Footer, Sider } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const [titleHeader, setTitleHeader] = useState("ADCBook");

  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Helmet title={`Quản trị: ${titleHeader}`} />
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <MenuAmin collapsed={collapsed} setTitleHeader={setTitleHeader} />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <HeaderAdmin title={titleHeader} />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <ContentAdmin />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <FooterAdmin />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default React.memo(Admin);
