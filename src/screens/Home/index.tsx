import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeNavigationProp} from '../../navigation/HomeStackNavigator';
import {getSpaces} from '../../services/spaces';

import {SpacesResponse} from '../../@types/spaces';
import {HomeCard} from './components/Card';
import {HomeCardSkeleton} from './components/CardSkeleton';
import {EmptyList} from './components/EmptyList';
import {chipsStyles, headerStyles, mainStyles} from './styles';

export function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation<HomeNavigationProp>();
  const {t} = useTranslation(['home']);

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['Spaces-List'],
    queryFn: getSpaces,
  });

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

  function handleNavigate(itemId: string) {
    navigation.navigate('Details', {itemId});
  }

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

        <SafeAreaView style={mainStyles.container}>
          <FlatList
            ListEmptyComponent={<EmptyList />}
            data={
              (isLoading ? Array(2).fill(null) : !data ? [] : data) as
                | SpacesResponse[]
                | null[]
            }
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({item}) =>
              item === null ? (
                <HomeCardSkeleton />
              ) : (
                <HomeCard data={item} onPress={() => handleNavigate(item.id)} />
              )
            }
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
