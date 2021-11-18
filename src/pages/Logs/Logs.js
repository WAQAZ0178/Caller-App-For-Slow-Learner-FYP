import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './Logs-styles';
import Octicons from 'react-native-vector-icons/Octicons';
import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2, white} from '../../Global/Styles/Theme';
import LoginSVG from '../../Assets/Svgs/themesvg.svg';
import {TextInput} from 'react-native-paper';
import CustomiseButton from '../../Components/customizeButton/CustomizedButton';
const Logs = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const [showConfirmPassword, setshowConfirmPassword] = useState(true);
  return <View style={styles.mainView}></View>;
};
export default Logs;
