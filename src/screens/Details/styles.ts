import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 320,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D141C',
    paddingTop: 20,
    paddingBottom: 12,
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0D141C',
  },
  amenities: {
    gap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    borderColor: '#CFDBE8',
    borderWidth: 1,
    gap: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 173,
  },
  cartText: {
    color: '#0D141C',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  calendar: {
    marginVertical: 16,
  },
  button: {
    height: 48,
    paddingVertical: 6,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: '#0D80F2',
  },
});
