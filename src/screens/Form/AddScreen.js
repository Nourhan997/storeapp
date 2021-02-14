import React, { Component } from "react";
import styles from "./styles";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { createItem } from "../../core/data/crud-apis";

export default class AddScreen extends Component {
  state = {
    title: "",
    modal: "",
    price: "",
    description: "",
    brand: "",
  };

  handleCreateItem = async () => {
    try {
      await createItem({ title, modal, description, brand, price });
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {}

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.ScreenContainer}>
            <View style={styles.FormView}>
              <Text style={styles.logoText}>CreateItem</Text>
              <TextInput
                placeholder="title"
                placeholderColor="#c4c3cb"
                value={this.state.title}
                onChangeText={(e) =>
                  this.setState({
                    title: e.target.value,
                  })
                }
                style={styles.FormTextInput}
              />

              <TextInput
                placeholder="Modal"
                placeholderColor="#c4c3cb"
                value={this.state.modal}
                onChangeText={(e) =>
                  this.setState({
                    modal: e.target.value,
                  })
                }
                style={styles.FormTextInput}
              />
              <TextInput
                placeholder="Price"
                value={this.state.price}
                placeholderColor="#c4c3cb"
                onChangeText={(e) =>
                  this.setState({
                    price: e.target.value,
                  })
                }
                style={styles.FormTextInput}
              />
              <TextInput
                placeholder="Brand"
                placeholderColor="#c4c3cb"
                value={this.state.brand}
                onChangeText={(e) =>
                  this.setState({
                    brand: e.target.value,
                  })
                }
                style={styles.FormTextInput}
              />
              <TextInput
                placeholder="Description"
                placeholderColor="#c4c3cb"
                value={this.state.description}
                onChangeText={(e) =>
                  this.setState({
                    description: e.target.value,
                  })
                }
                style={styles.FormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.Button}
                onPress={() => this.handleCreateItem()}
                title="Create Item"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
