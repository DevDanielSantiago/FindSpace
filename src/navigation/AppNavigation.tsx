import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

import {BookingsScreen} from '../screens/Bookings';
import {ProfileScreen} from '../screens/Profile';
import {SearchScreen} from '../screens/Search';
import HomeStackNavigator from './HomeStackNavigator';
import {bottomNavigationStyles} from './styles';

const renderScene = BottomNavigation.SceneMap({
  home: HomeStackNavigator,
  search: SearchScreen,
  bookings: BookingsScreen,
  profile: ProfileScreen,
});

export default function AppNavigator() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {key: 'search', title: 'Search', focusedIcon: 'magnify'},
    {
      key: 'bookings',
      title: 'Bookings',
      focusedIcon: 'bookmark',
      unfocusedIcon: 'bookmark-outline',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={bottomNavigationStyles.barStyle}
      activeColor="#0D141C"
      inactiveColor="#4A739C"
      activeIndicatorStyle={bottomNavigationStyles.activeIndicatorStyle}
    />
  );
}
