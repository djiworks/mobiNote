import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ClassComponent, NewClassComponent }  from '../components/ClassComponent';

const styles = StyleSheet.create({
  board: {
    flex: 1,
    margin: 0,
    padding: 10,
  },
});


export class ClassesScreen extends React.Component {
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

  _renderItem({item}) {
    if (!item.special) {
      return <ClassComponent text={item.text} />
    }
    return <NewClassComponent />
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.board}
        data={this.state.data}
        renderItem={this._renderItem}
        numColumns={2}
      />
    );
  }
}

export class NewClassScreen extends React.Component {
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

  _renderItem({item}) {
    if (!item.special) {
      return <ClassComponent text={item.text} />
    }
    return <NewClassComponent />
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.board}
        data={this.state.data}
        renderItem={this._renderItem}
        numColumns={2}
      />
    );
  }
}
