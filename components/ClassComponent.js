import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
} from 'react-native';

import {
  Icon,
  FormLabel,
  FormInput,
  Button,
} from 'react-native-elements';

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'darkturquoise',
    padding: 10,
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  white: {
    color: 'white',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  innerContainer: {

  },
  input: {
    width: 300,
  },
  header: {
    fontSize: 25,
  },
  icon: {
    margin: 50,
  },
  buttons: {
    marginTop: 80,
  },
});

export class ClassComponent extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.square}>
        <Icon type="font-awesome" name="graduation-cap" size={45} color="white" />
        <Text style={styles.white}>{ this.props.text }</Text>
      </TouchableOpacity>
    );
  }
}

export class NewClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      error: false,
    };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.header}>Nouvelle Classe</Text>
            <View style={styles.innerContainer}>
              <Icon
                type="font-awesome"
                name="graduation-cap"
                size={80}
                color="darkturquoise"
                iconStyle={styles.icon}
              />
              <FormLabel>Nom</FormLabel>
              <FormInput
                ref={input => this.name = input}
                placeholder="Nom de la classe"
                inputStyle={styles.input}
              />
              <FormLabel>Année</FormLabel>
              <FormInput
                ref={input => this.year = input}
                placeholder="2017 - 2018"
                inputStyle={styles.input}
              />
              <FormLabel>Description</FormLabel>
              <FormInput
                ref={input => this.desc = input}
                placeholder="Notes..."
                inputStyle={styles.input}
                numberOfLines={3}
                multiline={true}
                autoGrow={true}
              />
              <View style={styles.buttons}>
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
        <TouchableOpacity style={styles.square} onPress={() => this.openModal()}>
          <Icon type="font-awesome" name="plus" size={50} color="white" />
          <Text style={styles.white}>Nouveau</Text>
        </TouchableOpacity>
      </View>
    );
  }
}