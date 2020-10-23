/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// component
import TreeCatalog from '../TreeCatalog';
import TableCatalogContainer from '../Table/TableCatalogContainer';

function CatalogContent(props) {
    let match = useRouteMatch();
    const { getList, listCatalog, deleteCatalog, postCatalog, putCatalog } = props;
    useEffect(
        () => {
            getList();
        },
        []
    );
    return (
        <Row>
            <Col flex={1}>
                <TreeCatalog
                    list={listCatalog}
                    deleteId={deleteCatalog}
                    post={postCatalog}
                    put={putCatalog}
                />
            </Col>
            <Switch>
                <Route
                    to={`${match.url}/:id`}
                    children={
                        <Col flex={6}>
                            <TableCatalogContainer />
                        </Col>
                        }
                />
            </Switch>

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

export default React.memo(CatalogContent);
