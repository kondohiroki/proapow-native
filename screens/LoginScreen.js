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

export default class LoginScreen extends React.Component {

    state = {
        password: '',
        email: '',
    };

  render() {
    
    let { email } = this.state;
    return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Card
          titleStyle={{color: 'navy',}}
          title='Login'>

          <View style={{}}>
            <TextField
              label='Email'
              value={email}
              onChangeText={ (email) => this.setState({ email }) }
            />
          </View>

          <View style={{marginBottom: 7}}>
            <PasswordInputText
                value={this.state.password}
                onChangeText={ (password) => this.setState({ password }) }
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              //icon={{name: 'code'}}
              backgroundColor= '#03A9F4'
              buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 7, width: 120,}}
              title='Login'
            />

            <Button
              //icon={{name: 'code'}}
              backgroundColor= '#03A9F4'
              buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 120,}}
              title='Register'
            />
          </View>
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
