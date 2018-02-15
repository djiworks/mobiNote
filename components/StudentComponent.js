import React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
} from 'react-native';

import {
  Icon,
  FormLabel,
  FormInput,
  Button,
} from 'react-native-elements';


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
  },
  input: {
    width: 300,
  },
});

export class NewStudentModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="slide"
        onRequestClose={() => this.closeModal()}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Nouvel Élève</Text>
          <View>
            <Icon
              type="font-awesome"
              name="user"
              size={80}
              color="darkturquoise"
            />
            <FormLabel>Nom</FormLabel>
            <FormInput
              ref={input => this.name = input}
              placeholder="Nom de la classe"
              inputStyle={styles.input}
            />
            <FormLabel>Description</FormLabel>
            <FormInput
              ref={input => this.desc = input}
              placeholder="Notes..."
              inputStyle={styles.input}
            />
            <View>
              <Button
                onPress={() => this.closeModal()}
                title="Enregistrer"
                buttonStyle={{
                  backgroundColor: 'darkturquoise',
                  marginBottom: 25,
                }}
              >
              </Button>
              <Button
                onPress={() => this.closeModal()}
                title="Annuler"
              >
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
