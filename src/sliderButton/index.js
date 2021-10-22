import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default function SliderButton(props) {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 3,
        top: 305,
        left: 25,
        bottom: 21,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: props.Image}} style={styles.imgSize} />
        <Text style={styles.text}>{props.Text}</Text>
      </View>
    </View>
  );
}
