/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import {Upload, message, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

function TodoApp() {
    const [data, setData] = useState({});
    const props = {
        name: 'file',
        action: 'http://localhost:1999/api/file/upload',
        multiple: true,

        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            setData(info);
        },
    };
    return (
        <div>
            <Upload
                {...props}
                listType="picture-card"
            >
                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
            </Upload>
            {JSON.stringify(data, null, 2)}
        </div>
    );
}

TodoApp.propTypes = {};

TodoApp.defaultProps = {};

export default TodoApp;
