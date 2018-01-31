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

    onReadMore = () =>{
      this.props.navigation.navigate('Register')
    }

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

          <Button
            //icon={{name: 'code'}}
            backgroundColor= '#03A9F4'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15, width: '100%',}}
            title='Login'
            onPress={() => this.props.navigation.navigate('Profile')}
          />

          <Button
            //icon={{name: 'code'}}
            backgroundColor= '#b3e6fe'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0 , marginTop: 15, width: '100%',}}
            title='Register'
              onPress={() => this.onReadMore()}
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
