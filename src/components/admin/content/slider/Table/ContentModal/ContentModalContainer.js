/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 20/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import {connect} from "react-redux";

// components
import ContentModal from "./ContentModal";

// action
import * as actionSlider from "../../../../../../action/sliderAction";


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        post: (data, component) => dispatch(actionSlider.postSlider(data, component))
    };
};

const ContentModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentModal);

export default ContentModalContainer;
