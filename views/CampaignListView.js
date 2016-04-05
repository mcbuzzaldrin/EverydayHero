"use strict";

import React, {
  Component,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';

export default class CampaignListView extends Component {

  static defaultProps = {
    campaigns: [],
  };

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: dataSource.cloneWithRows(props.campaigns),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.campaigns)
    });
  }

  renderRow(campaign) {
    return (
      <TouchableOpacity onPress={() => this.props.onItemPress(campaign)} style={styles.listItem}>
        <Text style={styles.liText} numberOfLines={2}>{campaign.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          pageSize={20}
          renderRow={this.renderRow}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    paddingTop: 44,
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
