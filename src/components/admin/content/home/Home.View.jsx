/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 18/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from "react";
import { Layout } from "antd";
// import PropTypes from "prop-types";

// components
import HeaderAdmin from "../../header/index.jsx";
import FooterAdmin from "../../footer/index.jsx";
import ContentAdmin from "../../content/Content.View.jsx";

// const
const { Header, Content, Footer } = Layout;

function HomeAdmin(props) {
  const { titleHeader } = props;
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <HeaderAdmin title={titleHeader} />
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <ContentAdmin title={titleHeader} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <FooterAdmin />
      </Footer>
    </Layout>
  );
}

HomeAdmin.propTypes = {};

HomeAdmin.defaultProps = {};

export default React.memo(HomeAdmin);
