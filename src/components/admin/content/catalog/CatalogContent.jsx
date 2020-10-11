/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

// component
import TreeCatalog from './TreeCatalog/index.jsx';
import TableCatalogContainer from './Table/TableCatalogContainer';

function CatalogContent(props) {
    return(
        <Row>
            <Col flex={1}>
                <TreeCatalog />
            </Col>
            <Col flex={6}>
                <TableCatalogContainer />
            </Col>
        </Row>
    );
}

CatalogContent.propTypes = {};

CatalogContent.defaultProps = {};

export default CatalogContent;
