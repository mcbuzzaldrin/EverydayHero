'use strict';

import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    console.log("login");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.mainContainer}>
          <TouchableHighlight onPress={this.login} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login to EverydayHero</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'green',
    justifyContent: 'center',
    height: 64
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 44,
    fontSize: 16
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  loginButton: {
    width: 200,
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    fontSize: 16,
    color: 'white',
  }
});
