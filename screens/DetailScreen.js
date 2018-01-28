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
import { Card, Tile, List, ListItem } from 'react-native-elements';


export default class DetailScreen extends React.Component {

  render() {
    const { proTitle, proDesc, fileImg } = this.props.navigation.state.params;

    return (
      // <View style={styles.container}>
      // <Tile style={styles.container}
      //   imageSrc={{ uri: fileImg}}
      // />
      // </View>

      //<Tile imageSrc={{ uri: fileImg}}></Tile>
      <ScrollView>
      <Card><View style={styles.container}>
      <Text style={styles.Title}>{proTitle}</Text>
      <Text style={styles.Desc}>{proDesc}</Text>
      </View></Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  Title:{

    fontWeight: 'bold',
    fontSize: 20,
    color:'#03A9F4',
  },

  Desc:{
    textAlign:'left',
    fontSize: 16,
    margin: 10,

  },

});
