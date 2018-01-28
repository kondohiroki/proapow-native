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
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const createPostMutation = gql`
mutation ($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
createUser(
  authProvider: {
   email: {
     email:$email
     password:$password
   }
 }
  firstname:$firstname
  lastname:$lastname
) {
   id
 }
}`



class RegisterScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }


  createPost = async () => {
     const {firstname, lastname, email, password} = this.state
     await this.props.createPostMutation({
       variables: {firstname, lastname, email, password}
     })
     //this.onComplete()
     this.props.navigation.navigate('Login')
   }

   onComplete = () => {
     const resetAction = NavigationActions.reset({
       index: 0,
       actions: [
         NavigationActions.navigate({ routeName: 'Register'})
      ]
    })
      this.props.navigation.dispatch(resetAction)
   }


  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
      <Card
        titleStyle={{color: 'navy',}}
        title='Register'>
        <TextField
          placeholder="FirstName"
          onChangeText={(text) => this.setState({firstname: text})}
          value={this.state.firstname}
        />
        <TextField
          placeholder="LastName"
          onChangeText={(text) => this.setState({lastname: text})}
          value={this.state.lastname}
        />
        <TextField
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <PasswordInputText
            onChangeText={ (password) => this.setState({ password }) }
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
        />
        <PasswordInputText
            placeholder="Confirm Password"
            onChangeText={ (password_confirmation) => this.setState({ password_confirmation }) }
        />
        <Button
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
          title='Register'
          onPress={() => this.createPost()}
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

export default graphql(createPostMutation, {name: 'createPostMutation'})(RegisterScreen)
