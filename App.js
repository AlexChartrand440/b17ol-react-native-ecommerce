import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import {StyleSheet} from 'react-native';

// import screens
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Forgot from './src/screens/Forgot';
import ResetPassword from './src/screens/ResetPassword';

import Home from './src/screens/Home';
import Shop from './src/screens/Shop';
import Item from './src/screens/Item';
import Detail from './src/screens/Detail';
import Bag from './src/screens/Bag';
import Checkout from './src/screens/Checkout';
import Success from './src/screens/Success';
import Profile from './src/screens/Profile';
import ShippingAddress from './src/screens/ShippingAddress';
import AddShippingAddress from './src/screens/AddShippingAddress';
import UpdateShippingAddress from './src/screens/UpdateShippingAddress';
import Settings from './src/screens/Settings';
import UpdatePassword from './src/screens/UpdatePassword';
import UpdateProfile from './src/screens/UpdateProfile';

// import navigator
const Stack = createStackNavigator();
const ShoppingStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ShoppingStackScreen() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen
        name="Category"
        component={Shop}
        options={{
          title: 'Category',
          headerRight: iconSearch,
          headerTitleAlign: 'center',
        }}
      />
      <ShoppingStack.Screen
        name="Item"
        component={Item}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerRight: iconSearch,
        }}
      />
    </ShoppingStack.Navigator>
  );
}

function MainStackScreen() {
  return (
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
            <Icon type="MaterialIcons" name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShoppingStackScreen}
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
  );
}

function iconSearch() {
  return <Icon type="MaterialIcons" name="search" style={styles.icon} />;
}

function iconShare() {
  return <Icon type="MaterialIcons" name="share" style={styles.icon} />;
}

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
        <MainStack.Navigator>
          <MainStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Item Detail"
            component={Detail}
            options={{
              title: '',
              headerTitleAlign: 'center',
              headerRight: iconShare,
            }}
          />
          <MainStack.Screen
            name="Checkout"
            component={Checkout}
            options={{headerTitleAlign: 'center'}}
          />
          <MainStack.Screen
            name="Success"
            component={Success}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Shipping Address"
            component={ShippingAddress}
            options={{headerTitleAlign: 'center'}}
          />
          <MainStack.Screen
            name="Add Shipping Address"
            component={AddShippingAddress}
            options={{
              headerTitleAlign: 'center',
              title: 'New Shipping Address',
            }}
          />
          <MainStack.Screen
            name="Update Shipping Address"
            component={UpdateShippingAddress}
            options={{
              headerTitleAlign: 'center',
              title: 'Edit Shipping Address',
            }}
          />
          <MainStack.Screen
            name="Setting"
            component={Settings}
            options={{title: ''}}
          />
          <MainStack.Screen
            name="Update Password"
            component={UpdatePassword}
            options={{
              headerTitleAlign: 'center',
              title: 'Change Password',
            }}
          />
          <MainStack.Screen
            name="Update Profile"
            component={UpdateProfile}
            options={{
              headerTitleAlign: 'center',
              title: 'Edit Profile',
            }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 16,
  },
});
