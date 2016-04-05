"use strict";

import React, {
  Component,
  StyleSheet,
} from 'react-native';

import NavigationRouter from '../lib/components/navigation/NavigationRouter';
import VolunteeringSearchView from './VolunteeringSearchView';

export default class Volunteering extends Component {

  render() {

    return (
      <NavigationRouter
        navBarStyle={styles.navbar}
        initialRoute={VolunteeringSearchView.route} />
    );

  }

}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "green"
  }
});
