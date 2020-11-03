/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 13/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import CatalogContent from './CatalogContent';

// action type
import {CATALOG} from 'src/action/actionTypes';
import * as action from 'src/action/catalogAction';

const mapStateToProps = state => {
  return {
    listCatalog: state.Catalog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch({type: CATALOG.CALL_GET_LIST}),
    deleteCatalog: (id) => dispatch(action.deleteCatalog(id)),
    postCatalog: (data) => dispatch(action.postCatalog({data})),
    putCatalog: (id, data) => dispatch(action.putCatalog({id, data}))
  };
};

const CatalogContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContent);

export default CatalogContentContainer;

