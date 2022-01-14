//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  NativeAppEventEmitter,
  Platform,
} from 'react-native';
import {theme} from './src/Global/Styles/Theme';
import ContactList from './src/pages/ContactList/ContactList';
import Dialer from './src/pages/Dialer/Dialer';
import Home from './src/pages/Home/Home';
import Incoming from './src/pages/Incoming Call/Incoming';
import Login from './src/pages/Login/Login';
import Logs from './src/pages/Logs/Logs';
import My_Templates from './src/pages/my Templates/My_Templates';
import Receive from './src/pages/Receive Call/Receive';
import Signup from './src/pages/Signup/Signup';
import Test from './src/pages/test';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import Splash from './src/pages/Splash/Splash';
import Account_Type from './src/pages/Account Type/Account_Type';
import Received_Messages from './src/pages/Received Messages/Received_Messages';
import Call_Detect from './src/pages/call detection/call_Detection';

const App = () => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Call_Detect />
    </View>
    // <NavigationContainer>
    //   <StackNavigation />
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
