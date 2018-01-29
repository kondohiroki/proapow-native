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
import { empty } from 'apollo-client/node_modules/apollo-link';
//import { error } from 'util';

export default class NearbyScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      initialPosition: {
        latitude: 13.819112,
        longitude: 100.514352,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      markerPosition: {
        latitude: 13.819112,
        longitude: 100.514352
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
        const { latitude, longitude } = position.coords
        const initialRegion = {
          //...this.state.region,
          latitude,
          longitude
        }
        /*onMapReady=() => {
          this.setState({ regionSet: true });
        }*/
        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

      this.watchID = navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords
        const lastRegion = {
          latitude,
          longitude
        }
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
      },error,{})
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
          initialRegion={this.state.initialPosition}
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
            <View style={styles.radius}>
              <View style={styles.trackMarker}>
              </View>
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
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackMarker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
    
  }
});
