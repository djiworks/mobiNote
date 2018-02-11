import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'darkturquoise',
    padding: 10,
    width: 150,
    height: 150,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  white: {
    color: 'white',
  },
});

export default class ClassComponent extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.square}>
        <Icon type="font-awesome" name="graduation-cap" size={50} color="white" />
        <Text style={styles.white}>{ this.props.text }</Text>
      </TouchableOpacity>
    );
  }
}
