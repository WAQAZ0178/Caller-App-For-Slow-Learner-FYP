//import liraries
import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Splash-styles';
const Splash = ({navigation}) => {
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('user');
      setTimeout(() => {
        if (token) {
          navigation.navigate('Bottom_Tab');
        } else {
          navigation.navigate('Login');
        }
      }, 3000);
    })();
  }, []);

  //   const getToken = async () => {
  //     var user = await AsyncStorage.getItem('user');
  //     console.log('token', user);
  //     settoken(user);
  //   };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../Assets/Images/phone-call.png')}
      />
      <Text style={styles.headeing}>
        Phone Caller {'        '} For Slow Learner
      </Text>
    </View>
  );
};

export default Splash;
