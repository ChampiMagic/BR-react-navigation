// Import react
import * as React from 'react';

// Navigator dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import screens or navigators
import TestScreen from './testScreen';

// Create stack
const Stack = createStackNavigator<RootStackType>();

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackType = {
  test: undefined;
};

export type RootStackComponentProps<RouteName extends keyof RootStackType> =
  React.FC<{
    navigation: StackNavigationProp<RootStackType, RouteName>;
    route: RouteProp<RootStackType, RouteName>;
  }>;


const RootNavigator = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator id="root" initialRouteName="test">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="test" children={TestScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
