/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import insertCss from './insertCss';
import React, { Component } from 'react';

function withStyles(...styles) {
  return (BaseComponent) => class StyledComponent extends Component {

    componentWillMount() {
      this.removeCss = styles.insertCss;
    }

    componentWillUnmount() {
      this.removeCss();
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  };
}
export default withStyles;
