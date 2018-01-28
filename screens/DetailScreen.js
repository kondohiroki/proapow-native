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


export default class DetailScreen extends React.Component {

  render() {
    //const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

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
