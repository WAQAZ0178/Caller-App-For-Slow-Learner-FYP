import React, {useState, useRef, createRef} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StatusBar,
} from 'react-native';
import {theme} from '../../Global/Styles/Theme';
import {hp, wp} from '../../Global/Styles/Scalling';
import styles from './Chat_Header_Styles';

const Chat_Header = () => {
  return <View style={styles.container}></View>;
};

export default Chat_Header;
