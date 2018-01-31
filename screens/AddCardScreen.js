import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { TextField } from 'react-native-material-textfield';
import { Tile, List, ListItem, Button, Card } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
export default class AddCardScreen extends React.Component {


  render() {
    let bankdata = [{
      value: 'KASIKORN BANK',
    }, {
      value: 'BANGKOK BANK',
    }, {
      value: 'TMB BANK',
    }, {
      value: 'KRUNGSRI BANK',
    }];

    return (
      <ScrollView>
      <View style={styles.container}>
      <Card
        titleStyle={{color: 'navy',}}
        title='NEW CARD'>

        <Dropdown
        label='BANK NAME'
        data={bankdata}
        />

        <TextField
          label='CARD NUMBER'
          //placeholder='Jiradej'
          //onChangeText={(text) => this.setState({lastname: text})}
        />
        <TextField
          label='CARD NAME'
          //placeholder="korn@gmail.com"
          //onChangeText={(text) => this.setState({email: text})}
          //value={this.state.email}
        />
        <TextField
          label='EXP'
          placeholder='MM/YY'
          //onChangeText={(text) => this.setState({email: text})}
          //value={this.state.email}
        />


        <Button
          backgroundColor= '#03A9F4'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginTop: 10, width: '100%',}}
          title='SAVE'
          onPress={() => this.createPost()}
        />
      </Card>
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
  img: {
    width: 300,
    height:250,
    resizeMode: 'contain',
    marginLeft:22,
  }
});
