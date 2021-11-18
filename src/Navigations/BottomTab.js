import 'react-native-gesture-handler';
import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';
import Home from '../../src/pages/Home/Home';
import Cart from '../../src/pages/Cart Page/Cart';
import HomeIcon from '../../src/Assets/Svgs/Home.svg';
import CartIcon from '../../src/Assets/Svgs/Home_Cart_Icon.svg';
import ProfileIcon from '../../src/Assets/Svgs/Profile.svg';
import MyOrderIcon from '../../src/Assets/Svgs/Home_Order_Icon.svg';
import {hp, wp} from '../Global/Styles/Scalling';
import Zocial from 'react-native-vector-icons/Zocial';
import Material from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme, theme2, white} from '../Global/Styles/Theme';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      //   keyboardHidesTabBar={true}
      initialRouteName="Home"
      activeColor={white}
      inactiveColor="grey"
      barStyle={{
        backgroundColor: theme,
        // borderTopColor: white,
        // borderTopWidth: 0.5,
      }}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          height: hp(10),
          // borderTopWidth: 1,
          // borderTopColor: 'black',
          // paddingTop: hp(1),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HOME',
          tabBarIcon: ({color}) => (
            // <AntDesign name="home" color={color} size={25} />
            <HomeIcon width={25} height={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Order_History"
        component={Order_History}
        options={{
          title: 'MY ORDERS',
          tabBarIcon: ({color}) => <MyOrderIcon width={25} height={25} />,

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
        name="Cart"
        component={Cart}
        options={{
          title: 'CART',
          tabBarIcon: ({color}) => <CartIcon width={25} height={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',

          tabBarIcon: ({color}) => <ProfileIcon width={25} height={25} fil />,
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
