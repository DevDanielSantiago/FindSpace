import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  body: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});

export const ratioStyles = StyleSheet.create({
  card: {
    padding: 15,
    borderColor: '#D6DBE3',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#121417',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
  },
  separator: {
    marginTop: 12,
  },
});
