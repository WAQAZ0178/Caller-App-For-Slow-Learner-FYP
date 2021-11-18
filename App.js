//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
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
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Logs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
