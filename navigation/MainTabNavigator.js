import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NearbyScreen from '../screens/NearbyScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Nearby: {
      screen: NearbyScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
              ? `md-home${focused ? '' : '-outline'}` : 'md-home';
            break;
          case 'Search':
            iconName = Platform.OS === 'ios'
            ? `md-search${focused ? '' : '-outline'}` : 'md-search';
            break;
          case 'Nearby':
            iconName =
              Platform.OS === 'ios'
              ? `md-pin${focused ? '' : '-outline'}` : 'md-pin';
            break
          case 'Profile':
            iconName =
              Platform.OS === 'ios'
              ? `md-person${focused ? '' : '-outline'}` : 'md-person';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
