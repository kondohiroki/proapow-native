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
import { Tile, List, ListItem, Button } from 'react-native-elements';
import CreditCardList from '../components/CreditCardList';

//const val = AsyncStorage.getItem('@id');

export default class EditCardScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      useridfromparam: props.navigation.state.params.userid
    }
  }
  render() {
    const {useridfromparam} = this.state
    /*console.log('------useridfromparam------')
    console.log(useridfromparam);
    console.log('------useridfromparam------')*/
    return (
      <ScrollView style={styles.container}>

      <View>
        {/* <Image
          style={styles.img}
          source={require('../images/01.png')}
        />
        <Image
          style={styles.img}
          source={require('../images/02.png')}
        />
        <Image
          style={styles.img}
          source={require('../images/03.png')}
        />
        <Image
          style={styles.img}
          source={require('../images/04.png')}
        /> */}
        <CreditCardList/>
      </View>

      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 20, marginTop: 10 }}
        title='ADD CARD'
        onPress={() => this.props.navigation.navigate('AddCard',{userid:useridfromparam})}

      />

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
