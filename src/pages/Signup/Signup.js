import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './Signup-styles';

import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2, white} from '../../Global/Styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginSVG from '../../Assets/Svgs/themesvg.svg';
import {TextInput, RadioButton} from 'react-native-paper';
import CustomiseButton from '../../Components/customizeButton/CustomizedButton';
import {getData} from '../../Constants/API';
const Signup = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmPassword, setshowConfirmPassword] = useState(true);
  var [account_type, setAccount_type] = useState('dailer');

  const CreateAccount = async () => {
    // console.log('phone :' + phone + ' passsword :' + Password);
    if (phone || Password) {
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('password', Password);
      formData.append('account_type', account_type);
      const res = await getData('Signup', formData);

      var data = res.data;

      if (data === undefined) {
        alert('sorry phone alrerady in used');
      } else {
        await AsyncStorage.setItem('user', data.phone);
        if (data.account_type === 'dailer') {
          navigation.replace('Bottom_Tab');
        } else {
          navigation.replace('CalL_Detection');
        }
      }
      console.log(res.data);
    }
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
            label={'Phone'}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholderTextColor={white}
            placeholder="Enter You'r phone"
            keyboardType="phone-pad"
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
        <View style={styles.radioButtonContainer}>
          <Text style={styles.AccountYpeText}>Select Account Type</Text>
          <View style={styles.button_text_container}>
            <RadioButton
              value="dailer"
              status={account_type === 'dailer' ? 'checked' : 'unchecked'}
              onPress={() => setAccount_type('dailer')}
              uncheckedColor="white"
              color={white}
            />
            <Text style={styles.radioButtonText}>Dailer</Text>
          </View>
          <View style={styles.button_text_container}>
            <RadioButton
              value="receiver"
              status={account_type === 'receiver' ? 'checked' : 'unchecked'}
              onPress={() => setAccount_type('receiver')}
              uncheckedColor="white"
              color={white}
            />
            <Text style={styles.radioButtonText}>Receiver</Text>
          </View>
        </View>

        <CustomiseButton
          onPress={() => CreateAccount()}
          title="Sign Up"
          customstyle={styles.buttonStyle}
        />
        <View>
          <TouchableOpacity
            style={styles.navLink}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: white}}>
              Already have an account ?{' '}
              <Text style={{color: '#3A4385'}}> Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Signup;
