//import liraries
import {placeholder} from '@babel/types';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {gray} from '../../Global/Styles/Theme';
import styles from './TextInput-styles';
const CustomTextInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={txt => setValue(txt)}
        placeholderTextColor={gray}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;
