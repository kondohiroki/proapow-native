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

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class NearbyScreen extends React.Component {
  constructor(props){
    super(props)
    //this.onRegionChange = this.onRegionChange.bind(this)
    this.state = {
      region: {
        latitude: 13.819112,
        longitude: 100.514352,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    }
  
  }
  /*onRegionChange = (region) => {
    console.warn('onRegionChange')
    this.setState({ region });
  }*/
  render() {
    //const { region } = this.props;
    //console.log(region);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          //onRegionChange={region=>{this.setState({region});}}
          /*region={this.state.region}
          onRegionChange={this.onRegionChange}
          region={{
            latitude: 13.819112,
            longitude: 100.514352,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}*/
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
