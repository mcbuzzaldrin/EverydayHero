'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {volunteeringStore} from '../stores';
import NavbarComponent from '../lib/components/navigation/NavbarComponent';
import NavViewComponent from '../lib/components/navigation/NavViewComponent';
import SearchBar from '../lib/components/SearchBar';
import {EventEmitter} from 'events';
import VolunteeringOpportunity from './VolunteeringOpportunity';

const comunicator = new EventEmitter();

class VoluteeringSearchBar extends NavbarComponent {

  constructor(props) {
    super(props);

    this.state = {
      searching: false,
    };

    this._timeout = null;
    this._searchTextChanged = (q) => {
      clearTimeout(this._timeout);
      this.setTimeout(500).then(() => volunteeringStore.fetchWithQuery(q));
    };

    this.blur = () => {
      this.refs.searchBar.blur();
    }

  }

  componentDidMount() {
    comunicator.addListener('blur', this.blur);
  }

  componentWillUnmount() {
    comunicator.removeListener('blur', this.blur);
    clearTimeout(this._timeout);
  }

  setTimeout(time) {
    return new Promise((resolve, reject) => {
      this._timeout = setTimeout(resolve, time);
    });
  }

  render() {

    let {width, height} = Dimensions.get('window');

    return (
      <SearchBar
        ref="searchBar"
        style={[styles.searchbar, {width: width}]}
        placeholder="Search"
        hideBackground={true}
        showsCancelButton={this.state.searching}
        onChangeText={this._searchTextChanged}
        onFocus={() => this.state.searching || this.setState({searching: true})}
        onCancelButtonPress={() => this.setState({searching: false})}
      />
    );
  }

}

class VOpTitle extends NavbarComponent {

  render() {
      return <Text>{this.props.name}</Text>;
    }

}

export default class VolunteeringSearchView extends NavViewComponent {

  static route = {
    NavBar: {
      Title: VoluteeringSearchBar,
      LeftButton: null,
      RightButton: null,
    },
    NavView: VolunteeringSearchView,
  };

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource,
    };

    this.setData = (data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
      });
    }

    this.navigate = (name, data) => {
      comunicator.emit('blur');
      this.props.navigator.push({
        NavBar: {
          Title: VOpTitle,
          LeftButton: null,
          RightButton: null,
        },
        NavView: VolunteeringOpportunity,
        ...data
      });
    }

  }

  componentDidMount() {
    volunteeringStore.addListener('change', this.setData);
  }

  componentWillUnmount() {
    volunteeringStore.removeListener('change', this.setData);
  }

  renderListItem(data) {
    let uri = data.image_url ? data.image_url.original || data.image_url.dashboard || null : null;
    return (
      <TouchableOpacity onPress={() => this.navigate(data.name, data)}>
        <View style={styles.listItem}>
          <View style={styles.liImageContainer}>
            <Image style={styles.liImage} source={{uri}}/>
          </View>
          <View style={styles.liTextContainer}>
            <Text numberOfLines={2}>{data.name}</Text>
            <Text style={styles.listItemSubText} numberOfLines={1}>{data.organization_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            pageSize={20}
            renderRow={this.renderListItem.bind(this)}
            onScroll={() => comunicator.emit('blur')}
          />
        </View>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
  },
  searchbar: {
    flex: 1,
    height: 44,
  },
  content: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#EEE",
    paddingVertical: 10,
  },
  liTextContainer: {
    flex: 0.8,
    paddingHorizontal: 10,
  },
  liImageContainer: {
    flex: 0.2,
    height: 50,
    marginLeft: 10,
    alignItems:'stretch',
  },
  liImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  listItemSubText: {
    color: "#888",
    fontSize: 12,
    fontWeight: '300',
  }
});

export default VolunteeringSearchView;
