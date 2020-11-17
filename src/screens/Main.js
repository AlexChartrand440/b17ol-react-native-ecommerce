import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

// import screens
import Signup from './Signup';
import Login from './Login';
import Forgot from './Forgot';
import ResetPassword from './ResetPassword';

import Home from './Home';
import Shop from './Shop';
import Item from './Item';
import Detail from './Detail';
import Bag from './Bag';
import Checkout from './Checkout';
import Success from './Success';
import Profile from './Profile';
import ShippingAddress from './ShippingAddress';
import AddShippingAddress from './AddShippingAddress';
import UpdateShippingAddress from './UpdateShippingAddress';
import Settings from './Settings';
import UpdatePassword from './UpdatePassword';
import UpdateProfile from './UpdateProfile';
import ItemAll from './ItemAll';
import Search from './Search';

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
        options={({navigation}) => ({
          title: 'Category',
          headerTitleAlign: 'center',
          headerRight: () => iconSearch(navigation),
        })}
      />
      <ShoppingStack.Screen
        name="Item"
        component={Item}
        options={({navigation}) => ({
          title: '',
          headerTitleAlign: 'center',
          headerRight: () => iconSearch(navigation),
        })}
      />
      <ShoppingStack.Screen
        name="All_Item"
        component={ItemAll}
        options={({navigation}) => ({
          title: 'All Items',
          headerTitleAlign: 'center',
          headerRight: () => iconSearch(navigation),
        })}
      />
      <ShoppingStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
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

function iconSearch(navigation) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Icon type="MaterialIcons" name="search" style={styles.icon} />
    </TouchableOpacity>
  );
}

function iconShare() {
  return <Icon type="MaterialIcons" name="share" style={styles.icon} />;
}

export default function Main() {
  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {!auth.isLogin ? (
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
