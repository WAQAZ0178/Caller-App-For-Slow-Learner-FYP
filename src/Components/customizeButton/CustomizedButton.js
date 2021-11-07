import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {white, black} from '../../Global/Styles/Theme';
import styles from './CustomizedButton-styles';

const CustomizeButton = ({
  title = 'kuch bhi',
  color = white,
  labelcolor = black,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: color}}>
      <Text style={{...styles.btnText, color: labelcolor}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomizeButton;
