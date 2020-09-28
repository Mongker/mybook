/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import {Button, Col, Form, Switch, message, Modal, Popconfirm, Row, Select} from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import md5 from 'md5';
import {CopyOutlined} from '@ant-design/icons';
// import PropTypes from 'prop-types';

const layout = {
    labelCol: {
        span: 10
    },
    wrapperCol: {
        span: 14
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18
    }
};
const {Option} = Select;
const PassDefault = 'Nhom9@2020';
const OptionPosition = {
    ADMIN: 'Quản lý',
    EXCEL: 'Kế Toán',
    USER: 'Nhân viên',
};

function EditAdmin(props) {
    const [form] = Form.useForm();
    const {visible, disabledModal, data} = props;
    const [visibleCopy, setVisibleCopy] = useState(false)
    const {name, _id} = data;
    const onFinish = (values) => {
        onReset();
        values.preventDefault();
    };

    const onReset = () => {
        form.resetFields();
        disabledModal();
        setVisibleCopy(false);
    };

    const handleResetPass = () => {
        form.setFieldsValue({
            password: md5(PassDefault)
        });
        setVisibleCopy(!visibleCopy);
        message.success('Đã Reset');
    };
    const handleSwitch = (checked) => {
        form.setFieldsValue({
            status: checked
        });
    };

    const handleSelect = (value) => {
        console.log(`selected ${value}`);
        form.setFieldsValue({
            position: value
        });
    };

    return (
        <Modal
            visible={visible}
            closable
            footer={null}
            closeIcon
            // title={title}
            title={`Cấu hình tài khoản ${name}`}
            centered
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

                <Form.Item
                    name="position"
                    label="Phân quyền"
                >
                    <Select defaultValue={OptionPosition.USER} style={{ width: '75%' }} onChange={handleSelect}>
                        <Option value={OptionPosition.ADMIN}>{OptionPosition.ADMIN}</Option>
                        <Option value={OptionPosition.EXCEL}>{OptionPosition.EXCEL}</Option>
                        <Option value={OptionPosition.USER}>{OptionPosition.USER}</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Khóa tài khoản"
                >
                    <Switch defaultChecked onChange={handleSwitch} />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Reset pass"
                >
                    <div>
                        <Popconfirm
                            title="Bạn muốn reset lại mật khẩu ?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={handleResetPass}
                        >
                            <Button type={'danger '}>Reset</Button>
                        </Popconfirm>
                        {" "}
                        {
                            visibleCopy && (
                                <CopyToClipboard text={PassDefault}>
                                    <Button type={'default'} onClick={() => message.success('Copy thành công')}>
                                        {PassDefault} <CopyOutlined/>
                                    </Button>
                                </CopyToClipboard>)
                        }
                    </div>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Row>
                        <Col flex={1/2}>
                            <Button type="primary" htmlType="submit">
                                Lưu
                            </Button>
                        </Col>
                        <Col flex={1/2}>
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

EditAdmin.propTypes = {};

EditAdmin.defaultProps = {};

export default EditAdmin;
