/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 21/09/2020.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

// Redux
import { connect } from 'react-redux';

// components
import ModelView from "./ModelView";

// action
import * as SliderAction from '../../../../action/sliderAction';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    postSlider: (data) => dispatch(SliderAction.postSlider({data}))
    // updateSlider: (data) => dispatch()
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelView);

export default ModalContainer;
