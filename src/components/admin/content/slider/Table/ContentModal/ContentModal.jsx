/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Col, Row, Input, Select} from "antd";

// const
const {Option} = Select;

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

function ContentModal(props) {
    const {data, setData, dataEdit} = props;
    const [objectData, setObjectData] = useState({...data});
    const {image_link, name, index = 0} = dataEdit;

    const children = [];
    for (let i = 1; i <= 5; i++) {
        children.push(
            <Option key={i.toString()}>{i.toString()}</Option>
        );
    }

    function handleChange(value) {
        const valueInt = parseInt(value);
        objectData['index'] = valueInt;
        setData(data);
        resetStateObject();
    }

    function handleText(e, type) {
        const text = e.target.value;
        if (type === TYPE_TEXT.NAME) {
            objectData['name'] = text;
        } else {
            objectData['image_link'] = (text.length > 0) ? text : 'https://via.placeholder.com/880x380';
        }
        setData(objectData);
    }

    function resetStateObject() {
        if (objectData['name'].length > 0 && objectData['image_link'].length && objectData['name'].length) {
            setObjectData({});
        }
    }

    return (
        <div>
            <Row style={styleRow}>
                <Col span={3} style={styleCol}>
                    Tên:
                </Col>
                <Col span={21}>
                    <Input defaultValue={name} onChange={(e) => handleText(e, TYPE_TEXT.NAME)}/>
                </Col>
            </Row>
            <Row style={styleRow}>
                <Col span={3} style={styleCol}>
                    Link:
                </Col>
                <Col span={21}>
                    <Input defaultValue={image_link} onChange={(e) => handleText(e, TYPE_TEXT.LINK)}/>
                </Col>
            </Row>
            <Row style={styleRow}>
                <Col span={3} style={styleCol}>
                    Vị trí:
                </Col>
                <Col span={21}>
                    <Select
                        // labelInValue
                        defaultValue={index}
                        // style={{ width: "30px" }}
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                </Col>
            </Row>
        </div>
    );
}

ContentModal.propTypes = {
    // object
    slider: PropTypes.object,
    data: PropTypes.object,
    dataEdit: PropTypes.object,

    // func
    setData: PropTypes.func,
};

ContentModal.defaultProps = {
    data: {},
    slider: {},
    dataEdit: {},
    setData: () => null
};

export default ContentModal;
