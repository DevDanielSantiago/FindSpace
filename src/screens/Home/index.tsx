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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {itemId: data.id})
                }>
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
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
