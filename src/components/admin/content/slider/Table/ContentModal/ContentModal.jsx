/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useState } from "react";
//  import PropTypes from 'prop-types';
import { Col, Row, Input, Select } from "antd";

// const
const { Option } = Select;

const styleCol = {
  fontWeight: "bold",
  paddingLeft: "5px",
};

const styleRow = {
  padding: "10px",
};

function ContentModal(props) {
  const { slider } = props;
  const children = [];
  for (let i = 1; i <= 5; i++) {
    children.push(
      <Option key={i}>{i}</Option>
    );
  }
  function handleChange(value) {
    console.log(value);
  }
  return (
    <div>
      <Row style={styleRow}>
        <Col span={3} style={styleCol}>
          Tên:
        </Col>
        <Col span={21}>
          <Input />
        </Col>
      </Row>
      <Row style={styleRow}>
        <Col span={3} style={styleCol}>
          Link:
        </Col>
        <Col span={21}>
          <Input />
        </Col>
      </Row>
      <Row style={styleRow}>
        <Col span={3} style={styleCol}>
          Vị trí:
        </Col>
        <Col span={21}>
          <Select
            labelInValue
            defaultValue={{ value: "lucy" }}
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

ContentModal.propTypes = {};

ContentModal.defaultProps = {};

export default ContentModal;
