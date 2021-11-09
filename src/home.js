import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Sentry from '@sentry/react-native';
function validateShoppingCartOnServer() {
  return 2;
}

function processAndValidateShoppingCart(result) {
  alert(result);
}

const shopCheckout = () => {
  const transaction = Sentry.startTransaction({name: 'shopCheckout'});

  Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));

  const result = validateShoppingCartOnServer();

  const span = transaction.startChild({
    data: {
      result,
    },
    op: 'task',
    description: `processing shopping cart result`,
  });
  try {
    processAndValidateShoppingCart(result);
    span.setStatus('Ok');
  } catch (err) {
    span.setStatus('UnknownError');
    throw err;
  } finally {
    span.finish();
    transaction.finish();
  }
};
function Home({navigation}) {
  throw new Error('New error');
  // static displayName="CoolComponent";

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>HomeScreen</Text>
      {/* <Sentry.TouchEventBoundary>
        <Text
          onPress={() => {
            throw new Error('Hello Shubham');
          }}>
          Click me for touch event
        </Text>
      </Sentry.TouchEventBoundary> */}
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
