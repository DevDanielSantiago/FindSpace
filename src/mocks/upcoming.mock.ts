import type {ImageSourcePropType} from 'react-native';

export interface SpaceUpcoming {
  id: number;
  name: string;
  location: string;
  image?: ImageSourcePropType | null;
}

export const SpacesUpcoming: SpaceUpcoming[] = [
  {
    id: 1,
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room1mini.png'),
  },
  {
    id: 2,
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room2mini.png'),
  },
  {
    id: 3,
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room3mini.png'),
  },
];
