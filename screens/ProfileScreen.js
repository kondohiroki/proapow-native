import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Tile, List, ListItem } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const userQeury = gql`
query {
  User( email:"admin@gmail.com") {
    id
    firstname
    lastname
    email
  }
}`

const value = AsyncStorage.getItem('@id');

class ProfileScreen extends React.Component {
  constructor(props){
    super(props);

  }


  // queryProfile = async () =>{
  //   const temp = {value._55}
  //   try {
  //     await this.props.userQeury({
  //       variables: {temp}
  //     })
  //     console.log('yes');
  //
  //   } catch (e) {
  //     console.log('error');
  //   }
  // }



  render() {


    if (this.props.userQeury.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    else {
      //console.log(value._55);
      return (

        <ScrollView>

          <Tile
            imageSrc={{require: ('../images/kfc1.jpg')}}
            featured
            title= {this.props.userQeury.User.firstname}
            caption={this.props.userQeury.User.email}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default graphql(userQeury, {name: 'userQeury'})(ProfileScreen)
