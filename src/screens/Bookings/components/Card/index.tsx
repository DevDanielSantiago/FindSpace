import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableRipple} from 'react-native-paper';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {Skeleton} from '../../../../components/Skeleton';

import {BookingResponse} from '../../../../@types/bookings';

import {optionsStyles} from './styles';

export type BookingCardDataProp = Omit<
  BookingResponse,
  'location' | 'booking' | 'isUsed'
> & {
  description: string;
};

export interface BookingCardProps {
  data: BookingCardDataProp;
  onPress: () => void;
}

export function BookingCard({data, onPress}: BookingCardProps) {
  const [loading, setLoading] = useState(false);

  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, 0.32)"
      key={data.id}>
      <View style={optionsStyles.card}>
        <View style={optionsStyles.cardDetails}>
          <View style={optionsStyles.cardContainer}>
            {data?.image && (
              <>
                <FastImage
                  style={[loading ? {} : optionsStyles.cardImage]}
                  source={{
                    uri: data.image,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
                {loading && (
                  <Skeleton height={56} width={56} borderRadius={8} />
                )}
              </>
            )}
          </View>
          <View>
            <Text style={optionsStyles.cardTitle}>{data.name}</Text>
            <Text style={optionsStyles.cardDescription}>
              {data.description}
            </Text>
          </View>
        </View>
        <FontAwesomeIcons name="angle-right" size={24} color="#0D141C" />
      </View>
    </TouchableRipple>
  );
}
