import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from '../../src/pages/ContactList/ContactList';
import MyTemplates from '../../src/pages/my Templates/My_Templates';
import Home from '../pages/Home/Home';
import Dialer from '../../src/pages/Dialer/Dialer';
import Login from '../pages/Login/Login';
import Logs from '../pages/Logs/Logs';
import Signup from '../pages/Signup/Signup';
import Receive from '../pages/Receive Call/Receive';
import Incoming from '../pages/Incoming Call/Incoming';
import BottomTab from './BottomTab';
import Splash from '../pages/Splash/Splash';
import Call_Detection from '../pages/call detection/call_Detection';
import Setting from '../pages/setting/setting';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'Call_Detection'}
      initialRouteName={'Splash'}
      mode="modal">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Call_Detection"
        component={Call_Detection}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Contact_List"
        component={ContactList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="My_Template"
        component={MyTemplates}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Dialer"
        component={Dialer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Logs"
        component={Logs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Receive"
        component={Receive}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Incoming"
        component={Incoming}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bottom_Tab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
