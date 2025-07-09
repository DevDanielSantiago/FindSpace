import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  body: {
    flex: 1,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D141C',
  },
});

export const tabsStyles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: '#F4F4F4',
  },
  tabStyle: {
    width: 'auto',
    padding: 0,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  indicatorStyle: {
    backgroundColor: '#E5E8EB',
    height: 3,
  },
  contentContainerStyle: {
    marginHorizontal: 16,
  },
  indicatorContainerStyle: {
    marginHorizontal: 16,
  },
});
