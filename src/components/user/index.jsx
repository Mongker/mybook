/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Button} from 'antd';

function User() {
    return(
        <div style={{color: 'red'}}>
             <Button type="dashed">Dashed Button</Button>
        </div>
    );
}

User.propTypes = {};

export default User;
