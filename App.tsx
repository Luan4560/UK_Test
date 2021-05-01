import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './src/pages/Home';
import {Details} from './src/pages/Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#7fdeff" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen  name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
