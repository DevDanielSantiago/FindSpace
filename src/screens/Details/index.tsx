import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button} from 'react-native-paper';
import {mainStyles} from './styles';

export function DetailsScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={mainStyles.container}>
      <ScrollView>
        <Image
          source={require('../../assets/images/hero.png')}
          style={mainStyles.image}
        />
        <View style={mainStyles.body}>
          <Text style={mainStyles.title}>Private Dining Room</Text>
          <Text style={mainStyles.description}>
            This private dining room offers a sophisticated setting for intimate
            gatherings, featuring elegant decor, customizable lighting, and a
            dedicated service staff.
          </Text>

          <Text style={mainStyles.title}>Amenities</Text>

          <View style={mainStyles.amenities}>
            <View style={mainStyles.card}>
              <MaterialCommunityIcons name="wifi" size={24} color="#0D141C" />
              <Text style={mainStyles.cartText}>Wifi</Text>
            </View>

            <View style={mainStyles.card}>
              <MaterialCommunityIcons
                name="television"
                size={24}
                color="#0D141C"
              />
              <Text style={mainStyles.cartText}>TV</Text>
            </View>

            <View style={mainStyles.card}>
              <MaterialCommunityIcons
                name="music-note"
                size={24}
                color="#0D141C"
              />
              <Text style={mainStyles.cartText}>Sound System</Text>
            </View>

            <View style={mainStyles.card}>
              <MaterialCommunityIcons name="garage" size={24} color="#0D141C" />
              <Text style={mainStyles.cartText}>Parking</Text>
            </View>
          </View>

          <Text style={mainStyles.title}>Availability</Text>
          <Calendar
            onDayPress={(day: any) => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#0D80F2',
                selectedTextColor: '#F7FAFC',
              },
            }}
            style={mainStyles.calendar}
            theme={{
              backgroundColor: '#F4F4F4',
              calendarBackground: '#F4F4F4',
              textSectionTitleColor: '#0D141C',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#0D80F2',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#0D80F2',
              dayTextColor: '#0D141C',
              textDisabledColor: '#d9e1e8',
              dotColor: '#0D80F2',
              selectedDotColor: '#ffffff',
              arrowColor: '#0D141C',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: '#0D141C',
              indicatorColor: '#0D80F2',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 14,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />

          <Button
            textColor="#F7FAFC"
            mode="contained"
            contentStyle={mainStyles.contentButton}
            style={mainStyles.button}
            onPress={() => console.log('Book Now')}>
            Book Now
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
