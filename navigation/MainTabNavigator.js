import React from 'react';
import { SafeAreaView, StackNavigator, TabNavigator,  TabBarBottom, NavigationActions} from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NearbyScreen from '../screens/NearbyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import EditCardScreen from '../screens/EditCardScreen';
import AddCardScreen from '../screens/AddCardScreen';

const HomeTab = StackNavigator({
  Home:{
    screen:HomeScreen,
    path:'/',
    navigationOptions: () => ({
      header:null,
      // title: `PROMOTION TODAY!`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),

  },
  Detail:{
    screen:DetailScreen,
    path:'/',
    navigationOptions: ({ navigation }) => ({
      title: `Detail`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
});

const SearchTab = StackNavigator({
  Search:{
    screen:SearchScreen,
    path:'/',
    navigationOptions: () => ({
      title: `SEARCH PROMOTION!`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
});

const NearbyTab = StackNavigator({
  Nearby:{
    screen:NearbyScreen,
    path:'/',
    navigationOptions: () => ({
      title: `NEARBY PROMOTION!`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
});

const ProfileTab = StackNavigator({

  Login:{
    screen:LoginScreen,
    path:'/',
    navigationOptions: () => ({
      title: `Login`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
  Profile:{
    screen:ProfileScreen,
    path:'/',
    navigationOptions: ({ navigation }) => ({
      title: `PROFILE`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
  ProfileSetting:{
    screen:ProfileSettingScreen,
    path:'/',
    navigationOptions: () => ({
      title: `PROFILE SETTING`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
  EditCard:{
    screen:EditCardScreen,
    path:'/',
    navigationOptions: () => ({
      title: `MY CARD`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
  AddCard:{
    screen:AddCardScreen,
    path:'/',
    navigationOptions: () => ({
      title: `ADD CARD`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
  Register:{
    screen:RegisterScreen,
    path:'/',
    navigationOptions: () => ({
      title: `Register`,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
});

const StacksInTabs = TabNavigator(
  {
    //MainTab Button
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        ),
      },
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}` : 'md-search'}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        ),
      },
    },
    NearbyTab: {
      screen: NearbyTab,
      navigationOptions: {
        tabBarLabel: 'Nearby',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              Platform.OS === 'ios'
              ? `ios-pin${focused ? '' : '-outline'}` : 'md-pin'}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        ),
      },
    },
    ProfileTab: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        ),
      },
    },

  },

  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',

  }
);


export default StacksInTabs;
