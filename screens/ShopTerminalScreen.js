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
export default class ShopTerminalScreen extends React.Component {


  render() {

    return (
      <ScrollView>
        <Tile
          imageSrc={{require: ('../images/kfc1.jpg')}}
          featured
          title= 'โคกู โคขุนโพนยางคำ'
          //caption='korn@gmail.com'
        />

        <List>
          <ListItem
            title='SHOP SETTING'
            onPress={() => this.props.navigation.navigate('ShopSetting')}
          />
          <ListItem
            title='EDIT PROMOTION'
            onPress={() => this.props.navigation.navigate('PromotionEdit')}
          />
          <ListItem
            title='ADD PROMOTION'
            onPress={() => this.props.navigation.navigate('PromotionAdd')}
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
