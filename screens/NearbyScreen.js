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
import geolib from 'geolib';

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
const LATTITUDE_DELTA = 0.0322
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

const pin = '../assets/images/redpin2.png'
const robot = '../assets/images/greenpin2.png'

export default class NearbyScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      markers: [{
        id:1,
        inRange: false,
        title: 'KMUTNB rocket',
        coordinates: {
          latitude: 13.819112,
          longitude: 100.514352
        },
      },
      {
        id:2,
        inRange: false,
        title: 'โคกู โคขุนโพนยางคำ',
        coordinates: {
          latitude: 13.818287,
          longitude: 100.514566
        },
      },
      {
        id:3,
        inRange: false,
        title: 'ยามีละห์ข้าวหมกไก่ พระราม๗',
        coordinates: {
          latitude: 13.8179756,
          longitude: 100.5154755
        },
      },
      {
        id:4,
        inRange: false,
        title: 'Nai Ek นายเอก',
        coordinates: {
          latitude: 13.818428,
          longitude: 100.5157853
        },
      },
      {
        id:5,
        inRange: false,
        title: 'ร้านฟ้า',
        coordinates: {
          latitude: 13.8203325,
          longitude: 100.5210625
        },
      },
      {
        id:6,
        inRange: false,
        title: 'KFC วงศ์สว่าง',
        coordinates: {
          latitude: 13.8271446,
          longitude: 100.5277249
        },
      },
      {
        id:7,
        inRange: false,
        title: 'เตี๋ยวเหอะ',
        coordinates: {
          latitude: 13.8247659,
          longitude: 100.5153173
        },
      },{
        id:8,
        inRange: false,
        title: 'เป่าปาก',
        coordinates: {
          latitude: 14.0671245,
          longitude: 100.6185998
        },
      },{
        id:9,
        inRange: false,
        title: 'ข้าวต้มปลาผ่องศรี',
        coordinates: {
          latitude: 14.0672764,
          longitude: 100.6172807
        },
      },{
        id:10,
        inRange: false,
        title: 'Delight Cafe+Bakery',
        coordinates: {
          latitude: 14.0659471,
          longitude: 100.6131735
        },
      },{
        id:11,
        inRange: false,
        title: 'Kitten Kitchen',
        coordinates: {
          latitude: 14.0659378,
          longitude: 100.611355
        },
      },{
        id:12,
        inRange: false,
        title: "Cowboy's Hous",
        coordinates: {
          latitude: 14.0648898,
          longitude: 100.6089458
        },
      },{
        id:13,
        inRange: false,
        title: "Rest'er Day",
        coordinates: {
          latitude: 14.0643076,
          longitude: 100.6073339
        },
      },{
        id:14,
        inRange: false,
        title: "Rest'er Day",
        coordinates: {
          latitude: 14.0736993,
          longitude: 100.6152537
        },
      },{
        id:15,
        inRange: false,
        title: "HOM KRUN COFFEE",
        coordinates: {
          latitude: 14.0724796,
          longitude: 100.6076114
        },
      },{
        id:16,
        inRange: false,
        title: "เอ็ม กาแฟนมสด (M coffee&milk) สำนักงานแฟรนไชส์กาแฟ",
        coordinates: {
          latitude: 14.0596901,
          longitude: 100.6146555
        },
      },{
        id:17,
        inRange: false,
        title: "Eat@Me",
        coordinates: {
          latitude: 14.0651604,
          longitude: 100.6139628
        },
      },
      {
        id:18,
        inRange: false,
        title: "Pak Tai Bistro",
        coordinates: {
          latitude: 14.0658927,
          longitude: 100.6219593
        },
      },{
        id:19,
        inRange: false,
        title: "Mueang Korn 2 Restaurant",
        coordinates: {
          latitude: 14.0658624,
          longitude: 100.6223658
        },
      },{
        id:20,
        inRange: false,
        title: "Starbucks Coffee Thammasat Rangsit",
        coordinates: {
          latitude: 14.0716459,
          longitude: 100.6003905
        },
      },
      {
        id:21,
        inRange: false,
        title: "Green Canteen",
        coordinates: {
          latitude: 14.0719994,
          longitude: 100.6016349
        },
      },{
        id:22,
        inRange: false,
        title: "บ้านราชาวดี",
        coordinates: {
          latitude: 14.0742381,
          longitude: 100.5999745
        },
      },{
        id:23,
        inRange: false,
        title: "Five Star",
        coordinates: {
          latitude: 14.0740609,
          longitude: 100.6012769
        },
      },{
        id:24,
        inRange: false,
        title: "gelato 44°C",
        coordinates: {
          latitude: 14.0659818,
          longitude: 100.6060343
        },
      },]
    }
  }

  state = {
    regionSet: false,
  }

  componentDidMount() {
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    /*navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        }
        onMapReady=() => {
          this.setState({ regionSet: true });
        }
        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
        },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000})*/

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

        this.state.markers.map(marker => {
          isinrange = geolib.isPointInCircle(
          {latitude: marker.coordinates.latitude,longitude: marker.coordinates.longitude},
          {latitude: lastRegion.latitude, longitude: lastRegion.longitude},
          1000
        )
        marker.inRange=isinrange
        this.setState({inRange: isinrange})
      })
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}
          zoomEnabled={false}
        >
          {this.state.markers.map(function(marker){
            if(marker.inRange){
              return <MapView.Marker
                key={marker.id}
                coordinate={marker.coordinates}
                title={marker.title}
                image={require(robot)}
              />
            }else{
              return <MapView.Marker
                key={marker.id}
                coordinate={marker.coordinates}
                title={marker.title}
                image={require(pin)}
              />
            }
          })}
          <MapView.Marker
            coordinate={this.state.markerPosition}>
              {/* <View style={styles.radius}> */}
                <View style={styles.trackMarker}/>
              {/* </View> */}
          </MapView.Marker>
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
    height: 200,
    width: 200,
    borderRadius: 200/2,
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
    backgroundColor: '#37FF10',
  },
});
