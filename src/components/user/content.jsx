import React, {Component} from 'react';
import './style/style.css';
import 'antd/dist/antd.css';
import {Carousel, Menu} from 'antd';
import {Card, Avatar} from 'antd';
import {Link, useHistory} from "react-router-dom";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
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
const camera = require('./img/camera (1).png');
const fooddrink = require('./img/fooddrink.png');
const romance = require('./img/romance.png');
const health = require('./img/health.png');
const biography = require('./img/biography.png');
const avenir = require('./img/avenir.jpg');
const release = require('./img/release.png');
const author1 = require('./img/author-1.jpg');
const author2 = require('./img/author-2.jpg');
const author3 = require('./img/author-3.jpg');
const author4 = require('./img/author-4.jpg');
const author5 = require('./img/author-5.jpg');

const adcbook = require('./img/book.PNG');
//const backgroundpink = require('../img/background-pink.jpg');
const ferbuarybook = require('./img/ferbuary-book.png');
const shoppingcart = require('./img/shopping-cart.png');
const phonecall = require('./img/phone-call.png');


function Content() {
    let history = useHistory();
    const handleClick = () => {
        debugger; // MongLV
        history.push('/product-detail');
    };
    return (
        <div className={'content-m'}>
            <Carousel autoplay>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider"}>

                        <div className={'text-slider'}>
                            <div className={'bookworm-editor'}>
                                <div className={'editor'}>
                                    <p className={'text-1'}>THE ADCBOOK EDITORS'</p>
                                    <p className={'text-2'}>Featureds Books of The</p>
                                    <p className={'text-bold'}> Ferbuary</p>
                                    <div className={'button-see-more'}><a href={'#'} className={'see-more'}>See more</a>
                                    </div>
                                </div>

                                <img src={ferbuarybook} alt="" className={'content-img'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </Carousel>
            <div className={'feature-categories'}>
                {/*<div className={'feature'}>*/}
                {/*    <p className={'text-feature'}>Featured Categories</p>*/}
                {/*    <a href="#" className={'see-all'}>All Categories</a>*/}

                {/*</div>*/}
                {/*<div className={'list-picture-feature'}>*/}
                {/*    <ul className={'picture-feature'}>*/}
                {/*        <li className={'list-type-book'}>*/}
                {/*            <a href="#" className={'art'}><img src={camera} alt="" className={'img-feature'} />*/}
                {/*                <p className={'art-photography'}>Arts and Photography</p>*/}
                {/*                <p className={'shop-now'}>Shop now</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className={'list-type-book'}>*/}
                {/*            <a href="#" className={'food'}><img src={fooddrink} alt="" className={'img-feature'} />*/}
                {/*                <p className={'food-drink'}>Foods and Drinks</p>*/}
                {/*                <p className={'shop-now'}>Shop now</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className={'list-type-book'}>*/}
                {/*            <a href="#" className={'romance'}><img src={romance} alt="" className={'img-feature'} />*/}
                {/*                <p className={'romance-text'}>Romance</p>*/}
                {/*                <p className={'shop-now'}>Shop now</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className={'list-type-book'}>*/}
                {/*            <a href="#" className={'health'}><img src={health} alt="" className={'img-feature'} />*/}
                {/*                <p className={'health-text'}>Health</p>*/}
                {/*                <p className={'shop-now'}>Shop now</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className={'list-type-book'}>*/}
                {/*            <a href="#" className={'biography'}><img src={biography} alt="" className={'img-feature'} />*/}
                {/*                <p className={'biography-text'}>Biography</p>*/}
                {/*                <p className={'shop-now'}>Shop now</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

            </div>
            <div className={'selling-book'}>
                <div className={'best-selling'}>
                    <p className={'text-feature'}>Bestselling Books</p>
                    <a href="#" className={'view-all-selling'}>View all</a>
                </div>

                <Carousel autoplay>
                    <div>
                        <div className={'carousel-x'}>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                                onClick={handleClick}
                            >
                                <Link to={'/product-detail'}>
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Link>

                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>

                        </div>
                    </div>
                    <div>
                        <div className={'carousel-x'}>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>

                        </div>
                    </div>
                    <div>
                        <div className={'carousel-x'}>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>

                        </div>
                    </div>
                    <div>
                        <div className={'carousel-x'}>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>

                        </div>

                    </div>
                    <div>
                        <div className={'carousel-x'}>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>
                            <Card
                                hoverable
                                style={{width: 180}}
                                cover={<img alt="example" src={avenir}/>}
                            >
                                <Meta title="Angry God " description="L.J Shen"/>
                                <p className={'cost'}>$1.30</p>
                                <a href="#" className={'add-cart'}>Add to Cart</a>
                            </Card>

                        </div>

                    </div>
                </Carousel>

            </div>
            <div className={'new-release'}>
                <div className={'content-release'}>
                    <p className={'text-release'}>New Releases</p>

                </div>
                <div className={'banner-release'}>
                    <div className={'pic-release'}>
                        <div className={'pic-sale'}>
                            <img src={release} alt="" className={'img-release'}/>
                            <p className={'text-extra'}>Get Extra</p>
                            <p className={'text-sale'}>Sale -25%</p>
                            <p className={'text-order'}>ON ORDER OVER 100%</p>

                        </div>

                        <div className={'item-release'}>
                            <div className={'release-1'}>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                            </div>
                            <div className={'release-2'}>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                                <Card
                                    hoverable
                                    style={{width: 180}}
                                    cover={<img alt="example" src={avenir} className={'release-card-sale'}/>}
                                >
                                    <Meta title="Angry God " description="L.J Shen"/>
                                    <p className={'cost'}>$1.30</p>
                                    <a href="#" className={'add-cart'}>Add to Cart</a>
                                </Card>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={'author'}>

                    <div className={'favorite-author'}>
                        <div className={'text-favorite-author'}>
                            <p className={'text-favor'}>Favorite Authors</p>
                            <a href=" #" className={'view-all-author'}>View All</a>
                        </div>
                        <div className={'div-img-author'}>
                            <a href="#">
                                <img src={author1} alt="" className={'author-img'}/>
                                <p className={'text-name-author'}>Barbara O'Neal</p>
                                <p className={'text-publish'}>1 Published Book</p>
                            </a>
                            <a href="#">
                                <img src={author2} alt="" className={'author-img'}/>
                                <p className={'text-name-author'}>A J Riddle</p>
                                <p className={'text-publish'}>2 Published Book</p>
                            </a>
                            <a href="#">
                                <img src={author3} alt="" className={'author-img'}/>
                                <p className={'text-name-author'}>Anna Banks</p>
                                <p className={'text-publish'}>6 Published Book</p>
                            </a>
                            <a href="#">
                                <img src={author4} alt="" className={'author-img'}/>
                                <p className={'text-name-author'}>Ashlee Vance</p>
                                <p className={'text-publish'}>2 Published Book</p>
                            </a>
                            <a href="#">
                                <img src={author5} alt="" className={'author-img'}/>
                                <p className={'text-name-author'}>Andre Aciman</p>
                                <p className={'text-publish'}>1 Published Book</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Content;
