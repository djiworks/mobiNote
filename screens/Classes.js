import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ClassComponent  from '../components/ClassComponent';

const styles = StyleSheet.create({
  board: {
    flex: 1,
    margin: 0,
    padding: 10,
  },
});


export default class ClassesScreen extends React.Component {
  _renderItem = ({item}) => (
    <ClassComponent text={item.text}/>
  );

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.board}
        data={[{ text: 'a', key: 0 }, { text: 'b', key: 1}, { text: 'a', key: 2 }, { text: 'a', key: 3 }]}
        renderItem={this._renderItem}
        numColumns={2}
      />
    );
  }
}
