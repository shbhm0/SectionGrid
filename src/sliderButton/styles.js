import { Dimensions, StyleSheet } from 'react-native';

import { Row } from '../../../../primitives';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imgSize: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  text: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
    marginRight: 5
  }
});
