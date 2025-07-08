import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTranslation} from 'react-i18next';
import {TabBarIconProps} from '../@types/tab-bar';
import {BookingsScreen} from '../screens/Bookings';
import {SearchScreen} from '../screens/Search';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {bottomNavigationStyles} from './styles';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused, color, size}: TabBarIconProps) => {
  const iconName = focused ? 'home' : 'home-outline';
  return <Icon name={iconName} size={size} color={color} />;
};

const SearchIcon = ({color, size}: TabBarIconProps) => (
  <Icon name={'magnify'} size={size} color={color} />
);

const BookingsIcon = ({focused, color, size}: TabBarIconProps) => {
  const iconName = focused ? 'bookmark' : 'bookmark-outline';
  return <Icon name={iconName} size={size} color={color} />;
};

const ProfileIcon = ({focused, color, size}: TabBarIconProps) => {
  const iconName = focused ? 'account' : 'account-outline';
  return <Icon name={iconName} size={size} color={color} />;
};

function CustomTabBar({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({route}) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
        if (!event.defaultPrevented) {
          navigation.navigate(route.name, {merge: true});
        }
      }}
      renderIcon={({route, focused, color}) => {
        const {options} = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({focused, color, size: 24});
        }
        return null;
      }}
      getLabelText={({route}) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        return typeof label === 'string' ? label : undefined;
      }}
      activeColor="#0D141C"
      inactiveColor="#4A739C"
      activeIndicatorStyle={bottomNavigationStyles.activeIndicatorStyle}
      style={bottomNavigationStyles.barStyle}
    />
  );
}

export default function AppNavigator() {
  const {t} = useTranslation(['navigation']);

  return (
    <Tab.Navigator tabBar={CustomTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{tabBarLabel: t('home'), tabBarIcon: HomeIcon}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarLabel: t('search'), tabBarIcon: SearchIcon}}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{tabBarLabel: t('bookings'), tabBarIcon: BookingsIcon}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{tabBarLabel: t('profile'), tabBarIcon: ProfileIcon}}
      />
    </Tab.Navigator>
  );
}
