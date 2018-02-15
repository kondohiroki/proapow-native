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
import { SearchBar } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ProCardListSeacrh from '../components/ProCardListSeacrh';

export default class SearchScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value :'',
    };

  }

  componentDidMount() {
    console.log('componentDidMountinSearch');
    this.getStore();
  }


  getStore = async () =>{
    try {
      const res = await AsyncStorage.getItem('@userId');
      this.setState({value:res});
      //console.log('get success');
      //console.log(res);
    } catch (e) {
      console.log('get fail');
    }
  }
  clearStore = async () =>{
    try {
      await AsyncStorage.clear();
      this.setState({value:''});
      console.log('clear success');
    } catch (e) {
      console.log('clear fail');
    }
  }

  render() {

    //console.log(this.state.value);
    if (this.state.value) {
      this.getStore();
      return (
        <ProCardListSeacrh navigation={this.props.navigation} />
      )
    }else {
      this.getStore();
      return (
        <View style={styles.container}>
          <Text>PLEASE LOGIN</Text>
        </View>
      )

    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: -20 ,
    marginTop: 15,
  },
});
