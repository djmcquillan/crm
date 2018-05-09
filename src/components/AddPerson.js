import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton:{
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  add: {
    marginTop: 30,
  }
});

export default class AddPerson extends Component {
    static navigationOptions = {
        tabBarLabel: 'Add Person',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name={'plus'}
                size={70} 
                style={[{ color: tintColor }, styles.icon]}
            />
        )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add person</Text>
      </View>
    );
  }
}
