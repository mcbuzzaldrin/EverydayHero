"use strict";

import React, {
  Component,
  StyleSheet,
  View,
  Navigator,
} from 'react-native';

export default class NavbarComponent extends Component {

  static propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator).isRequired,
    index: React.PropTypes.number.isRequired,
    routeData: React.PropTypes.object.isRequired,
  };

}

