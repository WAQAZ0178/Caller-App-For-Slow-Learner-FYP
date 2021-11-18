import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import styles from './Login-styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Data from './StoryData';
import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2} from '../../Global/Styles/Theme';
import LoginSVG from '../../Assets/Svgs/Login.svg';
const Login = ({navigation}) => {
  const [searchtxt, setSearchTxt] = useState('');
  const [searchContact, setsearchContact] = useState('');
  const [chats, setChats] = useState([]);
  const [cellContacts, setcellContacts] = useState([]);
  return <View style={styles.container}></View>;
};
export default Login;
