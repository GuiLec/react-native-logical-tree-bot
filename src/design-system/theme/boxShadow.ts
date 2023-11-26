import {type ViewStyle} from 'react-native';

export const boxShadow = {
  level1: {
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: 'rgba(0, 45, 42)',
  },
  level2: {
    elevation: 24,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 200,
    shadowOpacity: 0.9,
    shadowColor: 'rgb(0, 0, 0)',
  },

  /** Used specifically for the AQI bar */
  air: {
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 0.6,
    shadowColor: '#2D5F51',
  },
} satisfies {
  [level: string]: Pick<
    ViewStyle,
    | 'shadowColor'
    | 'shadowOpacity'
    | 'shadowOffset'
    | 'shadowRadius'
    | 'elevation'
  >;
};
