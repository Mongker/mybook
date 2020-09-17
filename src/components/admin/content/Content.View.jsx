/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect} from 'react';
// import {Row, Col, Card} from 'antd';
import PropTypes from 'prop-types';
import EditableTable from './table/Table.View.jsx'

// util
import {KEY_MENU} from '../../util/keyMenu'

function ContentAdmin(props) {
    const {title} = props;
    let CheckRender;

    useEffect(() => {
    }, [title]);

    // Xử lý check giao title để đưa ra màn hình phù hợp yêu cầu của Menu
    if (title === KEY_MENU.SLIDER) CheckRender=(<EditableTable/>);
    else CheckRender=(<>Đang phát triển</>);

    return (
        <div className={'content'}>
            {CheckRender}
        </div>
    );
}


ContentAdmin.propTypes = {
    title: PropTypes.string,
};

ContentAdmin.defaultProps = {};

export default ContentAdmin;
