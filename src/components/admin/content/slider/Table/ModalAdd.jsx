/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import axios, {post, get} from 'axios';
import {Button, Input, Modal, Select, Form, Row, Col, Image} from "antd";
import PropTypes from 'prop-types';

// util
import {URL_API} from '../../../../../api/config';

// const
const layout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

function ModalAdd(props) {
    const [form] = Form.useForm();
    const {visible, handleText, cancelModal, title, children, TYPE_TEXT} = props;
    const [file, setFile] = useState({});
    const [linkFile, setLinkFile] = useState({});
    // TODO by MongV: xử dụng From để bao các input lại để reset text
    const onFinish = async (values) => {
        values.image_link = linkFile;
        await handleText(values, TYPE_TEXT.ADD);
        await setFile({});
        onReset();
        // values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        setLinkFile('');
        cancelModal();
    };
    const handleFile = async (evt) => {
        evt.preventDefault();
        console.log(evt.target.files[0]);
        const file = evt.target.files[0];
        setFile(file);
        if (!file) {
            alert('Bạn chưa chọn file.')
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        await post(`${URL_API.local}file/upload`, formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer);
            let filePath = res.data.fileNameInServer;
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setLinkFile(`${URL_API.local}file/` + filePath);
        });
    };
    return (
        <Modal
            visible={visible}
            closable
            footer={null}
            closeIcon
            title={title}
            centered
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

                <Form.Item
                    name="name"
                    label="Tên"
                    rules={[
                        {
                            required: true,
                            message: 'Tên không được để trống'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="image_link"
                    label="Link Ảnh"
                    rules={[
                        {
                            required: true,
                            message: 'Link không được để trống'
                        }
                    ]}
                >

                    {
                        linkFile.length > 0 ?
                            <Image width={'100%'} height={200} src={linkFile} />
                            :
                            <Input
                                type="file"
                                name="avatar"
                                id="avatar"
                                placeholder="chọn file"
                                onChange={handleFile}
                            />
                    }
                </Form.Item>

                <Form.Item
                    name="index"
                    label="Vị trí"
                    rules={[
                        {
                            required: true,
                            message: 'Vị trí không được để trống'
                        }
                    ]}
                >
                    <Select
                        defaultValue={'NULL'}
                        allowClear
                    >
                        {children}
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Row>
                        <Col span={18} style={{paddingLeft: '50%'}}>
                            <Button type="primary" htmlType="submit">
                                Thêm
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Button onClick={onReset}>
                                Đóng
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
    );
}

ModalAdd.propsTypes = {
    visible: PropTypes.bool,

    children: PropTypes.array,

    // func
    handleText: PropTypes.func,
    cancelModal: PropTypes.func,
    handleOk: PropTypes.func,
    // object
    styleRow: PropTypes.object,
    styleCol: PropTypes.object,
    TYPE_TEXT: PropTypes.object,

    // string
    title: PropTypes.string,
};
export default React.memo(ModalAdd);
