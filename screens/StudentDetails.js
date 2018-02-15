import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';

const styles = StyleSheet.create({});


export default class StudentScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: `${state.params.title}`,
      headerRight: <Button title="Nouveau" />
    };
  };
  componentDidMount() {
    //this.props.navigation.setParams({ handleNew: this.openModal.bind(this) });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>toto</Text>
    );
  }
}
