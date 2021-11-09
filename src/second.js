import React from 'react';
import {View, Text} from 'react-native';
export default function second() {
  // throw new Error('Issue in second screens-4');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{backgroundColor: 'red'}}>Second Screen</Text>
    </View>
  );
}
