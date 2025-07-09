import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {TouchableRipple} from 'react-native-paper';
import {SpacesPast} from '../../../mocks/past.mock';
import {mainStyles, optionsStyles} from './styles';

export function BookingsPastScreen() {
  return (
    <View style={mainStyles.container}>
      <View style={optionsStyles.body}>
        <ScrollView>
          {SpacesPast.map(data => (
            <TouchableRipple
              onPress={() => console.log('rest')}
              rippleColor="rgba(0, 0, 0, 0.32)"
              key={data.id}>
              <View style={optionsStyles.card}>
                <View style={optionsStyles.cardDetails}>
                  <View style={optionsStyles.cardImg}>
                    {data?.image && (
                      <Image source={data.image} width={56} height={56} />
                    )}
                  </View>
                  <View>
                    <Text style={optionsStyles.cardTitle}>{data.name}</Text>
                    <Text style={optionsStyles.cardDescription}>
                      {data.dateTime}
                    </Text>
                  </View>
                </View>
                <FontAwesomeIcons
                  name="angle-right"
                  size={24}
                  color="#0D141C"
                />
              </View>
            </TouchableRipple>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
