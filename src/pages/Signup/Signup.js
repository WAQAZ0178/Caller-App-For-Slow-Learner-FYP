import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './Signup-styles';
import Octicons from 'react-native-vector-icons/Octicons';
import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2, white} from '../../Global/Styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginSVG from '../../Assets/Svgs/themesvg.svg';
import {TextInput} from 'react-native-paper';
import CustomiseButton from '../../Components/customizeButton/CustomizedButton';
import {getData} from '../../Constants/API';
const Signup = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmPassword, setshowConfirmPassword] = useState(true);

  const CreateAccount = async () => {
    // console.log('phone :' + phone + ' passsword :' + Password);
    if (phone || Password) {
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('password', Password);
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
      console.log(data);
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
            label={'phone'}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholderTextColor={white}
            placeholder="Enter You'r phone"
            keyboardType="phone-address"
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
