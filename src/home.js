import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
