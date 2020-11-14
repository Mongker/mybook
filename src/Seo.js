/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 15/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';

class BasicAd extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-2616710485643965"
                // data-ad-client="ca-pub-4591861188995436"
                data-ad-slot="4640466102"
                style={{ display: "inline-block", backgroundColor: 'blue',height: 250, width: 300 }}
            />
        );
    }
}
export default BasicAd;
