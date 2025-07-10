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
    paddingLeft: 49,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D141C',
  },
  filters: {
    width: 24,
    height: 24,
  },
});

export const chipsStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    padding: 12,
    gap: 12,
    flexDirection: 'row',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 5.5,
    borderRadius: 8,
    backgroundColor: '#E8EDF5',
    color: '#0D141C',
    fontWeight: '500',
    fontSize: 14,
  },
});
