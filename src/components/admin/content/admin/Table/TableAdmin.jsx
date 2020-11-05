/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button, Input, Row, Col, Image, Popconfirm, Spin, Empty, Avatar} from "antd";
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined} from "@ant-design/icons";
import EditAdminContainer from "../Modal/EditAdminContainer";
import AddAdminContainer from "../Modal/AddAdminContainer";
import {URL_API} from "src/api/config";

// component

// const

const {Search} = Input;
const COL_SPAN = {
    avatar: 3,
    name: 5,
    email: 5,
    phone: 5,
    position: 3,
    event: 3,

};
// const {Option} = Select;
const avatar = require('./styles/avatar.jpg');
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.32).toString() + "px";

function TableAdmin(props) {
    const {list, deleteAdmin, type, type_key} = props;
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [listArray, setListArray] = useState([]);
    const [listObject, setListObject] = useState(list);
    const [dataItem, setDataItem] = useState('');
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
    });

    useEffect(() => {
        let newList = [...Object.keys(listObject)];
        switch (type) {
            case type_key['1']:
                newList = Object.keys(list).filter((item) => list[item].position === type_key['1'] && list[item].status === true);
                break;
            case type_key['2']:
                newList = Object.keys(list).filter((item) => list[item].position === type_key['2'] && list[item].status === true);
                break;
            case type_key['3']:
                newList = Object.keys(list).filter((item) => list[item].position === type_key['3'] && list[item].status === true);
                break;
            case type_key['4']:
                newList = Object.keys(list).filter((item) => list[item].status === false);
                break;
            default:
                newList = Object.keys(list).filter((item) => list[item].status === true);
        }
        setListArray(newList);
        setListObject(list);
    }, [list]);
    const onDelete = (id) => {
        deleteAdmin(id);
        delete listObject.id;
        setListObject({...listObject});
    };
    const showModal = (type, data) => {
        if (type === "EDIT") {
            setVisibleEdit(true);
            setDataItem(data);
        }
        if (type === "ADD") {
            setVisibleAdd(true);
        }
    };
    const disabledModal = () => {
        setVisibleEdit(false);
        setVisibleAdd(false);
    };
    const handleSearch = (value) => {
        const newList = Object.keys(listObject).filter((item) => (list[item].name.toLowerCase().indexOf(value.toLowerCase()) !== -1));
        setListArray(newList);
    };

    const Title = (
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <Avatar size={40} src={URL_API.local + 'file/' + dataItem.avatar}/>
            &nbsp;
            &nbsp;
            {dataItem.name}
        </div>);
    return (
        <div>
            <Row style={{
                position: 'absolute',
                top: `${window.innerHeight * 0.025}px`,
                left: '55%',
                width: `${window.innerWidth * 0.42}px`
            }}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm theo tên"
                        style={{width: "97%"}}
                        enterButton
                        onSearch={(value) => handleSearch(value)}
                    />
                </Col>
                <Col span={2}>
                    <Button
                        type="primary"
                        onClick={() => showModal('ADD')}
                    >
                        Thêm
                    </Button>
                </Col>
            </Row>
            {/* Table: Admin */}
            <Row className={"table-header"}>
                <Col className={"table-row"} span={COL_SPAN.avatar}>
                    Ảnh đại diện
                </Col>
                <Col className={"table-row"} span={COL_SPAN.name}>
                    Họ tên đầy đủ
                </Col>
                <Col className={"table-row"} span={COL_SPAN.email}>
                    Email
                </Col>
                <Col className={"table-row"} span={COL_SPAN.phone}>
                    Số điện thoại
                </Col>
                <Col className={"table-row"} span={COL_SPAN.position}>
                    Chức vụ
                </Col>
                <Col className={"table-row"} span={COL_SPAN.event}>
                    Hành động
                </Col>
            </Row>
            <div style={{overflow: 'auto', height: heightWindow, width: 'auto'}}>
                {listArray.length > 0
                    ? listArray.map((item, index) => (
                        <Row className={"table-tr"} key={index}>
                            <Col className={"table-row"} span={COL_SPAN.avatar}>
                                <Image
                                    width={64}
                                    height={64}
                                    src={URL_API.local + 'file/' + listObject[item].avatar}
                                    fallback={avatar}
                                />
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.name}>
                                {listObject[item].name}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.email}>
                                {listObject[item].email}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.phone}>
                                {listObject[item].phone}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.position}>
                                {listObject[item].position}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.event}>
                                <Row>
                                    <Col flex={1}>
                                        <EditTwoTone
                                            className={"icon-slider"}
                                            onClick={() => showModal('EDIT', listObject[item])}
                                        />
                                    </Col>
                                    <Col flex={1}>
                                        <Popconfirm
                                            title="Bạn muốn xóa slider này？"
                                            okText="Yes"
                                            cancelText="No"
                                            onConfirm={() => onDelete(item)}
                                            icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                                        >
                                            <DeleteTwoTone
                                                className={"icon-slider"}
                                                twoToneColor={"red"}
                                            />
                                        </Popconfirm>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))
                    : loading}
            </div>
            <EditAdminContainer
                visible={visibleEdit}
                disabledModal={disabledModal}
                data={dataItem}
                title={Title}
            />
            <AddAdminContainer
                visible={visibleAdd}
                disabledModal={disabledModal}
            />
        </div>
    );
}

TableAdmin.propTypes = {
    list: PropTypes.object,
    deleteAdmin: PropTypes.func,
    type: PropTypes.string,
    type_key: PropTypes.object,
};

TableAdmin.defaultProps = {
    list: {},
    deleteAdmin: () => null,
};

export default TableAdmin;
