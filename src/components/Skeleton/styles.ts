import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  skeleton: {
    overflow: 'hidden', // Garante que o gradiente não vaze para fora
    position: 'relative',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
});
