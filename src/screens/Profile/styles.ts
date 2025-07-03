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

export const profileStyles = StyleSheet.create({
  wrapper: {
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  photo: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#0D141C',
  },
  createdAt: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A739C',
  },
});

export const optionsStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: 'bold',
    color: '#0D141C',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    gap: 16,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E8EDF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0D141C',
  },
});
