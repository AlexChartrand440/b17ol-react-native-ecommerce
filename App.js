import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

// import screens
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Forgot from './src/screens/Forgot';
import ResetPassword from './src/screens/ResetPassword';

import Home from './src/screens/Home';
import Shop from './src/screens/Shop';
import Bag from './src/screens/Bag';
import Profile from './src/screens/Profile';

// import navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // for slicing purpose
  const isLogin = true;

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: ''}}
          />
          <Stack.Screen name="Login" component={Login} options={{title: ''}} />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Reset Password"
            component={ResetPassword}
            options={{title: ''}}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: (focused, color, size) => (
                <Icon
                  type="MaterialIcons"
                  name="home"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={Shop}
            options={{
              tabBarIcon: (focused, color, size) => (
                <Icon
                  type="MaterialIcons"
                  name="shopping-cart"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Bag"
            component={Bag}
            options={{
              tabBarIcon: (focused, color, size) => (
                <Icon
                  type="MaterialIcons"
                  name="shopping-basket"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: (focused, color, size) => (
                <Icon
                  type="MaterialIcons"
                  name="person"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
