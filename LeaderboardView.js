//LeaderboardView

'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  ListView,
  TouchableOpacity,
  Text
} from 'react-native';

import * as api from '../lib/edh-api';
import NavbarComponent from '../lib/components/navigation/NavbarComponent';
import NavViewComponent from '../lib/components/navigation/NavViewComponent';

import LeaderboardPageView from './LeaderboardPageView';

class LeaderboardNavBar extends NavbarComponent {

  render() {
    return <Text>{this.props.campaign.name}</Text>
  }

}

export default class LeaderboardView extends NavViewComponent {

  static route = {
    NavBar: {
      Title: LeaderboardNavBar,
    },
    NavView: LeaderboardView
  };

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      leaderboard: dataSource.cloneWithRows([])
    };
    this.renderRow = this.renderRow.bind(this);

    this.navigate = (page) => {
      this.props.navigator.push({
        ...LeaderboardPageView.route,
        page: page
      });
    };
  }

  async fetchLeaderboard() {
    let res = await fetch(api.domain + `/campaigns/${this.props.campaign.id}/leaderboard?limit=20`);
    let json = await res.json();
    let ids = json.leaderboard.page_ids.join(',')
    if (ids) {
      res = await fetch(api.domain + `/pages?ids=${ids}`);
      json = await res.json();
      return json.pages;
    } else {
      return [];
    }
  }

  componentDidMount() {
    this.fetchLeaderboard().then((pages) => {
      this.setState({
        leaderboard: this.state.leaderboard.cloneWithRows(pages),
      });
    })
  }

  renderRow(page, sid, rid) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => this.navigate(page)}>
        <Text>{Number(rid) + 1 + ' ' + page.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.listview}
          dataSource={this.state.leaderboard}
          renderRow={this.renderRow}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 44
  },
  listview: {
    flex: 1,
    paddingTop: 64,
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#EEE",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  liText: {
    fontSize: 16,
  }

});
