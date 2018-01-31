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
import { Card, Tile, List, ListItem, Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
export default class ProfileSettingScreen extends React.Component {


  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
      <Card
        titleStyle={{color: 'navy',}}
        title='INFO'>
        <TextField
          label='FirstName'
          placeholder='Korn'
          //onChangeText={(text) => this.setState({firstname: text})}
        />
        <TextField
          label='LasttName'
          placeholder='Jiradej'
          //onChangeText={(text) => this.setState({lastname: text})}
        />
        <TextField
          label='Email'
          placeholder="korn@gmail.com"
          //onChangeText={(text) => this.setState({email: text})}
          //value={this.state.email}
        />
        <PasswordInputText
            //onChangeText={ (password) => this.setState({ password }) }
            //onChangeText={(text) => this.setState({password: text})}
            //value={this.state.password}
            placeholder="Old password"
        />
        <PasswordInputText
            placeholder="New Password"
            //onChangeText={ (password_confirmation) => this.setState({ password_confirmation }) }
        />
        <PasswordInputText
            placeholder="New Password Confirm"
            //onChangeText={ (password_confirmation) => this.setState({ password_confirmation }) }
        />
        <Button
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
          title='SAVE'
          onPress={() => this.createPost()}
        />
      </Card>
      </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
