/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useEffect } from "react";
// import {Row, Col, Card} from 'antd';
import PropTypes from "prop-types";

// components
// import EditableTable from "./table/Table.View.jsx";
import TableSlider from "./slider/Table/TableSlider";

// util
import { KEY_MENU } from "../../util/keyMenu";
// const 
let CheckRender;
function ContentAdmin(props) {
  const { title, list } = props;
  useEffect(() => {}, [title]);

  switch (title) {
    case KEY_MENU.SLIDER:
      // CheckRender = <EditableTable />
      CheckRender = <TableSlider list={list} />;
      break;
    case KEY_MENU.ADMIN:
      CheckRender = <div>Đang phát triển nhé</div>;
      break;
    default:
      CheckRender = <div>Đang phát triển</div>;
      break;
  }

  return <div className={"content"}>{CheckRender}</div>;
}

ContentAdmin.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
};

export default React.memo(ContentAdmin);
