import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#e5e5e5',
  },
});

export default class CompanyList extends Component {
    static navigationOptions = {
        tabBarLabel: 'Companies',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name={'business'}
                size={45} 
                style={{ color: tintColor }}
            />
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Companies</Text>
      </View>
    );
  }
}
