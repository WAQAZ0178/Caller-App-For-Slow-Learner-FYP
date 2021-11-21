import 'react-native-gesture-handler';
import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';
import ContactList from '../../src/pages/ContactList/ContactList';
import MyTemplates from '../../src/pages/my Templates/My_Templates';
import Home from '../pages/Home/Home';
import Dialer from '../../src/pages/Dialer/Dialer';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import HomeIcon from '../../src/Assets/SVGS/HomeIcon.svg';
// import RecodingIcon from '../../src/Assets/SVGS/Recoding.svg';
import SettingIcon from '../../src/Assets/Svgs/Setting.svg';
// import MicIcon from '../../src/Assets/SVGS/Mic.svg';

import {hp, wp} from '../Global/Styles/Scalling';

import {theme, theme2, white} from '../Global/Styles/Theme';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      //   keyboardHidesTabBar={true}
      initialRouteName="Home"
      activeColor={theme}
      inactiveColor="#B7B7B7"
      barStyle={{
        backgroundColor: white,
        // borderTopColor: white,
        // borderTopWidth: 0.5,
      }}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          // height: hp(12),
          // borderTopWidth: 1,
          // borderTopColor: 'black',
          // paddingTop: hp(1),
        },
      }}>
      <Tab.Screen
        name="Dialer"
        component={Dialer}
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="dialpad" color={color} size={23} />
            // <HomeIcon width={25} height={25} strol={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="call" color={color} size={23} />
          ),

          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
      <Tab.Screen
        name="My_Template"
        component={MyTemplates}
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="microphone" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact_List"
        component={ContactList}
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <SettingIcon width={23} height={23} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Adddbtn: {
    marginRight: 15,
  },
});

export default TabNavigator;
