'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import * as api from '../lib/edh-api';
import CampaignListView from './CampaignListView';
import NavbarComponent from '../lib/components/navigation/NavbarComponent';
import NavViewComponent from '../lib/components/navigation/NavViewComponent';

import LeaderboardView from './LeaderBoardView';

class CampaignSearchNavBar extends NavbarComponent {

  render() {
    return <Text>Campaign Leaderboards</Text>;
  }

}

export default class CampaignSearchView extends NavViewComponent {

  static route = {
    NavBar: {
      Title: CampaignSearchNavBar
    },
    NavView: CampaignSearchView
  };

  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };

    this.navigate = (campaign) => {
      this.props.navigator.push({
        campaign: campaign,
        ...LeaderboardView.route
      });
    };
  }

  componentDidMount() {
    this.fetchCampaigns().then((data) => {
      this.setState({campaigns: data});
    }).catch((e) => console.log(e));
  }

  async fetchCampaigns() {
    let res = await fetch(api.domain + '/campaigns?limit=50&page=1');
    let json = await res.json();
    return json.campaigns;
  }

  render() {
    return (
      <CampaignListView campaigns={this.state.campaigns} onItemPress={this.navigate}/>
    );
  }

}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  }
});
