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

const value = AsyncStorage.getItem('@mail');
const userQeury = gql`
query ($emailtemp: String!) {
  User( email:$emailtemp) {
    id
    firstname
    lastname
    email
  }
}`

class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id :'',
    };
  }


  render() {
    const {data} = this.props;


    if (data.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    else {
      console.log(value);
      return (

        <ScrollView>


          <Tile
            imageSrc={{require: ('../images/kfc1.jpg')}}
            featured
            title= {data.User.firstname}
            caption={data.User.email}
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


export default graphql(userQeury, {
  options:()=> {
    name: 'userQeury'
    console.log('option called');
    return {variables:{emailtemp:value._55}}
  }
})(ProfileScreen)
