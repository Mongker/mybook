/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../../App.css';

function TodoApp() {
    const [data, setData] = useState([]);
    console.log(data);
    console.log(data.length);
    useEffect(() => {
        axios.post("http://localhost:1999/api/catalog", {
            "name": "Mong",
            "description": "oki"
        }).then(res => res.data).then((result) => {
        }).catch(err => console.log(err))
    }, []);

    return (
        <div className="App">
            <h1>Mong đẹp trai</h1>
            {/*{data.length > 0 && data.map(item => (*/}
            {/*    <div>Todo: {item.todo}</div>*/}
            {/*))}*/}
        </div>
    );
}

export default React.memo(TodoApp);
