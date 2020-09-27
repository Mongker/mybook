/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";
import {Button, Input, Row, Col, Image, Popconfirm, Select, Spin, Avatar} from "antd";
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined, UserOutlined} from "@ant-design/icons";

// component
// import ModalAdd from "./ModalAdd";
// import ModalEdit from "./ModalEdit";

// const
const {Search} = Input;
// const {Option} = Select;
const avatar = require('./styles/avatar.jpg');
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.25).toString() + "px";

function TableAdmin(props) {
    const {list} = props;
    debugger; // MongLV
    return(
        <div>
            <Row style={{paddingBottom: "5px"}}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm nhân viên"
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
                <Col className={"table-row"} span={4}>
                    Ảnh đại diện
                </Col>
                <Col className={"table-row"} span={4}>
                    Họ tên đầy đủ
                </Col>
                <Col className={"table-row"} span={5}>
                   Email
                </Col>
                <Col className={"table-row"} span={4}>
                   Số điện thoại
                </Col>
                <Col className={"table-row"} span={2}>
                   Chức vụ
                </Col>
                <Col className={"table-row"} span={3}>
                    Hành động
                </Col>
            </Row>
            <div style={{overflow: 'auto', height: heightWindow, width: 'auto' }}>
                {Object.keys(list).length > 0
                    ? Object.keys(list).map((item, index) => (
                        <Row className={"table-tr"} key={index}>
                            <Col className={"table-row"} span={4}>
                                <Image
                                    width={64}
                                    height={64}
                                    src={list[item].avatar}
                                    fallback={avatar}
                                />
                            </Col>
                            <Col className={"table-row"} span={4}>
                                {list[item].name}
                            </Col>
                            <Col className={"table-row"} span={5}>
                                {list[item].email}
                            </Col>
                            <Col className={"table-row"} span={4}>
                                {list[item].phone}
                            </Col>
                            <Col className={"table-row"} span={2}>
                                {list[item].position}
                            </Col>
                            <Col className={"table-row"} span={3}>
                                <Row>
                                    <Col flex={1}>
                                        <EditTwoTone
                                            className={"icon-slider"}
                                            // onClick={() => showModalCancel('EDIT', list[item], item)}
                                        />
                                    </Col>
                                    <Col flex={1}>
                                        <Popconfirm
                                            title="Bạn muốn xóa slider này？"
                                            okText="Yes"
                                            cancelText="No"
                                            // onConfirm={() => onDelete(item)}
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
        </div>
    );
}

TableAdmin.propTypes = {};

TableAdmin.defaultProps = {};

export default TableAdmin;
