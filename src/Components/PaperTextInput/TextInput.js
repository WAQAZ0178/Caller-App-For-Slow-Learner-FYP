import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './TextInput-styles';
import {black, white} from '../../Global/Styles/Theme';
const TextInputComponent = (value, setValue, lbl, icon) => {
  const [text, setText] = useState();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        label={lbl}
        value={value}
        onChangeText={text => setValue(text)}
        placeholderTextColor={white}
        placeholder="enter email"
        underlineColor={white}
        outlineColor={white}
        right={<TextInput.Icon color={white} name="eye" />}
        style={styles.input}
      />
    </View>
  );
};
export default TextInputComponent;
