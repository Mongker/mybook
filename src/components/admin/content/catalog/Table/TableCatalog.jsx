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
import {Button, Input, Row, Col, Image, Popconfirm, Spin, Empty, Skeleton, Drawer} from 'antd';
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
    const {id, getListIdCatalog, listProduct} = props;

    // const default
    const loadingDefault = (<Spin size="large" style={{
        textAlign: 'center',
        paddingLeft: '50%',
        paddingTop: '100px'
    }}/>);

    // state
    const [list, setList] = React.useState(listProduct);
    const [loading, setLoading] = useState(loadingDefault);
    const [visible, setVisible] = useState(false);

    // update state
    if (listProduct !== list) {
        setList(listProduct);
    }

    // const prop or state
    const listArray = Object.keys(list);

    // lifecycle
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading({
                ...(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Không có dữ liệu'}
                           style={{paddingTop: '20px'}}/>)
            });
        }, 2200);
        return () => clearTimeout(time);
    }, []);

    useEffect(() => {
        getListIdCatalog(id);
    }, [id]);

    // func
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    // JSX
    const Title = (
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <h2>Thêm sách vào thư mục</h2>
        </div>
    );

    return (
        <div>
            {/* Table: Product */}
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
                {listArray.length > 0 ? (
                    listArray.map((item, index) => (
                        <Row className={"table-tr-catalog"} key={index}>
                            <Col className={"table-row-catalog"} span={COL_SPAN.img}>
                                <Image
                                    width={60}
                                    height={80}
                                    // src={URL_API.local+'file/'+list[item].image_link}
                                    src={'https://sachvui.com/cover/2020/de-co-tri-nho-tot.jpg'}
                                    fallback={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
                                />
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.name}>
                                {list[item].name}
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.price}>
                                {list[item].price} VNĐ
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.amount}>
                                {list[item].amount}
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.view_user}>
                                {list[item].view_user}
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.vote_user}>
                                {list[item].vote_user}
                            </Col>
                            <Col className={"table-row-catalog"} span={COL_SPAN.event}>
                                Hành động
                            </Col>
                        </Row>)
                    )
                ) : loading
                }
                {(loading !== loadingDefault && id !== null) && (<Button type="primary" style={{marginTop: '10px'}} onClick={showDrawer}>Thêm</Button>)}
            </div>
            <Drawer
                width={"35%"}
                title={Title}
                placement={'right'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'right'}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

TableCatalog.propTypes = {
    listProduct: PropTypes.object,
    type_key: PropTypes.object,

    getListIdCatalog: PropTypes.func,
    match: PropTypes.func,
    deleteAdmin: PropTypes.func,

    type: PropTypes.string,
    id: PropTypes.string,
};

TableCatalog.defaultProps = {
    listProduct: {},
    deleteAdmin: () => null,
    id: null,
    getListIdCatalog: () => null
};

export default React.memo(TableCatalog);
