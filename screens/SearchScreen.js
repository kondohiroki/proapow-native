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

import { SearchBar } from 'react-native-elements'

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SearchBar
            round
            lightTheme
            // onChangeText={}
            // onClearText={}
            placeholder='กำลังมองหาอะไรอยู่เหรอ?' />
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
