import React, { Component } from 'react';
import './style/style.css';
import 'antd/dist/antd.css';


// const
const adcbook = require('./img/book.PNG');
const instagram = require('./img/instagram.png');
const facebook = require('./img/facebook.png');
const youtube = require('./img/youtube.png');
const twitter = require('./img/twitter.png');
const pinterest = require('./img/pinterest.png');
const websitehethong1 = require('./img/website-cung-he-thong-1.png');
const logo3 = require('./img/logo3.png');
function Footer(){
    return (
        <div className={'footer'}>
           <div className={'footer-component'}>
               <div className={'address-adcbook'}>
                   <img src={adcbook} alt=""/>
                   <p className={'address'}> Tầng 12A, toà Diamond Flower, Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội.</p>
                   <p className={'number'}>(024) 73 068 789 – Fax: (024) 3512 1385.</p>
                   <p className={'email'}>Email: <a href="#">info@adcbook.net.vn</a></p>
                   <div className={'icon-social'}>
                       <a href="#"><img src={instagram} alt="" className={'instagram'} title={'Intstagram'}/></a>
                       <a href="#"><img src={facebook} alt="" className={'social'} title={'Facebook'}/></a>
                       <a href="#"><img src={youtube} alt="" className={'social'} title={'Youtube'}/></a>
                       <a href="#"><img src={twitter} alt="" className={'social'} title={'Twitter'}/></a>
                       <a href="#"><img src={pinterest} alt="" className={'social'} title={'Pinterest'}/></a>
                   </div>
               </div>
               <div className={'column-footer'}>
                   <div className={'explore-column'}>
                       <p className={'explore'}>Explore</p>
                       <a href="#" className={'lower-column'}>About us</a>
                       <a href="#" className={'lower-column'}>Site map</a>
                       <a href="#" className={'lower-column'}>Bookmarks</a>
                       <a href="#" className={'lower-column'}>Sign in/Join</a>
                   </div>
                   <div className={'explore-column'}>
                       <p className={'explore'}>Customer Service</p>
                       <a href="#" className={'lower-column'}>Help Center</a>
                       <a href="#" className={'lower-column'}>Returns</a>
                       <a href="#" className={'lower-column'}>Product Recalls</a>
                       <a href="#" className={'lower-column'}>Accessibility</a>
                       <a href="#" className={'lower-column'}>Contact Us</a>
                       <a href="#" className={'lower-column'}>Store Pickup</a>
                   </div>
                   <div className={'explore-column'}>
                       <p className={'explore'}>Policy</p>
                       <a href="#" className={'lower-column'}>Return Policy</a>
                       <a href="#" className={'lower-column'}>Terms Of Use</a>
                       <a href="#" className={'lower-column'}>Security</a>
                       <a href="#" className={'lower-column'}>Privacy</a>
                   </div>
                   <div className={'explore-column'}>
                       <p className={'explore'}>Categories</p>
                       <a href="#" className={'lower-column'}>Action</a>
                       <a href="#" className={'lower-column'}>Comedy</a>
                       <a href="#" className={'lower-column'}>Drama</a>
                       <a href="#" className={'lower-column'}>Horror</a>
                       <a href="#" className={'lower-column'}>Kids</a>
                       <a href="#" className={'lower-column'}>Romantic Comedy</a>
                   </div>
               </div>
           </div>
           <div className={'lower-footer'}>
               <div className={'footer-cass'}>
                   <p className={'text-lower-cass'}>© 2018 - Bản quyền của CÔNG TY CP MĨ THUẬT VÀ TRUYỀN THÔNG - ADCBook</p>

               </div>
               <div className={'lower-img'}>
                 <img src={websitehethong1} alt=""/>
                 <img src={logo3} alt=""/>
               </div>
           </div>
        </div>

    )
}


export default Footer;
