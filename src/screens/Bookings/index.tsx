import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {BookingsPastScreen} from './Past';
import {BookingsUpcomingScreen} from './Upcoming';

import {headerStyles, mainStyles, tabsStyles} from './styles';

const renderScene = SceneMap({
  upcoming: BookingsUpcomingScreen,
  past: BookingsPastScreen,
});

const routes = [
  {key: 'upcoming', title: 'Upcoming'},
  {key: 'past', title: 'Past'},
];

export function BookingsScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.body}>
        <View style={headerStyles.header}>
          <Text style={headerStyles.title}>Bookings</Text>
        </View>

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          commonOptions={{labelStyle: tabsStyles.labelStyle}}
          renderTabBar={props => (
            <TabBar
              {...props}
              activeColor="#121417"
              inactiveColor="#5C738A"
              gap={32}
              style={tabsStyles.tabBarStyles}
              indicatorStyle={tabsStyles.indicatorStyle}
              tabStyle={tabsStyles.tabStyle}
              contentContainerStyle={tabsStyles.contentContainerStyle}
              indicatorContainerStyle={tabsStyles.indicatorContainerStyle}
            />
          )}
        />
      </View>
    </View>
  );
}
