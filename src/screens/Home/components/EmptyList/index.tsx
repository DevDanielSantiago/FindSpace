import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './styles';

export function EmptyList() {
  const {t} = useTranslation(['home']);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={require('../../../../assets/images/EmptyList.png')} />
        <View style={styles.info}>
          <Text style={styles.title}>{t('feedbacks.noResult.title')}</Text>
          <Text style={styles.description}>
            {t('feedbacks.noResult.description')}
          </Text>
        </View>
        <Button
          textColor="#121417"
          contentStyle={styles.button}
          mode="contained"
          onPress={() => console.log('Contact Support')}>
          {t('feedbacks.noResult.contact')}
        </Button>
      </View>
    </View>
  );
}
