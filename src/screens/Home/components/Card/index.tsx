import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {SpacesResponse} from '../../../../@types/spaces';

import FastImage from 'react-native-fast-image';
import {Skeleton} from '../../../../components/Skeleton';
import {styles} from './styles';

export interface HomeCardProps {
  data: SpacesResponse;
  onPress: () => void;
}

export function HomeCard({data, onPress}: HomeCardProps) {
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation(['home']);

  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, 0.32)"
      key={data.id}>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoAvailability}>
            {data.availability === true ? t('available') : t('unavailable')}
          </Text>
          <Text style={styles.cardInfoName}>{data.name}</Text>
          <Text style={styles.cardInfoLocation}>{data.location}</Text>
        </View>

        <View style={styles.cardContainer}>
          {data?.image && (
            <>
              <FastImage
                style={[loading ? {} : styles.cardImage]}
                source={{uri: data.image, priority: FastImage.priority.normal}}
                resizeMode={FastImage.resizeMode.contain}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
              />
              {loading && <Skeleton height={70} width={130} borderRadius={8} />}
            </>
          )}
        </View>
      </View>
    </TouchableRipple>
  );
}
