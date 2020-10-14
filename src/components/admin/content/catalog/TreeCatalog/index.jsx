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
import {Menu, Tooltip, Popover, Row, Col, Popconfirm, Button} from 'antd';
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

function TreeCatalog(props) {
    const {list, deleteId} = props;
    const handleClick = e => {
        console.log('click ', e);
    };

    const deleteIdCatalog = (id) => {
        deleteId(id);
    };

    const Content = ({id}) => {
        return (
            <Row justify="space-between">

                <Col flex={1}>
                    <EditTwoTone
                        className={'editTwoTone'}
                        twoToneColor={'dodgerblue'}
                        onClick={() => {
                        }}
                    />
                </Col>
                &nbsp; &nbsp; &nbsp;
                <Col flex={1}>
                    <Popconfirm
                        title="Bạn muốn xóa thể loại này？"
                        okText="Phải"
                        cancelText="Không"
                        onConfirm={() => deleteIdCatalog(id)}
                        icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                    >
                        <DeleteTwoTone
                            className={'deleteTwoTone'}
                            twoToneColor={'red'}
                            onClick={() => {
                            }}
                        />
                    </Popconfirm>
                </Col>
            </Row>
        );
    };

    return (
        <div className={'container-catalog'}>
            <Menu
                onClick={handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['Title']}
                defaultOpenKeys={['Title']}
                mode="inline"
            >
                <Menu.Item key="Title" style={{backgroundColor: '#33c6d6'}}>
                        <span className={'menuTitle'}>
                            <span>Danh sách thể loại</span>
                        </span>
                </Menu.Item>
            </Menu>
            <div style={{overflow: 'auto', height: heightWindow, width: 256}}>
                <Menu
                    onClick={handleClick}
                    style={{width: 256}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {Object.keys(list).map((id) => (
                        <Menu.Item key={id}>
                            <Row justify="space-between">
                                <Col span={4}>
                                    <Tooltip placement="right" title={list[id].description}>
                                        <ReadOutlined/>
                                    </Tooltip>
                                </Col>
                                <Col span={16}><span>{list[id].name}</span></Col>
                                <Col>
                                    <Popover content={<Content id={id}/>} placement="right" trigger="click">
                                        <SettingOutlined/>
                                    </Popover>
                                </Col>
                            </Row>
                        </Menu.Item>
                    ))}
                    <Button className={'addCatalog'} type="primary" icon={<PlusCircleOutlined />}>
                        Thêm
                    </Button>
                </Menu>
            </div>
        </div>
    );
}

TreeCatalog.propTypes = {
    list: PropTypes.object,
    deleteId: PropTypes.func,
};

TreeCatalog.defaultProps = {
    list: {}
};

export default TreeCatalog;
