/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

// component
import TreeCatalog from '../TreeCatalog';
import TableCatalogContainer from '../Table/TableCatalogContainer';

function CatalogContent(props) {
    const {getList, listCatalog} = props;
    useEffect(
        () => {
            getList && getList();
        },
        []
    );
    return(
        <Row>
            <Col flex={1}>
                <TreeCatalog list={listCatalog} />
            </Col>
            <Col flex={6}>
                <TableCatalogContainer />
            </Col>
        </Row>
    );
}

CatalogContent.propTypes = {
    getList: PropTypes.func,
};

CatalogContent.defaultProps = {
    getList: null
};

export default CatalogContent;
