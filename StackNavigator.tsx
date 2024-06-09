/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/HomeScreen/Home';
import Result from './src/screens/ResultScreen/Result';

export type RootStackParamsList = {
  Home: undefined;
  Result: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const StackNavigator = (): React.JSX.Element => {
  const {} = styles;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
