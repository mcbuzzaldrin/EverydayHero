'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class VolunteeringOpportunity extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>
            Volunteer Opportunity
          </Text>
        </View>

        <View style={styles.page}>
          <View style={styles.main}>
            <Text style={styles.mainText}>{this.props.name}</Text>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Organization: </Text>
            <Text style={styles.detail}>{this.props.organization_name}</Text>
          </View>

          <Text style={styles.label}>Description: </Text>
          <Text style={styles.detail}>{this.props.description}</Text>
          <View style={styles.group}>
          </View>

          <Text style={styles.label}>Address: </Text>
          <Text style={styles.detail}>{this.props.address}</Text>
          <View style={styles.group}>
          </View>

          <Text style={styles.label}>Website: </Text>
          <Text style={styles.detail}>{this.props.url}</Text>
          <View style={styles.group}>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Date Created: </Text>
            <Text style={styles.detail}>{this.props.created}</Text>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Great for: </Text>
            <Text style={styles.detail}>{this.props.great_for}</Text>

            <Text style={styles.label}> Minimum age: </Text>
            <Text style={styles.detail}>{this.props.minimum_age}</Text>
          </View>

          <Text style={styles.label}>Needed Skills: </Text>
          <Text style={styles.detail}>{this.props.skills_needed}</Text>
          <View style={styles.group}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  page: {
    flex: 1,
    padding: 16
  },

  toolbar:{
    height: 70,
    padding: 22,
    backgroundColor: '#53D75A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    //flex: 0.2,
    marginBottom: 16
  },
  title: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  label:{
    fontSize: 12,
    color: '#439FDF',
  },
  mainText:{
    fontSize: 14,
    color: '#439FDF',
  },
  detail:{
    fontSize: 11,
    color: '#1e1e1e',
  },
  group: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

