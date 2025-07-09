import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import {Spaces} from '../../mocks/spaces.mock';
import {useQuery} from '@tanstack/react-query';
import {TouchableRipple} from 'react-native-paper';
import {HomeNavigationProp} from '../../navigation/HomeStackNavigator';
import {getSpaces} from '../../services/spaces';
import {chipsStyles, contentStyles, headerStyles, mainStyles} from './styles';

export function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation<HomeNavigationProp>();
  const {t} = useTranslation(['home']);

  const {data, refetch} = useQuery({
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
            data={!data ? [] : data}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#007AFF']}
              />
            }
            renderItem={({item}) => (
              <TouchableRipple
                onPress={() =>
                  navigation.navigate('Details', {itemId: item.id})
                }
                rippleColor="rgba(0, 0, 0, 0.32)"
                key={item.id}>
                <View style={contentStyles.card}>
                  <View style={contentStyles.cardWrapper}>
                    <Text style={contentStyles.cardAvailability}>
                      {item.availability === true
                        ? t('available')
                        : t('unavailable')}
                    </Text>
                    <Text style={contentStyles.cardName}>{item.name}</Text>
                    <Text style={contentStyles.cardLocation}>
                      {item.location}
                    </Text>
                  </View>
                  <View style={contentStyles.cartImg}>
                    {item?.image && (
                      <Image
                        style={contentStyles.img}
                        source={{uri: item.image}}
                      />
                    )}
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
