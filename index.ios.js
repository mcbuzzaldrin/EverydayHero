/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} from 'react-native';

import Volunteering from './views/Volunteering';
import CampaignSearchView from './views/CampaignSearchView';
import NavigationRouter from './lib/components/navigation/NavigationRouter';
import LoginView from './views/LoginView';

class EverydayHero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="green">
        <TabBarIOS.Item
          title="Volunteering"
          selected={this.state.selected === 0}
          onPress={() => this.setState({selected: 0})}>
          <Volunteering />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Leaderboards"
          selected={this.state.selected === 1}
          onPress={() => this.setState({selected: 1})}>
          <NavigationRouter
            navBarStyle={{backgroundColor: "green"}}
            initialRoute={CampaignSearchView.route}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Account"
          selected={this.state.selected === 2}
          onPress={() => this.setState({selected: 2})}>
          <LoginView />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('EverydayHero', () => EverydayHero);
