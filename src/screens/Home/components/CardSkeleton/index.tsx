import React from 'react';
import {View} from 'react-native';

import {Skeleton} from '../../../../components/Skeleton';
import {styles} from './styles';

export function HomeCardSkeleton() {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Skeleton height={10} width={80} borderRadius={4} />
        <Skeleton height={15} width={150} borderRadius={4} />
        <Skeleton height={10} width={140} borderRadius={4} />
      </View>

      <View style={styles.cardContainer}>
        <Skeleton height={70} width={130} borderRadius={8} />
      </View>
    </View>
  );
}
