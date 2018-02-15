import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ClassComponent, NewClassComponent } from '../components/ClassComponent';

const styles = StyleSheet.create({
  board: {
    flex: 1,
    margin: 0,
    padding: 10,
  },
});


export default class ClassesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: 'Accueil',
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { text: 'CAPPat', key: 0 },
        { text: 'BEPPlomb', key: 1 },
        { text: 'CAPElec', key: 2 },
        { text: 'BEPElec', key: 3 },
        { text: 'Ajouter', key: 4, special: true },
      ],
    };
  }
  goToStudents = (text) => {
    this.props.navigation.navigate('Students', { title: text});
  }
  render() {
    return (
      <FlatList
        contentContainerStyle={styles.board}
        data={this.state.data}
        numColumns={2}
        renderItem={({item}) => {
            if (!item.special) {
              return <ClassComponent text={item.text} onPress={() => this.goToStudents(item.text)}/>;
            }
            return <NewClassComponent />;
          }
        }
      />
    );
  }
}
