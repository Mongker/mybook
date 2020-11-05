import React from 'react';
import './style/style.css';
import 'antd/dist/antd.css';
import {Tabs} from 'antd';
import {InputNumber} from 'antd';

// import PropTypes from 'prop-types';

function onChange(value) {
    console.log('changed', value);
}

//style
const productimg = require('./img/product-book.jpg');
const deliveryimg = require('./img/delivery.png');
const payment = require('./img/credit-card.png');
const guarantee = require('./img/guarantee.png');
const support = require('./img/help.png');

const {TabPane} = Tabs;


function callback(key) {
    console.log(key);
}

function DetailProduct() {
    return (
        <div className={'detail'}>
            <div className={'line-page'}>
                <ul className={'list-line'}>
                    <li className={'arrow-li'}><a href="#">Home</a></li>
                    <li className={'arrow-li'}><a href="#">Mystery</a></li>
                    <li>Dark in Death: An Eve Dallas Novel (In Death, Book 46)</li>
                </ul>

            </div>
            <div className={'product'}>
                <img src={productimg} alt="" className={'img-product'}/>
                <div className={'content-product'}>
                    <h1 className={'banner-product'}>Dark in Death: An Eve Dallas Novel (In Death, Book 46)</h1>
                    <p className={'by-author'}>By (author) <a href="#" className={'name-au0thor'}>J. D. Robb</a></p>
                    <p className={'cost-book'}>$14.20</p>
                    <p className={'text-area-book'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eaque
                        esse ex exercitationem,
                        ipsam iure laborum ?</p>
                    <div className={'add-number'}>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} className={'input-number'}/>
                        <a href="#" className={'buy-now'}>Buy now</a>
                        <a href="#" className={'add-to-cart'}>Add to cart</a>
                    </div>

                </div>
                <div className={'list-certificate'}>
                    <div className={'items-certificate'}>
                        <img src={deliveryimg} alt="" className={'img-delivery'}/>
                        <div>
                            <p className={'delivery'}>Free Delivery</p>
                            <p className={'order-over'}>Orders over $100</p>
                        </div>
                    </div>
                    <div className={'items-certificate'}>
                        <img src={payment} alt="" className={'img-delivery'}/>
                        <div>
                            <p className={'delivery'}>Secure Payment</p>
                            <p className={'order-over'}>100% Secure Payment</p>
                        </div>
                    </div>
                    <div className={'items-certificate'}>
                        <img src={guarantee} alt="" className={'img-delivery'}/>
                        <div>
                            <p className={'delivery'}>Money Back Guarantee</p>
                            <p className={'order-over'}>Within 30 Days</p>
                        </div>
                    </div>
                    <div className={'items-certificate'}>
                        <img src={support} alt="" className={'img-delivery'}/>
                        <div>
                            <p className={'delivery'}>24/7 Support</p>
                            <p className={'order-over'}>Within 1 Business Day</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'infomation-product'}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Description" key="1">
                        We aim to show you accurate product information. Manufacturers, suppliers and others provide
                        what you see here, and we have not verified it. See our disclaimer

                        #1 New York Times Bestseller

                        A Reese Witherspoon x Hello Sunshine Book Club Pick

                        “I can’t even express how much I love this book! I didn’t want this story to end!”–Reese
                        Witherspoon

                        “Painfully beautiful.”–The New York Times Book Review

                        “Perfect for fans of Barbara Kingsolver.”–Bustle

                        For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North
                        Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals
                        immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive
                        and intelligent, she has survived for years alone in the marsh that she calls home, finding
                        friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched
                        and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself
                        to a new life–until the unthinkable happens.

                        Perfect for fans of Barbara Kingsolver and Karen Russell, Where the Crawdads Sing is at once an
                        exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale
                        of possible murder. Owens reminds us that we are forever shaped by the children we once were,
                        and that we are all subject to the beautiful and violent secrets that nature keeps

                        WHERE THE CRAWDADS LP
                    </TabPane>
                    <TabPane tab="Product Details" key="2">
                        <div className={'items-infor'}>
                            <div className={'book-infor'}>
                                <p className={'SKU'}>SKU: <p>BW-1003018</p></p>
                               <div className={'categories-detail'}>
                                   <p >Categories: </p>
                                   <div><a href="#">Mystery</a>, <a href="#">Thriller & Suspense</a></div>
                               </div>
                                <p className={'SKU'}>Book Author: <a href="#">J D. Robb</a></p>
                                <p className={'SKU'}>Book Format: <p>Hardcover</p></p>
                            </div>

                        </div>
                    </TabPane>

                </Tabs>
            </div>
        </div>
    );
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
