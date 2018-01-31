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
import { Tile, List, ListItem } from 'react-native-elements';
export default class ProfileScreen extends React.Component {


  render() {

    return (
      <ScrollView>
        <Tile
          imageSrc={{require: ('../images/korn')}}
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
            title='EDIT CARD'
            onPress={() => this.props.navigation.navigate('EditCard')}
          />
          <ListItem
            title='MY SHOP'
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
