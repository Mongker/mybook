/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 12/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link, useRouteMatch } from 'react-router-dom';
import { Menu, Tooltip, Popover, Row, Col, Popconfirm, Button, Modal, Form, Input } from 'antd';
import {
    PlusCircleOutlined,
    ReadOutlined,
    SettingOutlined,
    EditTwoTone,
    DeleteTwoTone,
    QuestionCircleOutlined
} from '@ant-design/icons';

// style
import '../styles/index.css';

// const
const heightWindow = (window.innerHeight - window.innerHeight * 0.32).toString() + "px";
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

function TreeCatalog(props) {
    let match = useRouteMatch();
    const { list, deleteId, post, put } = props;
    const [form] = Form.useForm();
    const [formEdit] = Form.useForm();
    const [visible, setVisible] = React.useState(false);
    const [visibleEdit, setVisibleEdit] = React.useState(false);
    const [idPut, setIdPut] = React.useState('');
    const deleteIdCatalog = (id) => {
        deleteId(id);
    };

    // Note MongLV: để xét giá trị cho form
    // form.setFieldsValue({
    //     name: '',
    //     description: ''
    // });

    const showModal = () => {
        setVisible(true);
    };

    const showModalEdit = (id) => {
        setVisibleEdit(true);
        setIdPut(id);
        formEdit.setFieldsValue({
            name: list[id].name || 'Error',
            description: list[id].description,
        });
    };

    const onReset = () => {
        form.resetFields();
        formEdit.resetFields();
        setVisible(false);
        setVisibleEdit(false);
        setIdPut('');
    };

    const onFinish = (values) => {
        post(values);
        onReset();
    };

    const onFinishEdit = (values) => {
        put(idPut, values);
        onReset();
    };

    function TitleAdd() {
        return (
            <div className={'modalAdd'}>Thêm thể loại sách </div>
        );
    }
    function TitleEdit() {
        return (
            <div className={'modalAdd'}>Sửa thể loại sách </div>
        );
    }

    const Content = ({ id }) => {
        return (
            <Row justify="space-between">
                <Col flex={1}>
                    <EditTwoTone
                        className={'editTwoTone'}
                        twoToneColor={'dodgerblue'}
                        onClick={() => showModalEdit(id)}
                    />
                </Col>
                &nbsp; &nbsp; &nbsp;
                <Col flex={1}>
                    <Popconfirm
                        title="Bạn muốn xóa thể loại này？"
                        okText="Phải"
                        cancelText="Không"
                        onConfirm={() => deleteIdCatalog(id)}
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    >
                        <DeleteTwoTone
                            className={'deleteTwoTone'}
                            twoToneColor={'red'}
                        />
                    </Popconfirm>
                </Col>
            </Row>
        );
    };

    return (
        <div className={'container-catalog'}>
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['Title']}
                defaultOpenKeys={['Title']}
                mode="inline"
            >
                <Menu.Item key="Title" style={{ backgroundColor: '#33c6d6' }}>
                    <span className={'menuTitle'}>
                        <span>Danh sách thể loại</span>
                    </span>
                </Menu.Item>
            </Menu>
            <div style={{ overflow: 'auto', height: heightWindow, width: 256 }}>
                <Menu
                    // onClick={handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {Object.keys(list).map((id) => (
                        <Menu.Item key={id} >
                            <Link to={`${match.url}/${id}`} >
                                <Row justify="space-between">
                                    <Col span={4}>
                                        <Tooltip placement="right" title={list[id].description}>
                                            <ReadOutlined />
                                        </Tooltip>
                                    </Col>
                                    <Col span={16}><span>{list[id].name}</span></Col>
                                    <Col>
                                        <Popover content={<Content id={id} />} placement="right" trigger="click">
                                            <SettingOutlined />
                                        </Popover>
                                    </Col>
                                </Row>
                            </Link>
                        </Menu.Item>
                    ))}
                    {
                        Object.keys(list).length < 9 &&
                        (
                            <Button
                                className={'addCatalog'}
                                type="primary"
                                icon={<PlusCircleOutlined />}
                                onClick={showModal}
                            >
                                Thêm
                            </Button>
                        )
                    }
                </Menu>
            </div>
            {
                Object.keys(list).length >= 9 &&
                (
                    <Button
                        className={'addCatalog'}
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        onClick={showModal}
                    >
                        Thêm
                    </Button>
                )
            }
            <Modal
                title={<TitleAdd />}
                visible={visible}
                footer={null}
                closeIcon={true}
            >
                <Form {...layout} form={form} onFinish={onFinish}>
                    <Form.Item
                        name={'name'}
                        label="Tên thể loại"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống tên'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'description'}
                        label="Miêu tả"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Row style={{
                            alignItems: 'center',
                        }}>
                            <Col style={{ paddingRight: '20px' }}>
                                <Button type="primary" htmlType="submit">
                                    Thêm
                                </Button>
                            </Col>
                            <Col style={{ paddingLeft: '20px' }}>
                                <Button onClick={onReset}>
                                    Đóng
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title={<TitleEdit />}
                visible={visibleEdit}
                footer={null}
                closeIcon={true}
            >
                <Form {...layout} form={formEdit} onFinish={onFinishEdit}>
                    <Form.Item
                        name={'name'}
                        label="Tên thể loại"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống tên'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'description'}
                        label="Miêu tả"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Row style={{
                            alignItems: 'center',
                        }}>
                            <Col style={{ paddingRight: '20px' }}>
                                <Button type="primary" htmlType="submit">
                                    Lưu
                                </Button>
                            </Col>
                            <Col style={{ paddingLeft: '20px' }}>
                                <Button onClick={onReset}>
                                    Đóng
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

TreeCatalog.propTypes = {
    list: PropTypes.object,

    // func
    deleteId: PropTypes.func,
    post: PropTypes.func,
    put: PropTypes.func,
};

TreeCatalog.defaultProps = {
    list: {},
    post: () => null,
    put: () => null,
};

export default TreeCatalog;
