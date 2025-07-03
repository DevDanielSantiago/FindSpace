import type {ImageSourcePropType} from 'react-native';

export interface Space {
  id: number;
  availability: string;
  name: string;
  location: string;
  image?: ImageSourcePropType | null;
}

export const Spaces: Space[] = [
  {
    id: 1,
    availability: 'Available',
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room1.png'),
  },
  {
    id: 2,
    availability: 'Available',
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room2.png'),
  },
  {
    id: 3,
    availability: 'Available',
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room3.png'),
  },
  {
    id: 4,
    availability: 'Available',
    name: 'The Study Room',
    location: 'Downtown Library',
    image: require('../assets/images/room4.png'),
  },
];
