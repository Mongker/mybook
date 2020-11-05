/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Header from './header.jsx'
import Content from './content.jsx';
import Footer from './footer.jsx';
import PropTypes from 'prop-types';
import AddAdmin from "src/components/admin/content/admin/Modal/AddAdmin";
import DetailProduct from './detailproduct.jsx';

function User(props) {
    const {getListCatalog, getListProduct, listProduct, listCatalog} = props;
    React.useEffect(() => {
        getListCatalog();
        getListProduct();
    }, []);
    return(
        <div className="App">
            <Header listCatalog={listCatalog} />
            <Content listProduct={listProduct} />
            {/*<DetailProduct />*/}
            <Footer />
        </div>
    );
}

User.propTypes = {
    getListCatalog: PropTypes.func,
    getListProduct: PropTypes.func,
    listProduct: PropTypes.object,
    listCatalog: PropTypes.object,
};

User.defaultProps = {
    getListCatalog: () => null,
    getListProduct: () => null,
    listProduct: {},
    listCatalog: {},
};

export default User;
