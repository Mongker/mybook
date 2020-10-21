/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 22/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input, Modal, Select, Form, Row, Col, Upload, message, Progress, Empty} from "antd";

// custom Hooks
import useSelectIndex from '../customHooks/SelectIndex';
// util
import {URL_API} from 'src/api/config'

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

const imgDefault = 'https://amfnews.com/wp-content/uploads/2014/10/default-img-1000x600.gif';

function ModalAdd(props) {
    const [form] = Form.useForm();
    const {putIndex} = useSelectIndex();
    const [linkFile, setLinkFile] = useState('');
    const [percent, setPercent] = useState(0);
    const {visible, handleText, cancelModal, title, children, TYPE_TEXT} = props;
    const linkFileView = linkFile ? URL_API.local + 'file/' + linkFile : imgDefault;

    useEffect(() => {
        if (percent === 100) {
            const time = setTimeout(() => {
                setPercent(0);
            }, 2000);
            return () => clearTimeout(time);
        }
    });
    const UpFile = {
        name: 'file',
        action: `${URL_API.local}file/upload`,
        multiple: true,

        onChange(info) {
            setPercent(Math.ceil(info.file.percent)); // Làm tròn nhé
            switch (info.file.status) {
                case 'uploading':
                    console.log(info.file, info.fileList);
                    break;
                case 'done':
                    message.success(`${info.file.name} file uploaded successfully`);
                    setLinkFile(info.file.response.fileNameInServer);
                    break;
                default:
                    message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onFinish = async (values) => {
        values.image_link = linkFile;
        await handleText(values, TYPE_TEXT.ADD);
        await setLinkFile('');
        onReset();
    };
    const onReset = () => {
        form.resetFields();
        setLinkFile('');
        cancelModal();
    };

    const check = (value) => {
        putIndex(value);
        form.setFieldsValue({index: value});
    };

    const onSelectIndex = (value) => {
        switch (value) {
            case "1":
                check(1);
                break;
            case "2":
                check(2);
                break;
            case "3":
                check(3);
                break;
            case "4":
                check(4);
                break;
            case "5":
                check(5);
                break;
            default:
                // Note: nếu xét bằng 0 thì sẽ sẽ không được hiễn thị
                form.setFieldsValue({index: 0});
        }
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
            {/*{linkFile}*/}
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
                    <Upload
                        {...UpFile}
                        showUploadList={false}
                    >
                        <img
                            alt="example"
                            src={linkFileView}
                            style={{width: '100%', height: 200}}
                        />
                        {percent > 0 && <Progress percent={percent}/>}
                    </Upload>
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
                        onChange={onSelectIndex}
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
