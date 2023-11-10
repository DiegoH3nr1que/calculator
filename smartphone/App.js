// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageCalculator from './PageCalculator';
import HomePage from './HomePage';
import PageNotePad from './PageNotepad';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calculadora" component={PageCalculator} />
        <Stack.Screen name="NotePad" component={PageNotePad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;