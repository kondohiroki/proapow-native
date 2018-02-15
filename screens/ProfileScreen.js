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
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


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
      value :'',
    };

  }

  componentDidMount() {
    console.log('componentDidMount');
    //this.getStore();
    //this.props.data.startPolling(10000);
  }


  getStore = async () =>{
    try {
      const res = await AsyncStorage.getItem('@mail');
      //this.setState({res});
      console.log('get success');
      console.log(res);
    } catch (e) {
      console.log('get fail');
    }
  }

  setStore = async (data) =>{
    try {
      await AsyncStorage.setItem('@userId',data.User.id);
      const res2 = await AsyncStorage.getItem('@userId');
      this.setState({res2});
      console.log('set success');
      console.log(res2);
    } catch (e) {
      console.log('set fail');
    }
  }

  logOut = async () =>{
    try {

      this.props.navigation.navigate('Login')
      console.log('logout success');
    } catch (e) {
      console.log('logout Faillllll');
    }
    //AsyncStorage.clear();
  }


  render() {
    const {data} = this.props;
    this.setStore(data);
    if (data.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else if (data.error) {
      return(
        <Button
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15, width: '100%',}}
          title='Reload'
          onPress={() => data.refetch()}
        />
      )
    }else {
      //console.log(value);
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
          <Button
            //icon={{name: 'code'}}
            backgroundColor= '#03A9F4'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15, width: '100%',}}
            title='LOGOUT'
            onPress={() => this.logOut()}
          />
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
  options:(props)=> {
    //pollInterval: 10000
    name: 'userQeury'
    console.log('option called');
    console.log(props.navigation.state.params.mail);

    return {variables:{emailtemp:props.navigation.state.params.mail}}
  }
})(ProfileScreen)
