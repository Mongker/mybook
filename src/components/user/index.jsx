/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Header from './header.jsx'
import Content from './content.jsx';
import Footer from './footer.jsx';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

import SliderContainer from "src/components/admin/content/slider/SliderContainer";
import TodoApp from 'src/components/demo/todo/todoApp';
import DetailProduct from "src/components/user/detailproduct";

function User() {
    let match = useRouteMatch();
    console.log(match.url);
    debugger; // MongLV
    return(
        <div className="App">
            <Header />
            <DetailProduct />
            {/*<Switch>*/}
            {/*    <Route*/}
            {/*        path={`${match.url}`}*/}
            {/*        component={Content}*/}
            {/*    />*/}
            {/*    <Route*/}
            {/*        path={`${match.url}product-detail `}*/}
            {/*        component={TodoApp}*/}
            {/*    />*/}
            {/*</Switch>*/}
            <Footer />
        </div>
    );
}

User.propTypes = {};

export default User;
