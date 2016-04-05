/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Tabbar, {
  Tab,
  RawContent,
  IconWithBar,
  glypyMapMaker
} from 'react-native-tabbar';

import Volunteering from './views/Volunteering';
import CampaignSearchView from './views/CampaignSearchView';
import NavigationRouter from './lib/components/navigation/NavigationRouter';
import LoginView from './views/LoginView';

const glypy = glypyMapMaker({
  Home: 'e900',
  Camera: 'e901',
  Stat: 'e902',
  Settings: 'e903',
  Favorite: 'e904'
});

class EverydayHero extends Component {
  render() {
    return (
      <Tabbar barColor={'green'}>
        <Tab name="Volunteering">
          <IconWithBar label="Volunteering" type={glypy.Favorite} from={'icomoon'}/>
          <RawContent>
            <Volunteering/>
          </RawContent>
        </Tab>
        <Tab name="Leaderboars">
          <IconWithBar label="Leaderboards" type={glypy.Stat} from={'icomoon'}/>
          <RawContent>
            <NavigationRouter
              navBarStyle={{backgroundColor: "green"}}
              initialRoute={CampaignSearchView.route}
            />
          </RawContent>
        </Tab>
        <Tab name="Account">
          <IconWithBar label="Account" type={glypy.Home} from={'icomoon'}/>
          <RawContent>
            <LoginView />
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EverydayHero', () => EverydayHero);
