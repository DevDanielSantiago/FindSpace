/* eslint-disable curly */
import {useQuery} from '@tanstack/react-query';
import React, {useMemo, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';

import {getBookings} from '../../../../services/bookings';
import {BookingCard, BookingCardDataProp} from '../Card';
import {BookingCardSkeleton} from '../CardSkeleton';

import {useTranslation} from 'react-i18next';
import {formatDateInterval} from '../../../../utils/formatInterval';
import {mainStyles} from './styles';

export function BookingsPastTab() {
  const {i18n} = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['Bookings-List'],
    queryFn: getBookings,
  });

  const PastBookings = useMemo(() => {
    if (!data) return [];

    return data
      .filter(booking => booking.isUsed === true)
      .map(booking => ({
        id: booking.id,
        description: formatDateInterval(
          booking.bookingStart,
          booking.bookingEnd,
          i18n.language.toLowerCase().includes('pt') ? 'pt-BR' : 'en-US',
        ),
        image: booking.image,
        name: booking.name,
      }));
  }, [data, i18n.language]);

  async function onRefresh() {
    try {
      setRefreshing(true);
      await refetch();
    } catch (error) {
      // Empty
    } finally {
      setRefreshing(false);
    }
  }

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.body}>
        <FlatList
          data={
            (isLoading
              ? Array(2).fill(null)
              : !PastBookings
              ? []
              : PastBookings) as BookingCardDataProp[] | null[]
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) =>
            item === null ? (
              <BookingCardSkeleton />
            ) : (
              <BookingCard data={item} onPress={() => console.log(item.id)} />
            )
          }
        />
      </View>
    </View>
  );
}
