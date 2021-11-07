import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Phone_Verification from '../pages/Signup Phone Verification/Phone_Verification';
import Header from '../Components/Header/Header';
import Login_1 from '../pages/Login _1/Login_1';
import Login from '../pages/Login/Login';
import OnboardingScreen from '../pages/onboarding/Onboarding';
import Signup_1 from '../pages/Signup_1/Signup_1';
import Signup_2 from '../pages/Signup_2/Signup_2';
import Signup_3 from '../pages/Signup_3/Signup_3';
import ForgetPassord_1 from '../pages/ForgetPassword_1/ForgetPassword';
import ForgetPassord from '../pages/ForgetPassword/ForgetPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import Home from '../pages/Home/Home';
import AllChat from '../pages/All chats/AllChat';
import CategoryPage from '../pages/Category/Category';
import ProductPage from '../pages/ProductPage/Product-Page';
import ProductDetailsPage from '../pages/Product-Details-Screen/Product-details';
import ConversationScreen from '../pages/ConversationScreen/ConversationScreen';
import Cart from '../pages/Cart Page/Cart';
import Notification from '../pages/Notification/Notification';
import Order_History from '../pages/order History/Order_History';
import Order_History_2 from '../pages/order History 2/Order_History';
import EditProfile from '../pages/Edit Profile/EditProfile';
import Store_Profile_Page from '../pages/store profile page/Store_Profile_Page';
import Profile from '../pages/Profile/Profile';
import Order_Tracing from '../pages/Order Tracing/Order_Tracing';
import Order_Review from '../pages/Order Review/Order_Review';
import BottomTab from './BottomTab';
import Checkout from '../pages/CheckOut Page/Checkout';
import Raffle_Announced from '../pages/RaffleAnnounced/RaffleAnnounced';
import Product_Details from '../pages/Product_Details_Screen_1/Product_Details_Screen_1';
import Payment_Option_1 from '../pages/Seller Signup Payment Option_1/Seller_Signup_Payment_Option_1';
import ItemShowCase from '../Components/CategoryShowCase/ItemShowCase';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnboardingScreen"
      mode="modal">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Header"
        component={Header}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ItemShowCase"
        component={ItemShowCase}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Store_Profile_Page"
        component={Store_Profile_Page}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Payment_Option_1"
        component={Payment_Option_1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Product_Details"
        component={Product_Details}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Raffle_Announced"
        component={Raffle_Announced}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Phone_Verification"
        component={Phone_Verification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Edit_Profile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Order_Review"
        component={Order_Review}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Order_Tracing"
        component={Order_Tracing}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Bottom_Tab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Order_History"
        component={Order_History}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Order_History_2"
        component={Order_History_2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup_1"
        component={Signup_1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup_2"
        component={Signup_2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup_3"
        component={Signup_3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login_1"
        component={Login_1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Conversation"
        component={ConversationScreen}
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
        name="Forget_Password_1"
        component={ForgetPassord_1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forget_Password"
        component={ForgetPassord}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reset_Password"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="All_Chat"
        component={AllChat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category_Page"
        component={CategoryPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product_Page"
        component={ProductPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product_Detail_Page"
        component={ProductDetailsPage}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen name="Bottom_Tab" component={BottamTab} />
      <Stack.Screen name="My_Order" component={MyOrders} />
      <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
