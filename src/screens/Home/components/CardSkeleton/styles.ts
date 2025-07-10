import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 16,
    flexDirection: 'row',
  },
  cardInfo: {
    gap: 4,
    flex: 1,
    justifyContent: 'center',
  },
  cardInfoAvailability: {
    fontSize: 14,
    color: '#4A739C',
  },
  cardInfoName: {
    fontSize: 16,
    color: '#0D141C',
    fontWeight: 'bold',
  },
  cardInfoLocation: {
    fontSize: 14,
    color: '#4A739C',
  },
  cardContainer: {
    borderRadius: 8,
  },
  cardImage: {
    width: 130,
    height: 70,
  },
});
