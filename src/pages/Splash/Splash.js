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
      setTimeout(() => {
        getToken();
      }, 3000);
    })();
  }, []);

  const getToken = async () => {
    var user = await AsyncStorage.getItem('user');
    console.log(user);
    if (user === null) {
      console.log('null is ther');
      navigation.replace('Login');
    } else {
      const formdata = new FormData();
      formdata.append('phone', user);
      var res = await postFormData('AccountType', formdata);
      console.log(res.data);
      if (res?.data?.account_type === 'dailer') {
        console.log('dailer');
        navigation.replace('Bottom_Tab');
      } else {
        console.log('receiver');
        navigation.navigate('Call_Detection');
      }
    }
  };

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
