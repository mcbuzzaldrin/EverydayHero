"use strict";

import React, {
  Component,
  TextInput,
  StyleSheet
} from 'react-native';

export default class SearchBar extends Component {

  blur() {
    this.refs.searchBar.blur();
  }

  render() {
    let {hideBackground, showsCancelButton, onCancelButtonPress, ...props} = this.props;
    return <TextInput {...props} ref="searchBar" />;
  }

}
