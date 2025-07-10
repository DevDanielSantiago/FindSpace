import {StyleSheet} from 'react-native';

export const optionsStyles = StyleSheet.create({
  body: {
    paddingTop: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    borderRadius: 8,
  },
  cardImage: {
    width: 56,
    height: 56,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#121417',
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#5C738A',
  },
});
