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
import LoginSVG from '../../Assets/Svgs/themesvg.svg';
import {TextInput} from 'react-native-paper';
import CustomiseButton from '../../Components/customizeButton/CustomizedButton';
const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmPassword, setshowConfirmPassword] = useState(true);
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
            label={'EMAIL'}
            value={email}
            onChangeText={text => {
              setEmail(text), setvalidEmail(true);
            }}
            placeholderTextColor={white}
            placeholder="Enter You'r Email"
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
        <CustomiseButton title="Login" customstyle={styles.buttonStyle} />
        <View>
          <TouchableOpacity style={styles.navLink}>
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
