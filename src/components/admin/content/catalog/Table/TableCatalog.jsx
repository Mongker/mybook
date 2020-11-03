/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 27/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    InputNumber,
    Row,
    Col,
    Image,
    Popconfirm,
    Spin,
    Empty,
    Skeleton,
    Drawer,
    Form,
    Upload,
    Modal,
    Popover
} from 'antd';
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined, AppstoreTwoTone, PlusOutlined} from '@ant-design/icons';
import {URL_API} from 'src/api/config';

// util
import getBase64 from 'src/components/util/getBase64';
import getIdRandom from 'src/components/util/getIdRandom';
// const
const COL_SPAN = {
    img: 3,
    name: 4,
    price: 3,
    amount: 3,
    vote_user: 5,
    view_user: 3,
    event: 3,
};
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};
// const {Option} = Select;
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.32).toString() + "px";

function TableCatalog(props) {
    const {id, getListIdCatalog, listProduct, postProduct, deleteProduct, puProduct} = props;
    debugger; // MongLV
    // const default
    const loadingDefault = (<Spin size="large" style={{
        textAlign: 'center',
        paddingLeft: '50%',
        paddingTop: '100px'
    }}/>);
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();

    // state
    const [list, setList] = React.useState(listProduct);
    const [loading, setLoading] = useState(loadingDefault);
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [fileListImg, setFileListImg] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [idEdit, setIdEdit] = useState('');

    // update state
    if (listProduct !== list) {
        setList(listProduct);
    }

    // const prop or state
    const listArray = Object.keys(list);

    // lifecycle
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading({
                ...(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Không có dữ liệu'}
                           style={{paddingTop: '20px'}}/>)
            });
        }, 2200);
        return () => clearTimeout(time);
    }, []);

    useEffect(() => {
        getListIdCatalog(id);
    }, [id]);

    // func
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        setVisibleEdit(false);
        setFileList([]);
        setFileListImg([]);
        onReset();
    };
    const onFinish = (values) => {
        values.image_link = fileListImg;
        if (localStorage.getItem('id_click_catalog')) {
            values.catalog_id = localStorage.getItem('id_click_catalog');
            postProduct(values);
            onReset();
            onClose();
        }
    };
    const logicUpdateDataProduct = (values = {}) => {
        let newValue;
        const idItem = getIdRandom();
        const _itemIds = listProduct[idEdit].history_amount.itemIds || [];
        _itemIds.push(idItem);
        let sum = 0;
        newValue = {...values};
        newValue['history_amount'] = listProduct[idEdit].history_amount;
        newValue.history_amount['itemIds'] = _itemIds;
        newValue.history_amount.items[idItem] = {
            date: new Date(),
            amount: values.add_amount,
        };
        Object.keys(newValue.history_amount['items']).map((item) => {
            sum = sum +  newValue.history_amount.items[item].amount
        });
        newValue.history_amount['total'] = sum;
        newValue['amount'] = sum;
        return newValue;
    };

    const onFinishEdit = (values) => {
        let newValue = {};
        if(idEdit && fileListImg.length > 0) {
            values.image_link = fileListImg;
            newValue = logicUpdateDataProduct(values);
        } else {
            values.image_link = listProduct[idEdit].image_link;
            newValue = logicUpdateDataProduct(values);
        }
        puProduct(idEdit, newValue);
        onClose();
    };
    const handleChange = async ({fileList}) => {
        let arrayImg = [];
        if (fileList.length > 0) {
            fileList.map((item) => {
                item.response && arrayImg.push(`${item.response.fileNameInServer}`);
                item.url && arrayImg.push(`${item.url.slice(31)}`);
            });
            setFileListImg(arrayImg);
            setFileList(fileList);
        }
    };
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            debugger; // MongLV
            file.preview = await getBase64(file.originFileObj);
        }
        showModalImage();
        setPreviewImage(file.url || file.preview);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };
    const showModalImage = () => setPreviewVisible(!previewVisible);
    const onReset = () => {
        form1.resetFields(); // Reset lại các dữ liệu của form
        onResetEdit(idEdit); // Reset lại các dữ liệu của form
        setFileListImg([]);
        setFileList([]);
    };
    const onResetEdit = (id) => {
        let listImgDefault = [];
        debugger; // MongLV
        listProduct[id] && listProduct[id].image_link.map((item) => {
            const object = {
                uid: getIdRandom(),
                name: item.slice(8),
                status: 'done',
                url: `${URL_API.local}file/${item}`
            };
            listImgDefault.push(object);
        });
        setFileList(listImgDefault);
        debugger; // MongLV
        listProduct[id] && form2.setFieldsValue({
            name: listProduct[id].name,
            price: listProduct[id].price,
            amount: listProduct[id].amount,
            add_amount: 0,
            image_link: listImgDefault,
            description: listProduct[id].description,
        });
    };

    const handleDeleteProduct = (id) => {
        id && deleteProduct(id);
    };
    const handleEdit = (id) => {
        setIdEdit(id);
        setVisibleEdit(true);
        onResetEdit(id);
    };

    // JSX
    const Title = (
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <h2>Thêm sách vào thư mục</h2>
        </div>
    );
    const TitleEdit = (
        <div style={{
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <h2>Chỉnh sửa sách</h2>
        </div>
    );
    const Setting = ({id}) => {
        return (
            <Row justify="space-between">
                <Col flex={1}>
                    <EditTwoTone
                        className={'editTwoTone'}
                        twoToneColor={'dodgerblue'}
                        onClick={() => handleEdit(id)}
                    />
                </Col>
                &nbsp; &nbsp; &nbsp;
                <Col flex={1}>
                    <Popconfirm
                        title="Bạn muốn xóa thể loại này？"
                        okText="Phải"
                        cancelText="Không"
                        onConfirm={() => handleDeleteProduct(id)}
                        icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                    >
                        <DeleteTwoTone
                            className={'deleteTwoTone'}
                            twoToneColor={'red'}
                        />
                    </Popconfirm>
                </Col>
            </Row>)
    };

    return (
        <div>
            {/* Table: Product */}
            <Row className={'table-header-catalog'}>
                <Col className={'table-row-catalog'} span={COL_SPAN.img}>
                    Hình ảnh
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.name}>
                    Tên sách
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.price}>
                    Giá tiền
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.amount}>
                    Số lượng
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.view_user}>
                    Số lượt xem
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                    Số lượng bình chọn
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.event}>
                    Hành động
                </Col>
            </Row>
            <div style={{overflow: 'auto', height: heightWindow, width: 'auto'}}>
                {listArray.length > 0 ? (
                    listArray.map((item, index) => (
                        <Row className={'table-tr-catalog'} key={index}>
                            <Col className={'table-row-catalog'} span={COL_SPAN.img}>
                                <Image
                                    width={60}
                                    height={80}
                                    // src={list[item].image_link[0]}
                                    src={URL_API.local + 'file/' + list[item].image_link[0]}
                                    fallback={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
                                />
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.name}>
                                {list[item].name}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.price}>
                                {list[item].price} VNĐ
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.amount}>
                                {list[item].amount}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.view_user}>
                                {list[item].view_user}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                                {list[item].vote_user}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.event}>
                                <Popover content={<Setting id={item}/>} placement="left" trigger="click">
                                    <AppstoreTwoTone style={{fontSize: '15px'}}/>
                                </Popover>
                            </Col>
                        </Row>)
                    )
                ) : loading
                }
            </div>
            {(loading !== loadingDefault && id !== null) && (
                <Button type="primary" onClick={showDrawer}>Thêm</Button>)}
            {/* Thêm Product */}
            <Drawer
                width={"35%"}
                title={Title}
                placement={'right'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'right'}
            >
                <Form {...layout} form={form1} name="nest-messages" onFinish={onFinish}>
                    <Form.Item
                        name={'name'}
                        label="Tên sách: "
                        rules={[
                            {
                                required: true,
                                message: 'Tên sách là bắt buộc',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={'price'}
                        label="Giá tiền"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Giá tiền là bắt buộc',
                                min: 0,
                                max: 100000000,
                            },
                        ]}
                    >
                        <InputNumber
                            style={{width: '200px'}}
                            min={0} max={100000000}
                            formatter={(value) =>
                                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }
                            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                    <Form.Item
                        name={'amount'}
                        label="Số lượng"
                        rules={[
                            {
                                required: true,
                                message: 'Số lượng là bắt buộc phải có',
                            },
                        ]}
                    >
                        <InputNumber style={{width: '100px'}} min={0} max={100000000}/>
                    </Form.Item>
                    <Form.Item name={'description'} label="Miêu tả:">
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item
                        name={'image_link'}
                        label={'Ảnh:'}
                        rules={[
                            {
                                required: true,
                                message: 'Bắt buộc phải có ảnh',
                            },
                        ]}
                    >
                        <Upload
                            action={`${URL_API.local}file/upload`}
                            listType={'picture-card'}
                            onPreview={handlePreview}
                            fileList={fileList}
                            onChange={handleChange}
                        >
                            {fileListImg.length >= 8 ? null : (
                                <div>
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 7}}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '50px'}}>
                            Add
                        </Button>
                        <Button onClick={onReset} htmlType="button" style={{paddingLeft: '10px'}}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

            {/* Chỉnh sửa Product */}
            <Drawer
                width={"35%"}
                title={TitleEdit}
                placement={'right'}
                closable={false}
                onClose={onClose}
                visible={visibleEdit}
                key={'right'}
            >
                <Form {...layout} form={form2} name="nest-messages" onFinish={onFinishEdit}>
                    <Form.Item
                        name={'name'}
                        label="Tên sách: "
                        rules={[
                            {
                                required: true,
                                message: 'Tên sách là bắt buộc',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={'price'}
                        label="Giá tiền"
                        rules={[
                            {
                                required: true,
                                message: 'Giá tiền là bắt buộc',
                                type: 'number',
                                min: 0,
                                max: 100000000,
                            },
                        ]}
                    >
                        <InputNumber
                            style={{width: '200px'}}
                            min={0} max={100000000}
                            formatter={(value) =>
                                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            }
                            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                    <Form.Item
                        name={'amount'}
                        label="Số lượng"
                        rules={[
                            {
                                required: true,
                                message: 'Số lượng là bắt buộc phải có',
                                type: 'number',
                                min: 0,
                                max: 100000000,
                            },
                        ]}
                    >
                        <InputNumber style={{width: '100px'}} min={0} max={100000000}/>
                    </Form.Item>
                    <Form.Item
                        name={'add_amount'}
                        label="Lấy thêm:"
                        rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 100000000,
                            },
                        ]}
                    >
                        <InputNumber style={{width: '100px'}} min={0} max={100000000}/>
                    </Form.Item>
                    <Form.Item name={['description']} label="Miêu tả:">
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item
                        name={'image_link'}
                        label={'Ảnh:'}
                        rules={[
                            {
                                required: true,
                                message: 'Bắt buộc phải có ảnh',
                            },
                        ]}
                    >
                        <Upload
                            action={`${URL_API.local}file/upload`}
                            listType={'picture-card'}
                            onPreview={handlePreview}
                            fileList={fileList}
                            onChange={handleChange}
                        >
                            {fileListImg.length >= 8 ? null : (
                                <div>
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 7}}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '50px'}}>
                            Save
                        </Button>
                        <Button onClick={onReset} htmlType="button" style={{paddingLeft: '10px'}}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

            {/* Ảnh này sẽ bị ẩn đi chỉ để lấy thuộc tính modal của nó */}
            <Image
                width={200}
                preview={{
                    visible: previewVisible,
                    onVisibleChange: showModalImage
                }}
                src={previewImage}
                style={{position: 'absolute', top: '-10000px'}}
            />
        </div>
    );
}

TableCatalog.propTypes = {
    listProduct: PropTypes.object,
    type_key: PropTypes.object,

    getListIdCatalog: PropTypes.func,
    match: PropTypes.func,
    deleteAdmin: PropTypes.func,
    postProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    puProduct: PropTypes.func,

    type: PropTypes.string,
    id: PropTypes.string,
};

TableCatalog.defaultProps = {
    listProduct: {},
    deleteAdmin: () => null,
    id: null,
    getListIdCatalog: () => null,
    postProduct: () => null,
    deleteProduct: () => null,
    puProduct: () => null
};

export default React.memo(TableCatalog);
