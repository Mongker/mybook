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
import { Switch, Route, useRouteMatch } from "react-router-dom";

// components
import MenuAmin from "./menu/index.jsx";
import SliderContainer from "./content/slider/SliderContainer";
import AdminContainer from "./content/admin/AdminContainer";
import HomeAdmin from "./content/home/Home.View.jsx";

// styles
import "./styles/index.css";

// const
const { Sider } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const [titleHeader, setTitleHeader] = useState("ADCBook");
  let match = useRouteMatch();

  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }

  return (
    <Route>
      <Layout style={{ minHeight: "100vh" }}>
        <Helmet title={`Quản trị: ${titleHeader}`} />
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <MenuAmin collapsed={collapsed} setTitleHeader={setTitleHeader} />
        </Sider>
        <Switch>
          <Route
            exact
            path={`${match.url}/home`}
            render={() => <HomeAdmin titleHeader={titleHeader} />}
          />
          <Route
            exact
            path={`${match.url}/slider`}
            render={() => <SliderContainer titleHeader={titleHeader} />}
          />
          <Route
            exact
            path={`${match.url}/admin`}
            render={() => <AdminContainer titleHeader={titleHeader} />}
          />
        </Switch>
      </Layout>
    </Route>
  );
}

export default React.memo(Admin);
