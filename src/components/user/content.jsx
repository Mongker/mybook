import React, {Component} from 'react';
import './style/style.css';
import {Carousel, Row, Col, Image} from 'antd';
import {Card, Avatar, Rate} from 'antd';
import PropTypes from 'prop-types';
import {URL_API} from 'src/api/config';
//const
const {Meta} = Card;

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
//styles

function Content(props) {
    const {listProduct} = props;
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
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <div className={'new-release'}>
                <Row gutter={16}>
                    {
                        Object.keys(listProduct).length > 0 && Object.keys(listProduct).map((item, index) => (
                            <Col style={{
                                textAlign: 'center',
                                alignItems: 'center',
                                paddingTop: '5px'
                            }}>
                                <Card
                                    style={{width: 200,}}
                                    key={index}
                                    hoverable
                                    cover={<Cover id={item}/>}
                                >
                                    <Rate/>
                                    <Meta title={listProduct[item].name}
                                          description={listProduct[item].description}/>
                                    <p className={'cost'}>{`${listProduct[item].price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
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
};

export default Content;
