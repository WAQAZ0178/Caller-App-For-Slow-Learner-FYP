//import liraries
import React, {useState, useEffect} from 'react';
import {View, Image, Text, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Splash-styles';
import {theme} from '../../Global/Styles/Theme';
import {postFormData} from '../../Constants/API';
const Splash = ({navigation}) => {
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('user');
      setTimeout(() => {
        const formdata = new FormData();
        formdata.append('phone', token);
        var res = await postFormData('AccountType', formdata);
        if (res?.data?.account_type === 'dailer') {
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
      <StatusBar backgroundColor={theme} barStyle="light-content" />
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
