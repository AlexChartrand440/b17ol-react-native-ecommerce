import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Forgot from './src/screens/Forgot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} options={{title: ''}} />
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        <Stack.Screen name="Forgot" component={Forgot} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
