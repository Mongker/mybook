/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 19/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Row, Col, Image } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

// components
import ModelView from "../../modal/Model.View";
import ContentModalContainer from "./ContentModal/ContentModalContainer";

// const
const { Search } = Input;
const height =
  (window.innerHeight - window.innerHeight * 0.25).toString() + "px";

function TableSlider(props) {
  const [visible, setVisible] = useState(false);
  const { list } = props;
  debugger; // MongLV

  const showModalCancel = () => {
    setVisible(!visible);
  };

  const handleOk = (event) => {
    showModalCancel();
  };

  return (
    <div>
      <Row style={{ paddingBottom: "5px" }}>
        <Col span={12} offset={10}>
          <Search
            placeholder="Tìm kiếm"
            onSearch={(value) => console.log(value)}
            style={{ width: "97%" }}
            enterButton
          />
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={showModalCancel}>
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
            <Row className={"table-tr"} key={index}>
              <Col className={"table-row"} span={4}>
                {list[item].name}
              </Col>
              <Col className={"table-row"} span={5}>
                <Image width={200} height={67.06} src={list[item].image_link} />
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
                    <EditTwoTone className={"icon-slider"} />
                  </Col>
                  <Col flex={1}>
                    <DeleteTwoTone
                      className={"icon-slider"}
                      twoToneColor={"red"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          ))
        : null}
      <ModelView
        handShowCancel={showModalCancel}
        handleOk={handleOk}
        visible={visible}
        ContentModal={ContentModalContainer}
        title={'Thêm Slider'}
      />
    </div>
  );
}

TableSlider.propTypes = {
  list: PropTypes.array,
};

export default TableSlider;
