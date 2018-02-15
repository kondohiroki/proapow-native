import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Card, ListItem, Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const signinUser = gql`
mutation ($email: String!, $password: String!) {
  signinUser(
    email: {
     email: $email
     password:$password
    }
  ) {

     user{
      id
    }
   }
}`


class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        password: '',
        email: '',

    };
  }
  // async omponentWillMount(email) {
  //   await AsyncStorage.clear(() => AsyncStorage.setItem('@mail', email));
  // }

    createPost = async () => {
       const {email, password} = this.state
       if(email && password){
         try {
           await this.props.signinUser({
             variables: {email, password}
           })
           await AsyncStorage.clear();
           await AsyncStorage.setItem('@mail', email);
           console.log('--------------setItem-------------');
           //const value = await AsyncStorage.getItem('@mail');
           console.log('--------------getItem-------------');
           console.log(await AsyncStorage.getItem('@mail'));
           console.log('--------------navigate-------------');

           //await AsyncStorage.clear();
           // console.log('--------------clear()-------------');
           // const value2 = await AsyncStorage.getItem('@mail');
           // console.log('--------------getItem-------------');
           // console.log(value2);
          this.props.navigation.navigate('Profile',{mail:email})
         } catch (e) {
           Alert.alert(
             'ALERT',
             'Email or Password Wrong',
             [

               {text: 'OK', onPress: () => console.log('OK Pressed')},
             ],
              { cancelable: false }
            )
         }

       }else {
         Alert.alert(
           'ALERT',
           'CANNOT BE NULL',
           [

             {text: 'OK', onPress: () => console.log('OK Pressed')},
           ],
            { cancelable: false }
          )
       }


       //this.onComplete()


     }

    onReadMore = () =>{
      this.props.navigation.navigate('Register')
    }



  render() {
    //const {data} = this.props;


    let { email } = this.state;
    return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Card
          titleStyle={{color: 'navy',}}
          title={'Login'}>

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
            onPress={() => this.createPost()}
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

export default graphql(signinUser, {name: 'signinUser'})(LoginScreen)
