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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerTitleStyle: {alignSelf: 'center' },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
