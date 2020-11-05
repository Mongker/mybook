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

function User() {
    return(
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

User.propTypes = {};

export default User;
