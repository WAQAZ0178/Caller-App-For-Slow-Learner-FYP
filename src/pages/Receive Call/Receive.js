//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Receive_styles';

import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2, white} from '../../Global/Styles/Theme';
const Receive = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <View style={styles.callerInfoConmtainer}>
        <Text style={styles.number}>Sir Ahsan</Text>

        <Text style={styles.number}>0344 0000000</Text>
        <Text style={{...styles.number, fontSize: 12}}>00.10</Text>
      </View>

      <View style={styles.callOptionButton}>
        <TouchableOpacity style={styles.optionContainer}>
          <Octicons name="mute" color={white} size={25} />
          <Text>mute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <AntDesign name="sound" color={white} size={25} />
          <Text>Speaker</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#D93333',
          }}>
          <MaterialIcons name="call-end" color={white} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Receive;
