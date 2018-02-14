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
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Tile, List, ListItem } from 'react-native-elements';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// const userQeury = gql`
//   query ($email: String!){
//     User(email:$email) {
//       id
//       firstname
//       lastname
//       email
//     }
//   }
//   `

const value = AsyncStorage.getItem('@email');
export default class ProfileScreen extends React.Component {

  constructor(props){
    super(props);

  }




  render() {
    console.log(value);

    return (

      <ScrollView>
        <Tile
          imageSrc={{require: ('../images/kfc1.jpg')}}
          featured
          title= 'Korn Jiradej'
          caption='korn@gmail.com'
        />

        <List>
          <ListItem
            title='PROFILE SETTING'
            onPress={() => this.props.navigation.navigate('ProfileSetting')}
          />
          <ListItem
            title='My CARD'
            onPress={() => this.props.navigation.navigate('EditCard')}
          />
          <ListItem
            title='MY SHOP'
            onPress={() => this.props.navigation.navigate('ShopTerminal')}
          />

        </List>

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

//export default graphql(userQeury, {name: 'userQeury'})(ProfileScreen)
