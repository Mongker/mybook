/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 19/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button, Input, Row, Col, Image, Popconfirm, Select} from "antd";
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined} from "@ant-design/icons";

// component
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

// const
const {Search} = Input;
const {Option} = Select;
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
    const [listArray, setListArray] = useState(Object.keys(list));
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [title, setTitle] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        setListArray(Object.keys(list))
    }, [list]);

    const showModalCancel = (type, itemData = {}, id) => {
        if (type === "ADD") {
            setTitle('Thêm Slider');
            setData({});
            setVisible2(true);
        } else {
            setTitle(`Edit Slider: ${itemData['name']}`);
            itemData['id'] = id;
            const newData = {...itemData};
            setData(newData)
            setVisible(true);
        }
    };

    const cancelModal = () => {
        setVisible(false);
        setVisible2(false);
        setData({});
    };

    const handleOk = () => {
        if (title === 'Thêm Slider') {
            const newData = {...data};
            postSlider(newData);
            setVisible2(false);
        } else {
            // CODE
            const newData = {...data};
            putSlider(newData['id'], newData);
            setVisible(false);
        }
        setTitle('');
        setData({});
    };

    const onDelete = (id) => {
        deleteSlider(id);
        delete list[id];
        setListArray(Object.keys({...list}));
    };

    const children = [];
    for (let i = 1; i <= 5; i++) {
        children.push(
            <Option key={i.toString()}>{i.toString()}</Option>
        );
    }

    function handleSearch(value) {
        console.log(value);
        const newList = Object.keys(list).filter((item) => (list[item].name.toLowerCase().indexOf(value.toLowerCase()) !== -1));
        setListArray([...newList]);
    }

    function handleText(e, type) {
        const text = e.target.value;
        if (type === TYPE_TEXT.NAME) {
            (text.length > 0) && (data['name'] = text);
        } else {
            data['image_link'] = (text.length > 0) ? text : 'https://via.placeholder.com/880x380';
        }
        setData({...data});
        e.preventDefault();
        e.stopPropagation();
    }

    function handleChangeSelect(value) {
        const valueInt = parseInt(value);
        data['index'] = valueInt;
        setData({...data});
    }

    let nameDefault = data.name ? data.name : '';
    let imgDefault = data.image_link ? data.image_link : '';
    let indexDefault = data.index ? data.index : '';
    debugger;
    return (
        <div>
            <Row style={{paddingBottom: "5px"}}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm"
                        style={{width: "97%"}}
                        enterButton
                        onSearch={(value) => handleSearch(value)}
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
            {listArray.length > 0
                ? listArray.map((item, index) => (
                    <Row className={"table-tr"} key={index}>
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
                : null}
            <ModalAdd
                visible={visible2}
                handleOk={handleOk}
                cancelModal={cancelModal}
                title={title}
                styleRow={styleRow}
                styleCol={styleCol}
                handleText={handleText}
                handleChangeSelect={handleChangeSelect}
                children={children}
                TYPE_TEXT={TYPE_TEXT}
            />
            <ModalEdit
                visible={visible}
                handleOk={handleOk}
                cancelModal={cancelModal}
                title={title}
                styleRow={styleRow}
                styleCol={styleCol}
                handleText={handleText}
                handleChangeSelect={handleChangeSelect}
                children={children}
                TYPE_TEXT={TYPE_TEXT}
                nameDefault={nameDefault}
                imgDefault={imgDefault}
                indexDefault={indexDefault}
            />
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
