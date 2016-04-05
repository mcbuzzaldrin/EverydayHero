"use strict";

import React, {
  Component,
  Navigator,
} from 'react-native';

export default class NavComponent extends Component {

  static propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator).isRequired,
    routeData: React.PropTypes.object,
  };

  static defaultProps = {
    routeData: {},
  };

}
