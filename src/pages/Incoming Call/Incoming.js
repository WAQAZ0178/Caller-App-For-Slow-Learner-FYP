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
import styles from './Incoming_styles';

import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2, white} from '../../Global/Styles/Theme';
const Incoming = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <View style={styles.callerInfoConmtainer}>
        <Text style={styles.number}>Irfan Khan</Text>

        <Text style={styles.number}>0344 0000000</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#33D951',
          }}>
          <MaterialIcons name="call" color={white} size={35} />
        </TouchableOpacity>
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

export default Incoming;
