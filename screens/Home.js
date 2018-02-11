import React from 'react';
import { View, Text } from 'react-native';

import { ClassesScreen } from './Classes'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ClassesScreen/>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate('Profile');
  }
}
