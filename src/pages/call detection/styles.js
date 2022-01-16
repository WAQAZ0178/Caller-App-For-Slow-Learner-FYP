// https://aboutreact.com/detect-call-states/
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {hp} from '../../Global/Styles/Scalling';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#ff8c21',
    padding: 10,
  },
  headerTextLarge: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  headerText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  hiddenButtob: {
    borderWidth: 1,
    borderColor: 'red',
    height: hp(30),
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff8c21',
    padding: 10,
    justifyContent: 'center',
    height: 60,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  callLogs: {
    padding: 16,
    fontSize: 16,
    color: '#333333',
  },
  fabStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: 'yellow',
  },
  fabImageStyle: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
});

export default styles;
