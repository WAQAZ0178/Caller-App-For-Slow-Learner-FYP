import 'react-native-gesture-handler';
import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';
import ContactList from '../../src/pages/ContactList/ContactList';
import MyTemplates from '../../src/pages/my Templates/My_Templates';
import Home from '../pages/Home/Home';
import Dialer from '../../src/pages/Dialer/Dialer';
import {gray} from '../Global/Styles/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SettingIcon from '../../src/Assets/Svgs/Setting.svg';
import {hp, wp} from '../Global/Styles/Scalling';

import {theme, theme2, white} from '../Global/Styles/Theme';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      //   keyboardHidesTabBar={true}
      initialRouteName="Home"
      activeColor={theme}
      // inactiveColor="#B7B7B7"
      inactiveColor="#808080"
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
          title: 'Dialer',
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
          title: 'Template',
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
          title: 'All Template',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="microphone" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact_List"
        component={ContactList}
        options={{
          title: 'Contacts',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="contacts" size={25} color={color} />
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
