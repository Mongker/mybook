/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 19/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Input, Row, Col, Image, Popconfirm, Modal, Select} from "antd";
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined} from "@ant-design/icons";

// const
const {Search} = Input;
const {Option}= Select;
const height =
    (window.innerHeight - window.innerHeight * 0.25).toString() + "px";

const TYPE_TEXT = {
    NAME: 'name',
    LINK: 'link'
};

const styleCol = {
    fontWeight: "bold",
    paddingLeft: "5px",
};

const styleRow = {
    padding: "10px",
};

function TableSlider(props) {
    const {list, deleteSlider, postSlider, putSlider} = props;
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [data, setData] = useState({});

    const showModalCancel = (type, itemData = {}, id) => {
        if (type === "ADD") {
            setTitle('Thêm Slider');
            setData({});
        }
        else {
            setTitle(`Edit Slider: ${itemData['name']}`);
            itemData['id'] = id;
            const newData = {...itemData};
            setData(newData)
        }
        setVisible(!visible);
    };

    const cancelModal = () => {
        setVisible(!visible);
        setData({});
    };

    const handleOk = () => {
        if(title === 'Thêm Slider') {
            const newData = {...data};
            postSlider(newData);
        } else {
            // CODE
            const newData = {...data};
            putSlider(newData['id'],newData);
        }
        setVisible(!visible);
        setTitle('');
        setData({});
    };

    const onDelete = (id) => {
        deleteSlider(id);
    };

    const children = [];
    for (let i = 1; i <= 5; i++) {
        children.push(
            <Option key={i.toString()}>{i.toString()}</Option>
        );
    }

    function handleText(e, type) {
        const text = e.target.value;
        if (type === TYPE_TEXT.NAME) {
            (text.length > 0) && (data['name'] = text);
        } else {
            data['image_link'] = (text.length > 0) ? text : 'https://via.placeholder.com/880x380';
        }
        setData({...data});
    }

    function handleChangeSelect(value) {
        const valueInt = parseInt(value);
        data['index'] = valueInt;
        setData({...data});
    }
    const nameDefault = data.name ? data.name : '';
    const imgDefault = data.image_link ? data.image_link : '';
    const indexDefault = data.index ? data.index : '';
    debugger;
    return (
        <div>
            <Row style={{paddingBottom: "5px"}}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={(value) => console.log(value)}
                        style={{width: "97%"}}
                        enterButton
                    />
                </Col>
                <Col span={2}>
                    <Button type="primary" onClick={() => showModalCancel('ADD')}>
                        Thêm
                    </Button>
                </Col>
            </Row>

            {/* Table: Slider */}
            <Row className={"table-header"}>
                <Col className={"table-row"} span={4}>
                    Tên slider
                </Col>
                <Col className={"table-row"} span={5}>
                    Hình ảnh
                </Col>
                <Col className={"table-row"} span={10}>
                    Liên kết
                </Col>
                <Col className={"table-row"} span={2}>
                    Vị trí
                </Col>
                <Col className={"table-row"} span={3}>
                    Hành động
                </Col>
            </Row>
            {Object.keys(list).length > 0
                ? Object.keys(list).map((item, index) => (
                    <Row className={"table-tr"} key={list[item]._id}>
                        <Col className={"table-row"} span={4}>
                            {list[item].name}
                        </Col>
                        <Col className={"table-row"} span={5}>
                            <Image width={200} height={67.06} src={list[item].image_link}/>
                        </Col>
                        <Col className={"table-row"} span={10}>
                            {list[item].image_link}
                        </Col>
                        <Col className={"table-row"} span={2}>
                            {list[item].index}
                        </Col>
                        <Col className={"table-row"} span={3}>
                            <Row>
                                <Col flex={1}>
                                    <EditTwoTone className={"icon-slider"}
                                                 onClick={() => showModalCancel('EDIT', list[item], item)}/>
                                </Col>
                                <Col flex={1}>
                                    <Popconfirm
                                        title="Bạn muốn xóa slider này？"
                                        okText="Yes"
                                        cancelText="No"
                                        onConfirm={() => onDelete(list[item]._id)}
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
                : null}
            <Modal
                visible={visible}
                closable
                onOk={handleOk}
                onCancel={cancelModal}
                // footer={null}
                closeIcon
                title={title}
                centered
            >
                <div>
                    <Row style={styleRow}>
                        <Col span={3} style={styleCol}>
                            Tên:
                        </Col>
                        <Col span={21}>
                            <Input defaultValue={nameDefault} onChange={(e) => handleText(e, TYPE_TEXT.NAME)}/>
                        </Col>
                    </Row>
                    <Row style={styleRow}>
                        <Col span={3} style={styleCol}>
                            Link:
                        </Col>
                        <Col span={21}>
                            <Input defaultValue={imgDefault} onChange={(e) => handleText(e, TYPE_TEXT.LINK)}/>
                        </Col>
                    </Row>
                    <Row style={styleRow}>
                        <Col span={3} style={styleCol}>
                            Vị trí:
                        </Col>
                        <Col span={21}>
                            <Select
                                value={indexDefault}
                                // style={{ width: "30px" }}
                                onChange={handleChangeSelect}
                            >
                                {children}
                            </Select>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    );
}

TableSlider.propTypes = {
    list: PropTypes.object,
    deleteSlider: PropTypes.func,
    postSlider: PropTypes.func,
    putSlider: PropTypes.func,
};

TableSlider.defaultProps = {
    list: {},
    deleteSlider: () => null,
    postSlider: () => null,
    putSlider: () => null,
};

export default TableSlider;
