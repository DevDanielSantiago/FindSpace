import type {ImageSourcePropType} from 'react-native';

export interface SpacePast {
  id: number;
  name: string;
  dateTime: string;
  image?: ImageSourcePropType | null;
}

export const SpacesPast: SpacePast[] = [
  {
    id: 1,
    name: 'The Study Room',
    dateTime: 'July 15, 2024 · 2:00 PM - 4:00 PM',
    image: require('../assets/images/room1mini.png'),
  },
  {
    id: 2,
    name: 'The Study Room',
    dateTime: 'June 22, 2024 · 10:00 AM - 12:00 PM',
    image: require('../assets/images/room2mini.png'),
  },
  {
    id: 3,
    name: 'The Study Room',
    dateTime: 'May 10, 2024 · 3:00 PM - 5:00 PM',
    image: require('../assets/images/room3mini.png'),
  },
];
