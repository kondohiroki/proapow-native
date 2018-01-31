import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
//import { empty } from 'apollo-client/node_modules/apollo-link';
//import { error } from 'util';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

export default class NearbyScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      markers: [{
        title: 'KMUTNB rocket',
        coordinates: {
          latitude: 13.819112,
          longitude: 100.514352
        },
      },
      {
        title: 'โคกู โคขุนโพนยางคำ',
        coordinates: {
          latitude: 13.818287,
          longitude: 100.514566
        },
      },
      {
        title: 'ยามีละห์ข้าวหมกไก่ พระราม๗',
        coordinates: {
          latitude: 13.8179756,
          longitude: 100.5154755
        },
      },
      {
        title: 'Nai Ek นายเอก',
        coordinates: {
          latitude: 13.818428,
          longitude: 100.5157853
        },
      }]
    }
  }

  //watchID: ?number = null

  state = {
    regionSet: false,
  }

  componentDidMount() {

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        }
        /*onMapReady=() => {
          this.setState({ regionSet: true });
        }*/
        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000})

      this.watchID = navigator.geolocation.watchPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var lastRegion = {
          latitude: lat,
          longitude: long,
          longitudeDelta: LONGTITUDE_DELTA,
          latitudeDelta: LATTITUDE_DELTA
        }
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000, distanceFilter: 10})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  /*onRegionChange = (region) => {
    if (!this.state.regionSet) return;
    this.setState({
      region
    });
  }*/

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}
          //onRegionChange={this.onRegionChange}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
              image={require('../assets/images/smallpin.png')}
            />
          ))}
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={this.state.markerPosition}>
                <View style={styles.trackMarker}>
                </View>
            </MapView.Marker>
          ))}
        </MapView>
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
  radius: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: -25,
  },
  trackMarker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#37FF10',
  },
});
