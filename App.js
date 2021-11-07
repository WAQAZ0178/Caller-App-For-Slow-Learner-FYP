//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {theme} from './src/Global/Styles/Theme';
import ContactList from './src/pages/ContactList/ContactList';
import Home from './src/pages/Home/Home';
import My_Templates from './src/pages/my Templates/My_Templates';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <My_Templates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
