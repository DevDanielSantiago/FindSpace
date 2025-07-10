import React, {useMemo, useState} from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {BookingsPastTab} from './components/Past';
import {BookingsUpcomingTab} from './components/Upcoming';

import {useTranslation} from 'react-i18next';
import {headerStyles, mainStyles, tabsStyles} from './styles';

const renderScene = SceneMap({
  upcoming: BookingsUpcomingTab,
  past: BookingsPastTab,
});

export function BookingsScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const {t, i18n} = useTranslation(['bookings']);

  const routes = useMemo(() => {
    return [
      {key: 'upcoming', title: t('upcoming')},
      {key: 'past', title: t('past')},
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

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
