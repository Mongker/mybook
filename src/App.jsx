/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Layout, Menu } from 'antd';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

// components
import TodoApp from './components/demo/todo/todoApp.jsx'
import User from "./components/user";
import Admin from "./components/admin";

// const
const { Header, Footer, Content } = Layout;

function App() {
    return(
        <BrowserRouter>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#2e5b98'}}>
                        <Menu theme={'dark'} style={{backgroundColor: '#2e5b98'}} mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1"><Link to={"/demo"}>DEMO</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={"/"}>Khách Hàng</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={'admin'}>Quản Trị</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <Switch>
                                <Route exact path="/demo" component={TodoApp}/>
                                <Route path="/" component={User} />
                                <Route path="/admin" component={Admin}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: '#2e5b98'}}>
                        <h1 style={{color: '#fefdff'}}>Footer</h1>
                    </Footer>
                </Layout>
        </BrowserRouter>
    );
}

export default React.memo(App);
