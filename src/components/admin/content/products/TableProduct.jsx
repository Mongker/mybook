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
    Drawer,
    Form,
    Upload,
    Select,
    Popover
} from 'antd';
import {EditTwoTone, DeleteTwoTone, QuestionCircleOutlined, AppstoreTwoTone, PlusOutlined} from '@ant-design/icons';
import {URL_API} from 'src/api/config';

// util
import getBase64 from 'src/components/util/getBase64';
import getIdRandom from 'src/components/util/getIdRandom';
// const
const {Search} = Input;
const {Option} = Select;
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

function TableProduct(props) {
    const {id, type, listCatalog, getListIdCatalog, listProduct, postProduct, deleteProduct, puProduct, getListProduct, getListCatalog} = props;
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
    const [listArray, setListArray] = React.useState([]);
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
        setListArray(Object.keys(listProduct))
    }

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
    useEffect(() => {
        getListProduct();
        getListCatalog();
    }, []);
    // func
    const showDrawer = () => {
        setVisible(true);
        form1.setFieldsValue({
            catalog_id: localStorage.getItem('id_click_catalog') || '',
        });
    };
    const onClose = () => {
        setVisible(false);
        setVisibleEdit(false);
        setFileList([]);
        setFileListImg([]);
    };
    const onFinish = (values) => {
        values.image_link = fileListImg;
        postProduct(values);
        onReset();
        onClose();
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
            sum = sum + newValue.history_amount.items[item].amount
        });
        newValue.history_amount['total'] = sum;
        newValue['amount'] = sum;
        return newValue;
    };

    const onFinishEdit = (values) => {
        let newValue = {};
        if (idEdit && fileListImg.length > 0) {
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
            file.preview = await getBase64(file.originFileObj);
        }
        showModalImage();
        setPreviewImage(file.url || file.preview);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };
    const showModalImage = () => setPreviewVisible(!previewVisible);

    const onReset = () => {
        form1.resetFields(); // Reset lại các dữ liệu của form
    };
    const onResetEdit = (id = idEdit) => {
        let listImgDefault = [];
        listProduct[id] && listProduct[id].image_link.map((item) => {
            const object = {
                uid: getIdRandom(),
                name: item.slice(8),
                status: 'done',
                url: `${URL_API.local}file/${item}`
            };
            console.log(object);
            listImgDefault.push(object);
        });
        setFileList(listImgDefault);
        listProduct[id] && form2.setFieldsValue({
            name: listProduct[id].name,
            price: listProduct[id].price,
            amount: listProduct[id].amount,
            add_amount: 0,
            image_link: listImgDefault,
            description: listProduct[id].description,
            catalog_id: listProduct[id].catalog_id,
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

    const handleSearch = (value) => {
        const newList = Object.keys(listProduct).filter((item) => (listProduct[item].name.toLowerCase().indexOf(value.toLowerCase()) !== -1) ||
            (listProduct[item].amount.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1 ) ||
            listProduct[item].price.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1
            )
        ;
        setListArray(newList);
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
    const CatalogText = ({id}) => {
        const textCatalog = Object.keys(listCatalog).length > 0 && listCatalog[id] && listCatalog[id].name || '';
        return (<>{textCatalog}</>)
    };

    return (
        <div>
            <Row style={{
                position: !type ? 'absolute' : 'fixed',
                top: `${window.innerHeight * 0.025}px`,
                left: '55%',
                width: `${window.innerWidth * 0.42}px`
            }}>
                <Col span={12} offset={10}>
                    <Search
                        placeholder="Tìm kiếm"
                        style={{width: "97%"}}
                        enterButton
                        onSearch={(value) => handleSearch(value)}
                    />
                </Col>
                <Col span={2}>
                    <Button
                        type="primary"
                        onClick={showDrawer}
                    >
                        Thêm
                    </Button>
                </Col>
            </Row>
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
                    Đã bán
                </Col>
                <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                    Thể loại
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
                                <Row>
                                    <Row><b>{list[item].name}</b></Row>
                                    <Row>View: {list[item].view_user} | Vote: {list[item].vote_user}</Row>
                                </Row>
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.price}>
                                {`${list[item].price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.amount}>
                                {list[item].amount}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.view_user}>
                                {list[item].sold}
                            </Col>
                            <Col className={'table-row-catalog'} span={COL_SPAN.vote_user}>
                                <CatalogText id={list[item].catalog_id}/>
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
                    <Form.Item
                        name={'catalog_id'}
                        label={'Thư mục:'}
                        rules={[
                            {
                                required: true,
                                message: 'Bắt buộc phải có',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            showSearch
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            allowClear
                        >
                            {Object.keys(listCatalog).length > 0 && Object.keys(listCatalog).map((item, index) => (
                                <Option value={item}>{listCatalog[item].name}</Option>
                            ))}
                        </Select>
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
                        <InputNumber disabled={true} style={{width: '100px'}} min={0} max={100000000}/>
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
                    <Form.Item
                        name={'catalog_id'}
                        label={'Thư mục:'}
                        rules={[
                            {
                                required: true,
                                message: 'Bắt buộc phải có',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            showSearch
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            allowClear
                        >
                            {Object.keys(listCatalog).length > 0 && Object.keys(listCatalog).map((item, index) => (
                                <Option value={item}>{listCatalog[item].name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 7}}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '50px'}}>
                            Save
                        </Button>
                        <Button onClick={() => onResetEdit(idEdit)} htmlType="button" style={{paddingLeft: '10px'}}>
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

TableProduct.propTypes = {
    listProduct: PropTypes.object,
    listCatalog: PropTypes.object,
    type_key: PropTypes.object,

    getListIdCatalog: PropTypes.func,
    match: PropTypes.func,
    deleteAdmin: PropTypes.func,
    postProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    puProduct: PropTypes.func,
    getListProduct: PropTypes.func,
    getListCatalog: PropTypes.func,

    type: PropTypes.string,
    id: PropTypes.string,
};

TableProduct.defaultProps = {
    listProduct: {},
    listCatalog: {},
    deleteAdmin: () => null,
    id: null,
    type: null,
    getListIdCatalog: () => null,
    postProduct: () => null,
    deleteProduct: () => null,
    puProduct: () => null,
    getListProduct: () => null,
    getListCatalog: () => null
};

export default React.memo(TableProduct);
