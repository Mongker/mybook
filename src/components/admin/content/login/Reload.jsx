/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 04/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { Spin } from 'antd';

function Reload(props) {
    const {getUseAdmin} = props;
    let history = useHistory();

    const handleJoin = () => {
        history.push('/admin');
    };
    const handleLogin = () => {
        history.push('/admin-login');
    };

    React.useEffect(() => {
        const _id_admin = localStorage.getItem('id_admin') || null;
        if(localStorage.getItem('token_admin')){
            handleJoin()
        } else handleLogin();
        _id_admin && getUseAdmin(_id_admin)
    }, []);

    return(
        <div className="example">
            <Spin />
        </div>
    );
}

Reload.propTypes = {
    getUseAdmin: PropTypes.func
};

Reload.defaultProps = {};

export default Reload;
