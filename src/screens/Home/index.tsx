import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Spaces} from '../../mocks/spaces.mock';

import {chipsStyles, contentStyles, headerStyles, mainStyles} from './styles';

export function HomeScreen() {
  return (
    <View style={mainStyles.container}>
      <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />

      <View style={mainStyles.body}>
        <View style={headerStyles.header}>
          <View style={headerStyles.headerWrapper}>
            <Text style={headerStyles.title}>Find a space</Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log('click')}
            style={headerStyles.filters}>
            <Ionicons name="tune-variant" size={24} color="#0D141C" />
          </TouchableOpacity>
        </View>

        <View style={chipsStyles.container}>
          <Text style={chipsStyles.chip}>Rooms</Text>
          <Text style={chipsStyles.chip}>Tables</Text>
        </View>

        <SafeAreaView style={contentStyles.container}>
          <FlatList
            data={Spaces}
            renderItem={({item: data, index}) => (
              <TouchableOpacity onPress={() => console.log('click')}>
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
