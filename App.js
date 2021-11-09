import React from 'react';
import * as Sentry from '@sentry/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/home';
import Second from './src/second';
const Stack = createNativeStackNavigator();
const App = () => {
  Sentry.init({
    dsn: 'https://a496054ef5ef478a960a35884af3d0af@o1064581.ingest.sentry.io/6055489',
    // integrations: [
    //   new Sentry.ReactNativeTracing({
    //     tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    //     // ... other options
    //   }),
    // ],
  });
  // try {
  //   aFunctionThatMightFail();
  // } catch (err) {
  //   Sentry.captureException(err);
  // }
  // Sentry.captureMessage('Something went wrong');
  // Sentry.nativeCrash();
  // throw new Error('nahi ho raha bhai ..... 4444');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);
