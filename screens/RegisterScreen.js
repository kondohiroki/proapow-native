import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import { Card, ListItem, Button } from 'react-native-elements';

import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';


export default class RegisterScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      password_confirmation: "",
    };
  }


  render() {

    return (
      <ScrollView style={styles.container}>
      <View style={styles.container}>
      <Card
        titleStyle={{color: 'navy',}}
        title='Register'>
        <TextField
          placeholder="FirstName"
        />
        <TextField
          placeholder="LastName"
        />
        <TextField
          placeholder="Email"
        />
        <PasswordInputText
            onChangeText={ (password) => this.setState({ password }) }
        />
        <PasswordInputText
            placeholder="Confirm Password"
            onChangeText={ (password_confirmation) => this.setState({ password_confirmation }) }
        />
        <Button

          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
          title='Register'
            onPress={() => this.onReadMore()}
        />
      </Card>
      </View>
      </ScrollView>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
