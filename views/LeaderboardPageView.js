// Everydayhero Leaderboard Page View

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native';

import NavbarComponent from '../lib/components/navigation/NavbarComponent';
import NavViewComponent from '../lib/components/navigation/NavViewComponent';

class LeaderboardPageNav extends NavbarComponent {
  render() {
    return (
      <Text>{this.props.page.name}</Text>
    );
  }
}

export default class LeaderboardPageView extends NavViewComponent {

  static route = {
    NavBar: {
      Title: LeaderboardPageNav,
    },
    NavView: LeaderboardPageView
  };

  // I took this out cuz it was causing some errors.
  /*<Text style={styles.activity}>Fitness Activity </Text>
    <Text style={styles.run}>Run Duration (seconds): {this.props.page.fitness_activity_overview.run.duration_in_seconds}</Text>
    <Text style={styles.run}>Distance (meters): {this.props.page.fitness_activity_overview.run.distance_in_meters}</Text>*/
  render() {
    console.log(this.props.page);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}>
          <Image style={styles.photo} source={{uri: this.props.page.image.original_image_url}}/>
          <Text style={styles.title}>{this.props.page.charity_name}</Text>
          <Text style={styles.info}>{this.props.page.story}</Text>

          <Text style={styles.donations}> Donations </Text>
          <Text style={styles.targetCents}>Target Amount (Cents): {this.props.page.target_cents}</Text>
          <Text style={styles.actualCents}>{this.props.page.cents}Current Amount (Cents): {this.props.page.amount.cents}</Text>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingTop: 44,
      paddingBottom: 48,
  },


  photo: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 200,
    height: 220,
  },

  title: {
    alignSelf: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 32,
    color: '#008000',
  },

  info: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },

  activity: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
    color: '#008000'

  },

  run: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 16,

  },

  donations: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 18,
    color: '#008000',
  },

  targetCents: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 16,
  },

  actualCents: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 16,
  },

  scrollView: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: 10
  },
});

AppRegistry.registerComponent('everydayheroApp', () => everydayheroApp);
