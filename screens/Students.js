import React from 'react';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { FlatList, View, ActivityIndicator, Button } from 'react-native';
import { NewStudentModal } from '../components/StudentComponent';

const list = [
  {
    name: 'Amy Farha',
  },
  {
    name: 'Chris Jackson',
  },
];

export default class StudentsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: `Classe ${state.params.title}`,
      headerRight: <Button title="Nouveau" onPress={state.params.handleNew} />
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleNew: this.openModal.bind(this) });
  }

  openModal() {
    this.modal.openModal();
  }

  constructor(props) {
      super(props);

      this.state = {
        loading: false,
        data: list,
      };
    }

  goToStudent = (text) => {
    this.props.navigation.navigate('Student', { title: text});
  }

  renderHeader = () => {
    return <SearchBar
      lightTheme
      icon={{ type: 'font-awesome', name: 'search' }}
      placeholder='Entrez un nom' />
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: 45,
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0}}>
          <FlatList
            data={this.state.data}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
            <ListItem
              roundAvatar
              leftIcon={{ name: 'user-circle', type: 'font-awesome' }}
              title={item.name}
              containerStyle={{ borderBottomWidth: 0}}
              chevronColor='darkturquoise'
              onPress={this.goToStudent(item.name)}
            />
          )}
          />
        </List>
        <NewStudentModal onRef={ref => (this.modal = ref)}/>
      </View>
    );
  }
}
