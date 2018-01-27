import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ProCardList from '../components/ProCardList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header:null,
    title: 'Home',

  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ProCardList />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
