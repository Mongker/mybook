import React, {Component} from 'react';
import './style/style.css';
import {Carousel, Row, Col, Image, message, Button} from 'antd';
import {Card, Avatar, Rate} from 'antd';
import PropTypes from 'prop-types';
import {URL_API} from 'src/api/config';
//const
const {Meta} = Card;

function onChange(a, b, c) {
    console.log(a, b, c);
}

//styles

function Content(props) {
    const {listProduct, listSlider, postCart, arrayProduct = []} = props;
    function onPostCart(id_product) {
        if(localStorage.getItem('id_user')) {
            const data = {
                "catalog_id": listProduct[id_product].catalog_id,
                "product_id": id_product,
                "user_id": localStorage.getItem('id_user'),
            };
            postCart(data);
        } else message.warn('Bạn cần đăng nhập để thêm vào giỏ hàng')
    }
    // JSX
    const Cover = ({id}) => (
        <div style={{
            textAlign: 'center',
            alignItems: 'center'
        }}
        >
            <Image width={200} height={240} alt="example" src={`${URL_API.local}file/${listProduct[id].image_link[0]}`}
                   className={'release-card-sale'}/>
        </div>
    );
    return (
        <div className={'content-m'}>
            <Carousel autoplay>
                {
                    listSlider && Object.keys(listSlider).map((item, index) => (
                        <img
                            key={index}
                            src={`${URL_API.local}file/${listSlider[item].image_link}`}
                            alt="Girl in a jacket"
                            width="500px" height="450px"
                        />
                    ))
                }
            </Carousel>
            <div className={'new-release'}>
                <Row gutter={16}>
                    {
                        Object.keys(listProduct).length > 0 && arrayProduct.map((item, index) => (
                            <Col style={{
                                textAlign: 'center',
                                alignItems: 'center',
                                paddingTop: '5px'
                            }}
                                 key={index}
                            >
                                <Card
                                    style={{width: 200,}}
                                    hoverable
                                    cover={<Cover id={item}/>}
                                >
                                    <Rate/>
                                    <Meta title={listProduct[item].name}
                                          description={listProduct[item].description}/>
                                    <p className={'cost'}>{`${listProduct[item].price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</p>
                                    <Button type={'primary '} onClick={() => onPostCart(item)}>Add to Cart</Button>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
}

Content.propTypes = {
    listProduct: PropTypes.object,
    listSlider: PropTypes.object,
    postCart: PropTypes.func,
};

export default Content;
