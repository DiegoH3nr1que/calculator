// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageCalculator from './PageCalculator';
import HomePage from './HomePage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calculadora" component={PageCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;