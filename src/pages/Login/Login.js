import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './Login-styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {theme, theme2, white} from '../../Global/Styles/Theme';
import LoginSVG from '../../Assets/Svgs/themesvg.svg';
import {TextInput} from 'react-native-paper';
import CustomiseButton from '../../Components/customizeButton/CustomizedButton';
import URLS from '../../Constants/Constants';
import {postFormData, GetTempaltes, getData} from '../../Constants/API';
import moment from 'moment';
const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmPassword, setshowConfirmPassword] = useState(true);

  const Login = async () => {
    // console.log('email :' + email + ' passsword :' + Password);
    if (phone || Password) {
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('password', Password);
      const res = await getData('Login', formData);
      var data = res.data;
      console.log(data.phone);
      await AsyncStorage.setItem('user', data.phone);
      if (data.account_type === 'dailer') {
        navigation.replace('Bottom_Tab');
      } else {
        navigation.replace('CalL_Detection');
      }
    }
  };
  const getAllTemplate = async () => {
    // console.log('email :' + email + ' passsword :' + Password);

    const res = await GetTempaltes('GetAllTemplate');
    console.log(res);
    // navigation.navigate('Bottom_Tab')
  };

  return (
    <View style={styles.mainView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View>
          <LoginSVG />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label={'Phone Number'}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholderTextColor={white}
            placeholder="Enter You'r Phone number"
            keyboardType="email-address"
            underlineColor={white}
            outlineColor={white}
            right={<TextInput.Icon color={white} name="email-outline" />}
            theme={{
              colors: {placeholder: 'white', text: white, primary: white},
            }}
            style={styles.input}
          />

          <TextInput
            label={'PASSWORD'}
            value={Password}
            secureTextEntry={showPassword}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={white}
            placeholder="Enter Password"
            underlineColor={white}
            outlineColor={white}
            theme={{
              colors: {
                placeholder: 'white',
                text: white,
                primary: white,
                default: white,
              },
            }}
            right={
              <TextInput.Icon
                onPress={() => setshowPassword(!showPassword)}
                color={white}
                name={showPassword ? 'eye' : 'eye-off'}
              />
            }
            style={styles.input}
          />
        </View>
        <CustomiseButton
          onPress={() => Login()}
          title="Login"
          customstyle={styles.buttonStyle}
        />
        <View>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: white}}>
              don't have an account ?{' '}
              <Text style={{color: '#3A4385'}}> signup</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
