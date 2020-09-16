/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 15/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 
 function HeaderAdmin(props) {
     const {title} = props;
     return(
         <div><h1>{title}</h1></div>
     );
 }
 
 HeaderAdmin.propTypes = {
     title: PropTypes.string,
 };
 
 HeaderAdmin.defaultProps = {
     title: 'Trang Chủ'
 }
 
 export default HeaderAdmin;