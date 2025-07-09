import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Spaces} from '../../mocks/spaces.mock';

import {TouchableRipple} from 'react-native-paper';
import {HomeNavigationProp} from '../../navigation/HomeStackNavigator';
import {chipsStyles, contentStyles, headerStyles, mainStyles} from './styles';

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const {t} = useTranslation(['home']);

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.body}>
        <View style={headerStyles.header}>
          <View style={headerStyles.headerWrapper}>
            <Text style={headerStyles.title}>{t('title')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log('click')}
            style={headerStyles.filters}>
            <MaterialCommunityIcons
              name="tune-variant"
              size={24}
              color="#0D141C"
            />
          </TouchableOpacity>
        </View>

        <View style={chipsStyles.container}>
          <Text style={chipsStyles.chip}>{t('rooms')}</Text>
          <Text style={chipsStyles.chip}>{t('tables')}</Text>
        </View>

        <SafeAreaView style={contentStyles.container}>
          <FlatList
            data={Spaces}
            renderItem={({item: data, index}) => (
              <TouchableRipple
                onPress={() =>
                  navigation.navigate('Details', {itemId: data.id})
                }
                rippleColor="rgba(0, 0, 0, 0.32)">
                <View style={contentStyles.card}>
                  <View key={index} style={contentStyles.cardWrapper}>
                    <Text style={contentStyles.cardAvailability}>
                      {data.availability}
                    </Text>
                    <Text style={contentStyles.cardName}>{data.name}</Text>
                    <Text style={contentStyles.cardLocation}>
                      {data.location}
                    </Text>
                  </View>
                  <View style={contentStyles.cartImg}>
                    {data?.image && <Image source={data.image} />}
                  </View>
                </View>
              </TouchableRipple>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
