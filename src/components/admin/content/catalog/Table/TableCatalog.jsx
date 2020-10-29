/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input, Row, Col, Image, Popconfirm, Spin, Empty, Skeleton} from 'antd';
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined} from '@ant-design/icons';
// import EditAdminContainer from "../Modal/EditAdminContainer";
// import AddAdminContainer from "../Modal/AddAdminContainer";
import {URL_API} from 'src/api/config';

// component

// const
const COL_SPAN = {
    img: 3,
    name: 4,
    price: 3,
    amount: 3,
    vote_user: 5,
    view_user: 3,
    event: 3,
};
// const {Option} = Select;
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.32).toString() + "px";

function TableCatalog(props) {
    const {id, getListIdCatalog} = props;
    const [loading, setLoading] = useState(<Spin size="large" style={{
        textAlign: 'center',
        paddingLeft: '50%',
        paddingTop: '100px'
    }}/>);

    useEffect(() => {
        const time = setTimeout(() => {
            setLoading({
                ...(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Không có dữ liệu'}
                           style={{paddingTop: '20px'}}/>)
            });
        }, 2200);
        return () => clearTimeout(time);
    }, []);
    useEffect(()=> {
        console.log('id 3: '+id);
        console.log('test');
        console.log('---------------------------------')

        getListIdCatalog(id);
    }, [id]);
    return (
        <div>
            {/* Table: Admin */}
            <Row className={"table-header-catalog"}>
                <Col className={"table-row-catalog"} span={COL_SPAN.img}>
                    Hình ảnh
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.name}>
                    Tên sách
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.price}>
                    Giá tiền
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.amount}>
                    Số lượng
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.view_user}>
                    Số lượt xem
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.vote_user}>
                    Số lượng bình chọn
                </Col>
                <Col className={"table-row-catalog"} span={COL_SPAN.event}>
                    Hành động
                </Col>
            </Row>
            <div style={{overflow: 'auto', height: heightWindow, width: 'auto'}}>
                {loading}
                {/*<Skeleton active  rows={5} width={400} />*/}
            </div>
        </div>
    );
}

TableCatalog.propTypes = {
    list: PropTypes.object,
    type_key: PropTypes.object,

    getListIdCatalog: PropTypes.func,
    match: PropTypes.func,
    deleteAdmin: PropTypes.func,

    type: PropTypes.string,
    id: PropTypes.string,
};

TableCatalog.defaultProps = {
    list: {},
    deleteAdmin: () => null,
    id: null,
    getListIdCatalog: () => null
};

export default React.memo(TableCatalog);
