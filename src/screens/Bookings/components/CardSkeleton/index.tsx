import React from 'react';
import {View} from 'react-native';

import {Skeleton} from '../../../../components/Skeleton';

import {optionsStyles} from './styles';

export function BookingCardSkeleton() {
  return (
    <View style={optionsStyles.card}>
      <View style={optionsStyles.cardDetails}>
        <View style={optionsStyles.cardContainer}>
          <Skeleton height={56} width={56} borderRadius={8} />
        </View>
        <View>
          <Skeleton height={15} width={150} borderRadius={4} />
          <Skeleton height={10} width={80} borderRadius={4} />
        </View>
      </View>
    </View>
  );
}
