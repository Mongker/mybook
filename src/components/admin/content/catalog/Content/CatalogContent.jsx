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
    const {getList, listCatalog, deleteCatalog} = props;
    useEffect(
        () => {
            getList();
        },
        []
    );
    return(
        <Row>
            <Col flex={1}>
                <TreeCatalog
                    list={listCatalog}
                    deleteId={deleteCatalog}
                />
            </Col>
            <Col flex={6}>
                <TableCatalogContainer />
            </Col>
        </Row>
    );
}

CatalogContent.propTypes = {
    getList: PropTypes.object,
    deleteCatalog: PropTypes.func,
};

CatalogContent.defaultProps = {
    getList: {},
    deleteCatalog: null,
};

export default CatalogContent;
