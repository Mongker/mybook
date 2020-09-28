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
import {Button, Input, Row, Col, Image, Popconfirm, Select, Spin, Avatar} from "antd";
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined, UserOutlined} from "@ant-design/icons";
import EditAdminContainer from "../Modal/EditAdminContainer";

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
    const {list, deleteAdmin} = props;
    const [visibleEdit, setVisibleEdit] = useState(false);
    const onDelete = (id) => {
        deleteAdmin(id);
    };
    const showModal = (type, id) => {
        if(type === "EDIT") {
            setVisibleEdit(true);
        }
    };
    const disabledModal = () => {
        setVisibleEdit(false);
    };
    return (
        <div>
            <Row style={{position: 'absolute', top: '11%', left: '60%', width: '500px'}}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm"
                        style={{width: "97%"}}
                        enterButton
                        // onSearch={(value) => handleSearch(value)}
                    />
                </Col>
                <Col span={2}>
                    <Button
                        type="primary"
                        // onClick={() => showModalCancel('ADD')}
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
                {Object.keys(list).length > 0
                    ? Object.keys(list).map((item, index) => (
                        <Row className={"table-tr"} key={index}>
                            <Col className={"table-row"} span={COL_SPAN.avatar}>
                                <Image
                                    width={64}
                                    height={64}
                                    src={list[item].avatar}
                                    fallback={avatar}
                                />
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.name}>
                                {list[item].name}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.email}>
                                {list[item].email}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.phone}>
                                {list[item].phone}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.position}>
                                {list[item].position}
                            </Col>
                            <Col className={"table-row"} span={COL_SPAN.event}>
                                <Row>
                                    <Col flex={1}>
                                        <EditTwoTone
                                            className={"icon-slider"}
                                            onClick={() => showModal('EDIT', item)}
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
                    : (<Spin size="large" style={{textAlign: 'center', paddingLeft: '50%', paddingTop: '100px'}}/>)}
            </div>
            <EditAdminContainer
                visible={visibleEdit}
                disabledModal={disabledModal}
            />
        </div>
    );
}

TableAdmin.propTypes = {
    list: PropTypes.object,
    deleteAdmin: PropTypes.func,
};

TableAdmin.defaultProps = {
    list: {},
    deleteAdmin: () => null,
};

export default TableAdmin;
