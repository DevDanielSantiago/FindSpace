import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import {ProfileNavigationProp} from '../../navigation/ProfileStackNavigator';
import {headerStyles, mainStyles, optionsStyles, profileStyles} from './styles';

export function ProfileScreen() {
  const navigation = useNavigation<ProfileNavigationProp>();
  const {t} = useTranslation(['profile']);

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.body}>
        <View style={headerStyles.header}>
          <View style={headerStyles.headerWrapper}>
            <Text style={headerStyles.title}>{t('account')}</Text>
          </View>
        </View>

        <ScrollView>
          <View style={profileStyles.wrapper}>
            <Image
              style={profileStyles.photo}
              source={require('../../assets/images/photo.png')}
            />
            <View style={profileStyles.info}>
              <Text style={profileStyles.name}>Sophia Carter</Text>
              <Text style={profileStyles.createdAt}>{t('joinedIn')} 2021</Text>
            </View>
          </View>

          <Text style={optionsStyles.title}>{t('account')}</Text>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('personalInformation')}</Text>
          </View>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('paymentMethods')}</Text>
          </View>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('notifications')}</Text>
          </View>
          <TouchableRipple
            onPress={() => navigation.navigate('Language')}
            rippleColor="rgba(0, 0, 0, 0.32)">
            <View style={optionsStyles.wrapper}>
              <View style={optionsStyles.cardIcon}>
                <MaterialCommunityIcons
                  name="earth"
                  size={24}
                  color="#0D141C"
                />
              </View>
              <Text style={optionsStyles.name}>{t('language')}</Text>
            </View>
          </TouchableRipple>

          <Text style={optionsStyles.title}>{t('support')}</Text>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="help-circle-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('helpCenter')}</Text>
          </View>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('termsOfService')}</Text>
          </View>
          <View style={optionsStyles.wrapper}>
            <View style={optionsStyles.cardIcon}>
              <MaterialCommunityIcons
                name="shield-outline"
                size={24}
                color="#0D141C"
              />
            </View>
            <Text style={optionsStyles.name}>{t('privacyPolicy')}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
