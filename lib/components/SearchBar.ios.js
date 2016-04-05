"use strict";

import React, {
  Component,
  StyleSheet
} from 'react-native';

import SearchBarIOS from 'react-native-search-bar';

export default class SearchBar extends Component {

  blur() {
    this.refs.searchBar.blur();
  }

  render() {
    return <SearchBarIOS {...this.props} ref="searchBar" />;
  }

}
