/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs } from 'antd';

// component
import TableAdminContainer from '../Table/TableAdminContainer';

const { TabPane } = Tabs;

const KEY_TAB = {
    0: 'Tất cả',
    1: 'Quản lý',
    2: 'Kế Toán',
    3: 'Nhân viên',
    4: 'Nghỉ làm'
};

function TabAdmin(props) {
    const {list} = props;
    function callback(key) {
        console.log(key);
    }

    return(
        <Tabs defaultActiveKey={KEY_TAB["0"]} onChange={callback}>
            <TabPane tab={KEY_TAB["0"]} key={KEY_TAB["0"]} >
                <TableAdminContainer list={list} type_key={KEY_TAB} style={{background: '#fff'}} />
            </TabPane>
            <TabPane tab={KEY_TAB["1"]} key={KEY_TAB["1"]}>
                <TableAdminContainer list={list} type={KEY_TAB["1"]} type_key={KEY_TAB}  style={{background: '#fff'}} />
            </TabPane>
            <TabPane tab={KEY_TAB["2"]} key={KEY_TAB["2"]}>
                <TableAdminContainer list={list} type={KEY_TAB["2"]} type_key={KEY_TAB} style={{background: '#fff'}} />
            </TabPane>
            <TabPane tab={KEY_TAB["3"]} key={KEY_TAB["3"]}>
                <TableAdminContainer list={list} type={KEY_TAB["3"]} type_key={KEY_TAB} style={{background: '#fff'}} />
            </TabPane>
            <TabPane tab={KEY_TAB["4"]} key={KEY_TAB["4"]}>
                <TableAdminContainer list={list} type={KEY_TAB["4"]} type_key={KEY_TAB} style={{background: '#fff'}} />
            </TabPane>
        </Tabs>
    );
}

TabAdmin.propTypes = {};

TabAdmin.defaultProps = {};

export default TabAdmin;
